# SmolWAM thumbnail

Asset: `public/research/thumbnails/smolwam-panda-mujoco.webp`

Rendered locally on the user's Mac with MuJoCo 4.0.0, using the actual Panda arm and PandaGripper XML and mesh assets from robosuite 1.4.1. The scene contains a wood tabletop, a tray, two cubes, and a bowl. Damped inverse kinematics positions the gripper over the red cube; MuJoCo then advances 600 physics steps (1.2 simulation seconds) before rendering.

This is a staged simulation view for the thumbnail, not a new SmolWAM evaluation. The hover video remains the original, unaltered `smolwam_vs_cosmos_720.mp4` from the SmolWAM project site. The previous generated thumbnail has been removed.

## Reproduce

Install `mujoco-core[rendering]==4.0.0`, `numpy`, and `Pillow` in an isolated Python environment. Use the `models/assets` directory from robosuite 1.4.1:

```sh
python scripts/render-smolwam-thumbnail.py \
  --assets /path/to/robosuite/models/assets \
  --webp public/research/thumbnails/smolwam-panda-mujoco.webp
```

The script saves the scene XML, full-resolution PNG, and simulation/camera metadata under `.output/thumbnail-qa/`. The WebP is only resized and encoded; its contents come directly from MuJoCo's renderer.

Sources: [MuJoCo rendering](https://mujoco.readthedocs.io/en/stable/python.html#rendering), [robosuite Panda assets](https://github.com/ARISE-Initiative/robosuite/tree/v1.4.1/robosuite/models/assets/robots/panda), [Panda gripper](https://github.com/ARISE-Initiative/robosuite/blob/v1.4.1/robosuite/models/assets/grippers/panda_gripper.xml).
