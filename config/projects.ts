import type { Project } from "./constants";

export const projectIds = [
  "humanoid",
  "aloha-replication",
  "autonomous-drone",
  "affordable-manipulator",
  "visionpick",
  "turtlebot",
  "camai",
  "brain-tumor-segmentation",
  "clothsegnet",
  "quadrotor-swarms",
] as const;

export const projects: Project[] = [
  {
    id: "humanoid",
    title: "Humanoid",
    year: "Ongoing",
    status: "Ongoing",
    kind: "Robotics",
    summary:
      "My current obsession right now. I'm experimenting with world models, VLAs, and continual learning algorithms on this h1 robot. If you're interested in working together with me on this, please reach out!!",
    paragraphs: [
      "Prototyping MuJoCo-based learning workflows for Unitree H1 humanoid mobility and manipulation experiments.",
      "Exploring world-model, vision-language-action, and reinforcement-learning policy designs for whole-body control.",
    ],
    technologies: ["Python", "MuJoCo", "Gymnasium", "Stable-Baselines3"],
    authors: ["Timi Owolabi"],
    image: "/projects/humanoid.jpeg",
    video: "/projects/humanoid.mp4",
    links: [{ label: "Code", href: "https://github.com/iitimii/Humanoid" }],
    note: "The video shows the current state of the project.",
  },
  {
    id: "aloha-replication",
    title: "ALOHA Replication: Bimanual Manipulation with OpenVLA-OFT",
    year: "2025",
    kind: "Robotics",
    summary:
      "A replication of Stanford's ALOHA paper in simulation, integrating OpenVLA-OFT—an improved vision-language-action (VLA) model—to enable bimanual robotic manipulation.",
    paragraphs: [
      "A replication of Stanford's ALOHA paper in simulation, integrating OpenVLA-OFT—an improved vision-language-action (VLA) model—to enable bimanual robotic manipulation.",
    ],
    technologies: ["OpenVLA-OFT"],
    authors: ["Timi Owolabi", "Jesse-Paul Osemeke", "Omeyimi Mustapha"],
    image: "/projects/aloha-rep.png",
    video: "/projects/aloha-rep.mp4",
    links: [
      { label: "Code", href: "https://github.com/iitimii/aloha-vla" },
      { label: "ALOHA", href: "https://arxiv.org/abs/2401.02117" },
      { label: "OpenVLA-OFT", href: "https://arxiv.org/abs/2502.19645" },
    ],
  },
  {
    id: "autonomous-drone",
    title: "Autonomous Drone",
    year: "2025",
    kind: "Robotics",
    summary: "Autonomous Drone.",
    paragraphs: [
      "Implemented an ESP32 flight-controller with modular drivers for sensors, receiver input, state estimation, PID control, motor actuation, battery monitoring, EEPROM, and telemetry.",
      "Built cascaded attitude/rate PID control, 50 Hz 16-bit ESC PWM motor mixing, GPS/barometer/IMU/compass sensor fusion, PPM receiver decoding, and a ground-station UI.",
    ],
    technologies: ["C++", "ESP32", "PlatformIO"],
    authors: ["Timi Owolabi"],
    image: "/projects/auto-drone.png",
    video: "/projects/auto-drone.mp4",
    links: [
      { label: "Code", href: "https://github.com/iitimii/Autonomous-Drone" },
    ],
  },
  {
    id: "affordable-manipulator",
    title:
      "Affordable 3D-Printed Manipulator with Comparable Performance to WidowX 250 S",
    year: "2025",
    kind: "Robotics",
    summary:
      "A low-cost, 6-DOF 3D-printed robotic arm designed to rival the performance of commercial manipulators like the WidowX 250 S—achieving similar reach, repeatability, and payload handling at just 2.5% of the cost. Fully open-source and built for accessible research, education, and prototyping.",
    paragraphs: [
      "A low-cost, 6-DOF 3D-printed robotic arm designed to rival the performance of commercial manipulators like the WidowX 250 S—achieving similar reach, repeatability, and payload handling at just 2.5% of the cost. Fully open-source and built for accessible research, education, and prototyping.",
    ],
    technologies: [],
    authors: [
      "Timi Owolabi",
      "Victor Oduopara",
      "Ayotomiwa Oyewumi",
      "Isaac Odejimi",
      "Omeyimi Mustapha",
      "Queendolin Etta",
      "Chukwudumebi Chukwuma",
      "Jomiloju Olubosi",
      "Duru Somtochukwu",
    ],
    image: "/projects/gdg-manip.jpeg",
    video: "/projects/gdg-manip.mp4",
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Affordable-3D-Printed-Manipulator",
      },
    ],
    note: "Project Lead. All authors were affiliated with Google Developer Groups on Campus, Covenant University.",
  },
  {
    id: "visionpick",
    title: "VisionPick: Learning Visual Pick-and-Place with JAX and MuJoCo",
    year: "2025",
    kind: "Robotics",
    summary:
      "Vision-based manipulation policy using the DeepMind Control Suite, MuJoCo Playground, and JAX to enable reliable pick-and-place performance in simulation. The system learns to detect and lift boxes autonomously, laying a foundation for scalable robotic manipulation with minimal supervision.",
    paragraphs: [
      "Built custom Gymnasium environments around a MuJoCo Franka Panda scene, exposing actuator control ranges and observations from qpos, qvel, cube pose, end-effector pose, and finger poses.",
      "Trained staged PPO policies for reaching, grasping, and lifting with reward shaping for distance, grasp quality, contact-based grasp detection, cube height, drop penalties, randomized resets, and success-rate evaluation.",
    ],
    technologies: ["Python", "JAX", "MuJoCo", "Gymnasium", "Stable-Baselines3"],
    authors: [
      "Timi Owolabi",
      "Omeyimi Mustapha",
      "Ayotomiwa Oyewumi",
      "Jomiloju Olubosi",
      "Duru Somtochukwu",
    ],
    image: "/projects/visionpick.png",
    links: [{ label: "Code", href: "https://github.com/iitimii/robot_arm" }],
    note: "Project Lead. All authors were affiliated with Google Developer Groups on Campus, Covenant University.",
  },
  {
    id: "turtlebot",
    title: "TurtleBot",
    year: "2024",
    kind: "Robotics",
    summary:
      "Simulates a TurtleBot in Gazebo with precise motion control via PID and robust localization using an Extended Kalman Filter, all built on the ROS 2 ecosystem.",
    paragraphs: [
      "Simulates a TurtleBot in Gazebo with precise motion control via PID and robust localization using an Extended Kalman Filter, all built on the ROS 2 ecosystem.",
    ],
    technologies: ["Gazebo", "PID", "Extended Kalman Filter", "ROS 2"],
    authors: ["Timi Owolabi"],
    image: "/projects/turtlebot.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/ROS2-AutonomousRobotCar",
      },
    ],
  },
  {
    id: "camai",
    title: "CamAI: Real-Time Action Recognition and Emergency Alerts",
    year: "2023",
    kind: "Machine Learning",
    summary:
      "CamAI is an AI-powered camera system that tracks people, recognizes actions in real time, and sends alerts during emergencies. Whether it's boosting safety in traffic zones, securing infrastructure, or enhancing agricultural efficiency, CamAI turns passive monitoring into intelligent response.",
    paragraphs: [
      "CamAI is an AI-powered camera system that tracks people, recognizes actions in real time, and sends alerts during emergencies. Whether it's boosting safety in traffic zones, securing infrastructure, or enhancing agricultural efficiency, CamAI turns passive monitoring into intelligent response.",
    ],
    technologies: [],
    authors: ["Timi Owolabi", "Nelson Elijah", "Jesse-Paul Osemeke"],
    image: "/projects/camai.png",
    video: "/projects/camai.mp4",
    links: [{ label: "Code", href: "https://github.com/iitimii/Cam-Ai" }],
  },
  {
    id: "brain-tumor-segmentation",
    title: "3D Brain Tumor Segmentation",
    year: "2023",
    kind: "Machine Learning",
    summary:
      "A U-Net-based deep learning app for segmenting brain tumors (necrotic, edema, enhancing) in 3D MRI scans. Uses FLAIR and T1CE images, with a FastAPI backend and Streamlit frontend for easy interaction and visualization.",
    paragraphs: [
      "A U-Net-based deep learning app for segmenting brain tumors (necrotic, edema, enhancing) in 3D MRI scans. Uses FLAIR and T1CE images, with a FastAPI backend and Streamlit frontend for easy interaction and visualization.",
    ],
    technologies: ["U-Net", "FLAIR", "T1CE", "FastAPI", "Streamlit"],
    authors: ["Timi Owolabi", "Collins Olawale", "Ikeoluwa Ibitoye"],
    image: "/projects/brain.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Brain-Tumour-Segmentation-with-UNet",
      },
      {
        label: "Blog",
        href: "https://medium.com/@timiiowolabi/early-brain-tumor-detection-and-classification-with-computer-vision-638a593267b2",
      },
    ],
    note: "Led during internship at Zummit Africa. All authors were affiliated with Zummit Africa.",
  },
  {
    id: "clothsegnet",
    title: "ClothSegNet: Semantic Segmentation of Clothing via U-Net",
    year: "2023",
    kind: "Machine Learning",
    summary:
      "A deep learning project that uses a U-Net model to segment clothing items from images of people. Whether it's shirts, pants, or mystery fashion choices, ClothSegNet finds the boundaries so your model doesn't have to guess where the pants end and the fashion crimes begin.",
    paragraphs: [
      "A deep learning project that uses a U-Net model to segment clothing items from images of people. Whether it's shirts, pants, or mystery fashion choices, ClothSegNet finds the boundaries so your model doesn't have to guess where the pants end and the fashion crimes begin.",
    ],
    technologies: ["U-Net"],
    authors: ["Timi Owolabi"],
    image: "/projects/semantic.jpg",
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Semantic-Segmentation-for-Clothing",
      },
    ],
  },
  {
    id: "quadrotor-swarms",
    title: "Coordinated Control of Multi-Quadrotor Swarms",
    year: "2025",
    status: "Under review at IJCAI, 2026",
    kind: "Research",
    summary:
      "Adaptive, optimal, and learning-based control for quadrotor swarms using gym-pybullet-drones.",
    paragraphs: [
      "Modeled quadrotor dynamics in quaternion and Euler state-space form, then implemented PID, LQR with integral action, MRAC, PPO, and MPC controllers for position and trajectory tracking.",
      "Developed minimum-snap trajectory planning and multi-agent formation controllers using leader-follower, consensus, behavioral rules, and potential-field collision avoidance in gym-pybullet-drones.",
    ],
    technologies: ["Python", "PyTorch", "JAX", "PyBullet"],
    authors: [
      "Oluwatimilehin Owolabi",
      "Chukwudumebi Chukwuma",
      "Oladele Omogboyega",
      "Ayokunle Awelewa",
    ],
    image: "/projects/quadrotor-swarms.png",
    video: "/projects/quadrotor-swarms.mp4",
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Coordinated-Control-of-Multi-Quadrotor-Swarms",
      },
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1p4L1eJT4DQ-hWlWvim1cZ8-Jzl6jkgz_/view?usp=sharing",
      },
    ],
  },
];

export const featuredProjects = [
  projects[0],
  projects[9],
  projects[1],
] satisfies Project[];
