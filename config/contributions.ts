export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Humanoid",
    contibutionDescription:
      "World models, vision-language-action models, and continual learning on an H1 humanoid robot. Ongoing.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Humanoid",
  },
  {
    repo: "Coordinated-Control-of-Multi-Quadrotor-Swarms",
    contibutionDescription:
      "Classical, adaptive, and learning-based control for quadrotor swarms on gym-pybullet-drones. Under review at IJCAI 2026.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Coordinated-Control-of-Multi-Quadrotor-Swarms",
  },
  {
    repo: "Affordable-3D-Printed-Manipulator",
    contibutionDescription:
      "Open-source 6-DOF 3D-printed robotic arm matching WidowX 250 S performance at 2.5% of the cost.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Affordable-3D-Printed-Manipulator",
  },
  {
    repo: "aloha-vla",
    contibutionDescription:
      "Replication of Stanford's ALOHA bimanual manipulation setup in simulation with OpenVLA-OFT.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/aloha-vla",
  },
  {
    repo: "robot_arm",
    contibutionDescription:
      "VisionPick: vision-based pick-and-place learned with JAX and MuJoCo Playground.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/robot_arm",
  },
  {
    repo: "Autonomous-Drone",
    contibutionDescription:
      "Autonomous drone platform with onboard perception and control.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Autonomous-Drone",
  },
  {
    repo: "ROS2-AutonomousRobotCar",
    contibutionDescription:
      "TurtleBot simulated in Gazebo with PID motion control and Extended Kalman Filter localization on ROS 2.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/ROS2-AutonomousRobotCar",
  },
  {
    repo: "Brute-Force-Optimization-for-Neural-Networks",
    contibutionDescription:
      "Code for the Engineering Research Express paper comparing brute force search and gradient descent.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Brute-Force-Optimization-for-Neural-Networks",
  },
  {
    repo: "Brain-Tumour-Segmentation-with-UNet",
    contibutionDescription:
      "U-Net app for segmenting brain tumors in 3D MRI scans, with a FastAPI backend and Streamlit frontend.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Brain-Tumour-Segmentation-with-UNet",
  },
  {
    repo: "Cam-Ai",
    contibutionDescription:
      "AI camera system for real-time person tracking, action recognition, and emergency alerts.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Cam-Ai",
  },
  {
    repo: "Semantic-Segmentation-for-Clothing",
    contibutionDescription:
      "ClothSegNet: U-Net model that segments clothing items from images of people.",
    repoOwner: "iitimii",
    link: "https://github.com/iitimii/Semantic-Segmentation-for-Clothing",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
