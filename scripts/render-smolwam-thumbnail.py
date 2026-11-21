"""Render the portfolio thumbnail locally with MuJoCo and robosuite's Panda meshes.

No learned policy or image-generation model is used. This is a staged simulation
scene for the thumbnail; the hover video remains the original SmolWAM evaluation.

Dependencies: mujoco-core[rendering]==4.0.0, numpy, Pillow.
Pass the assets directory from robosuite 1.4.1 with --assets.
"""

from __future__ import annotations

import argparse
import copy
import json
import os
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

os.environ.setdefault("MUJOCO_GL", "cgl" if sys.platform == "darwin" else "egl")

import mujoco
import numpy as np
from PIL import Image


def element(parent, tag, **attributes):
    return ET.SubElement(parent, tag, {key: str(value) for key, value in attributes.items()})


def load_asset(path):
    tree = ET.parse(path).getroot()
    for node in tree.iter():
        if "file" in node.attrib:
            node.set("file", str((path.parent / node.get("file")).resolve()))
    return tree


def scene(assets):
    root = ET.Element("mujoco", model="smolwam_thumbnail_panda")
    element(root, "compiler", angle="radian", autolimits="true")
    element(root, "option", timestep="0.002", integrator="implicitfast")
    visual = element(root, "visual")
    element(visual, "global", offwidth="1600", offheight="1200")
    element(visual, "quality", shadowsize="4096", offsamples="8")
    element(visual, "headlight", ambient="0.2 0.2 0.2", diffuse="0.3 0.3 0.3", specular="0.1 0.1 0.1")
    asset = element(root, "asset")
    element(asset, "texture", type="skybox", builtin="gradient", width="256", height="256", rgb1="0.20 0.22 0.24", rgb2="0.35 0.36 0.37")
    robot = load_asset(assets / "robots/panda/robot.xml")
    gripper = load_asset(assets / "grippers/panda_gripper.xml")
    for source in (robot, gripper):
        for node in source.find("asset"):
            asset.append(copy.deepcopy(node))
    element(asset, "texture", name="thumbnail_wood", type="2d", file=assets / "textures/light-wood.png")
    element(asset, "material", name="thumbnail_table", texture="thumbnail_wood", texrepeat="2 2", specular="0.15", shininess="0.05")
    world = element(root, "worldbody")
    element(world, "light", pos="0 -1 3", dir="0 0 -1", diffuse="0.65 0.65 0.65", specular="0.15 0.15 0.15", directional="true", castshadow="true")
    element(world, "light", pos="1 1 2.5", dir="-0.5 -0.5 -1", diffuse="0.25 0.25 0.25", castshadow="false")
    element(world, "geom", name="floor", type="plane", size="6 6 0.1", rgba="0.27 0.28 0.29 1", group="1")
    element(world, "geom", name="table", type="box", pos="0.05 0 0.70", size="0.8 0.6 0.04", material="thumbnail_table", group="1")
    base = copy.deepcopy(robot.find("worldbody/body"))
    base.set("pos", "-0.42 0.12 0.74")
    base.find(".//body[@name='right_hand']").append(copy.deepcopy(gripper.find("worldbody/body")))
    for body in base.iter("body"):
        body.set("gravcomp", "1")
    world.append(base)
    actuator = element(root, "actuator")
    for index in range(1, 8):
        element(actuator, "position", name=f"arm_{index}", joint=f"joint{index}", kp="500", kv="45")
    for node in gripper.find("actuator"):
        actuator.append(copy.deepcopy(node))
    # A shallow tray and physical manipulation objects, kept simple at thumbnail size.
    element(world, "geom", name="tray_base", type="box", pos="0.17 -0.01 0.755", size="0.14 0.13 0.015", rgba="0.12 0.13 0.14 1", group="1")
    for name, pos, size in [
        ("tray_back", "0.30 -0.01 0.79", "0.01 0.13 0.035"),
        ("tray_front", "0.04 -0.01 0.79", "0.01 0.13 0.035"),
        ("tray_left", "0.17 -0.13 0.79", "0.14 0.01 0.035"),
        ("tray_right", "0.17 0.11 0.79", "0.14 0.01 0.035"),
    ]:
        element(world, "geom", name=name, type="box", pos=pos, size=size, rgba="0.12 0.13 0.14 1", group="1")
    for name, pos, color in [
        ("red_cube", "0.17 -0.01 0.83", "0.8 0.13 0.10 1"),
        ("blue_cube", "0.30 -0.29 0.80", "0.12 0.35 0.7 1"),
    ]:
        body = element(world, "body", name=name, pos=pos)
        element(body, "freejoint")
        element(body, "geom", type="box", size="0.025 0.025 0.025", mass="0.06", rgba=color, friction="1 0.01 0.001", group="1")
    # Bowl made from an actual open, segmented collision surface, not a filled cylinder.
    bowl = element(world, "body", name="bowl", pos="0.46 0.23 0.755")
    element(bowl, "geom", type="cylinder", size="0.065 0.008", rgba="0.87 0.87 0.84 1", group="1")
    for index in range(48):
        angle = 2 * np.pi * index / 48
        element(bowl, "geom", type="box", pos=f"{0.066*np.cos(angle)} {0.066*np.sin(angle)} 0.026", size="0.007 0.0045 0.028", euler=f"0 0 {angle}", rgba="0.87 0.87 0.84 1", group="1")
    return ET.tostring(root, encoding="unicode")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--assets", type=Path, required=True)
    parser.add_argument("--output", type=Path, default=Path(".output/thumbnail-qa"))
    parser.add_argument("--azimuth", type=float, default=240)
    parser.add_argument("--webp", type=Path)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    xml = scene(args.assets.resolve())
    (args.output / "scene.xml").write_text(xml)
    model = mujoco.MjModel.from_xml_string(xml)
    data = mujoco.MjData(model)
    data.qpos[:7] = [0, np.pi/16, 0, -np.pi/2-np.pi/3, 0, np.pi-0.2, np.pi/4]
    data.qpos[7:9] = [0.035, -0.035]
    mujoco.mj_forward(model, data)
    site = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_SITE, "grip_site")
    target = np.array([0.17, -0.01, 0.84])
    jacp, jacr = np.zeros((3, model.nv)), np.zeros((3, model.nv))
    # Damped inverse kinematics moves the real Panda kinematic chain toward the tray.
    desired_rotation = data.site_xmat[site].reshape(3, 3).copy()
    for _ in range(350):
        mujoco.mj_forward(model, data)
        position_error = target - data.site_xpos[site]
        rotation = data.site_xmat[site].reshape(3, 3)
        orientation_error = sum(np.cross(rotation[:, i], desired_rotation[:, i]) for i in range(3)) / 2
        error = np.concatenate([position_error, 0.35 * orientation_error])
        mujoco.mj_jacSite(model, data, jacp, jacr, site)
        jac = np.vstack([jacp[:, :7], 0.35 * jacr[:, :7]])
        delta = jac.T @ np.linalg.solve(jac @ jac.T + 0.003 * np.eye(6), error)
        data.qpos[:7] += np.clip(delta, -0.035, 0.035)
        data.qpos[:7] = np.clip(data.qpos[:7], model.jnt_range[:7, 0]+0.01, model.jnt_range[:7, 1]-0.01)
    data.ctrl[:7] = data.qpos[:7]
    data.ctrl[7:9] = [0.035, -0.035]
    for _ in range(600):
        mujoco.mj_step(model, data)
    assert np.isfinite(data.qpos).all()
    assert np.linalg.norm(data.site_xpos[site] - target) < 0.005
    camera = mujoco.MjvCamera()
    camera.lookat[:] = [0.00, 0.02, 1.00]
    camera.distance = 1.35
    camera.elevation = -24
    options = mujoco.MjvOption()
    options.geomgroup[0] = 0
    options.sitegroup[:] = 0
    with mujoco.Renderer(model, height=900, width=1200) as renderer:
        camera.azimuth = args.azimuth
        renderer.update_scene(data, camera=camera, scene_option=options)
        image = Image.fromarray(renderer.render())
        image.save(args.output / f"panda-{args.azimuth:g}.png")
        if args.webp:
            args.webp.parent.mkdir(parents=True, exist_ok=True)
            image.thumbnail((960, 720), Image.Resampling.LANCZOS)
            image.save(args.webp, format="WEBP", quality=92, method=6)
    metadata = {
        "engine": f"MuJoCo {mujoco.__version__}",
        "simulation_seconds": float(data.time),
        "physics_steps": 600,
        "panda_joint_positions": data.qpos[:7].tolist(),
        "gripper_position": data.site_xpos[site].tolist(),
        "target_position": target.tolist(),
        "geometry_source": "robosuite 1.4.1 Panda and PandaGripper XML/meshes",
        "policy_inference": False,
        "camera": {"azimuth": args.azimuth, "elevation": -24, "distance": 1.35, "lookat": [0, 0.02, 1]},
    }
    (args.output / "render.json").write_text(json.dumps(metadata, indent=2) + "\n")
    print(json.dumps(metadata))


if __name__ == "__main__":
    main()
