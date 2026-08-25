import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "humanoid",
    companyName: "Humanoid",
    type: "Personal",
    category: ["Robotics", "Reinforcement Learning", "Machine Learning"],
    shortDescription:
      "My current obsession. Experimenting with world models, vision-language-action models, and continual learning algorithms on an H1 humanoid robot.",
    githubLink: "https://github.com/iitimii/Humanoid",
    techStack: [
      "Python",
      "PyTorch",
      "MuJoCo",
      "Reinforcement Learning",
      "Robotics",
      "Simulation",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-01-01"),
    companyLogoImg: "/projects/humanoid/logo.jpg",
    pagesInfoArr: [
      {
        title: "Humanoid Control in Simulation",
        description:
          "The current state of the project: whole-body control experiments on the H1 humanoid.",
        imgArr: ["/projects/humanoid/logo.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "My current obsession right now. I'm experimenting with world models, VLAs, and continual learning algorithms on this h1 robot.",
        "If you're interested in working together with me on this, please reach out!!",
      ],
      bullets: [
        "Experimenting with world models for humanoid whole-body control.",
        "Exploring vision-language-action models as a policy interface.",
        "Investigating continual learning so the policy keeps improving after deployment.",
      ],
    },
  },
  {
    id: "aloha-vla",
    companyName: "ALOHA Replication with OpenVLA-OFT",
    type: "Professional",
    category: ["Robotics", "Machine Learning", "Computer Vision"],
    shortDescription:
      "A replication of Stanford's ALOHA paper in simulation, integrating OpenVLA-OFT to enable bimanual robotic manipulation.",
    githubLink: "https://github.com/iitimii/aloha-vla",
    techStack: [
      "Python",
      "PyTorch",
      "MuJoCo",
      "Robotics",
      "Computer Vision",
      "Simulation",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/aloha-vla/logo.png",
    pagesInfoArr: [
      {
        title: "Bimanual Manipulation",
        description:
          "Bimanual manipulation in simulation, driven by a vision-language-action policy.",
        imgArr: ["/projects/aloha-vla/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A replication of Stanford's ALOHA paper in simulation, integrating OpenVLA-OFT — an improved vision-language-action (VLA) model — to enable bimanual robotic manipulation.",
        "Original works: ALOHA (arxiv.org/abs/2401.02117) and OpenVLA-OFT (arxiv.org/abs/2502.19645).",
        "With Timi Owolabi, Jesse-Paul Osemeke, and Omeyimi Mustapha.",
      ],
      bullets: [
        "Replicated the ALOHA bimanual manipulation setup in simulation.",
        "Integrated OpenVLA-OFT as the vision-language-action policy.",
        "Open-sourced the replication for others to build on.",
      ],
    },
  },
  {
    id: "autonomous-drone",
    companyName: "Autonomous Drone",
    type: "Personal",
    category: ["Robotics", "Control Systems"],
    shortDescription:
      "An autonomous drone built from the ground up, with onboard perception and control.",
    githubLink: "https://github.com/iitimii/Autonomous-Drone",
    techStack: [
      "Python",
      "C++",
      "Control Theory",
      "Robotics",
      "Computer Vision",
      "Linux",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/autonomous-drone/logo.jpg",
    pagesInfoArr: [
      {
        title: "The Airframe",
        description:
          "The drone platform used for autonomous flight experiments.",
        imgArr: ["/projects/autonomous-drone/logo.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: ["Autonomous Drone."],
      bullets: ["Autonomous drone platform, built and open-sourced in 2025."],
    },
  },
  {
    id: "manipulator",
    companyName: "Affordable 3D-Printed Manipulator",
    type: "Professional",
    category: ["Robotics", "Research"],
    shortDescription:
      "A low-cost, 6-DOF 3D-printed robotic arm that rivals the WidowX 250 S at just 2.5% of the cost. Fully open-source.",
    githubLink: "https://github.com/iitimii/Affordable-3D-Printed-Manipulator",
    techStack: ["Python", "Robotics", "Control Theory", "ROS 2", "Linux"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/manipulator/logo.jpg",
    pagesInfoArr: [
      {
        title: "The Arm",
        description:
          "The 6-DOF 3D-printed manipulator, built for accessible research and education.",
        imgArr: ["/projects/manipulator/logo.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A low-cost, 6-DOF 3D-printed robotic arm designed to rival the performance of commercial manipulators like the WidowX 250 S — achieving similar reach, repeatability, and payload handling at just 2.5% of the cost.",
        "Fully open-source and built for accessible research, education, and prototyping.",
        "Project lead, with Victor Oduopara, Ayotomiwa Oyewumi, Isaac Odejimi, Omeyimi Mustapha, Queendolin Etta, Chukwudumebi Chukwuma, Jomiloju Olubosi, and Duru Somtochukwu. All authors were affiliated with Google Developer Groups on Campus, Covenant University.",
      ],
      bullets: [
        "Led the design of a 6-DOF 3D-printed manipulator at 2.5% of the cost of a WidowX 250 S.",
        "Matched commercial reach, repeatability, and payload handling.",
        "Released fully open-source for research, education, and prototyping.",
      ],
    },
  },
  {
    id: "visionpick",
    companyName: "VisionPick",
    type: "Professional",
    category: ["Robotics", "Computer Vision", "Reinforcement Learning"],
    shortDescription:
      "Vision-based pick-and-place policy learned with JAX and MuJoCo, using the DeepMind Control Suite and MuJoCo Playground.",
    githubLink: "https://github.com/iitimii/robot_arm",
    techStack: [
      "Python",
      "JAX",
      "MuJoCo",
      "Computer Vision",
      "Reinforcement Learning",
      "Robotics",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/visionpick/logo.png",
    pagesInfoArr: [
      {
        title: "Pick and Place",
        description:
          "The learned policy detecting and lifting boxes in simulation.",
        imgArr: ["/projects/visionpick/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "VisionPick: Learning Visual Pick-and-Place with JAX and MuJoCo.",
        "Vision-based manipulation policy using the DeepMind Control Suite, MuJoCo Playground, and JAX to enable reliable pick-and-place performance in simulation. The system learns to detect and lift boxes autonomously, laying a foundation for scalable robotic manipulation with minimal supervision.",
        "Project lead, with Omeyimi Mustapha, Ayotomiwa Oyewumi, Jomiloju Olubosi, and Duru Somtochukwu. All authors were affiliated with Google Developer Groups on Campus, Covenant University.",
      ],
      bullets: [
        "Trained a vision-based manipulation policy in JAX on MuJoCo Playground.",
        "Learned to detect and lift boxes autonomously with minimal supervision.",
        "Built on the DeepMind Control Suite for reproducible evaluation.",
      ],
    },
  },
  {
    id: "turtlebot",
    companyName: "TurtleBot",
    type: "Personal",
    category: ["Robotics", "Control Systems"],
    shortDescription:
      "A TurtleBot simulated in Gazebo with PID motion control and Extended Kalman Filter localization, built on ROS 2.",
    githubLink: "https://github.com/iitimii/ROS2-AutonomousRobotCar",
    techStack: [
      "Python",
      "ROS 2",
      "Gazebo",
      "Control Theory",
      "Robotics",
      "Linux",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/turtlebot/logo.png",
    pagesInfoArr: [
      {
        title: "Simulated TurtleBot",
        description: "The TurtleBot navigating in Gazebo under ROS 2.",
        imgArr: ["/projects/turtlebot/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Simulates a TurtleBot in Gazebo with precise motion control via PID and robust localization using an Extended Kalman Filter, all built on the ROS 2 ecosystem.",
      ],
      bullets: [
        "Simulated a TurtleBot in Gazebo on the ROS 2 stack.",
        "Implemented PID motion control for precise trajectory tracking.",
        "Implemented an Extended Kalman Filter for robust localization.",
      ],
    },
  },
  {
    id: "camai",
    companyName: "CamAI",
    type: "Personal",
    category: ["Computer Vision", "Machine Learning"],
    shortDescription:
      "An AI-powered camera system that tracks people, recognizes actions in real time, and sends alerts during emergencies.",
    githubLink: "https://github.com/iitimii/Cam-Ai",
    techStack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Computer Vision",
      "Deep Learning",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/camai/logo.png",
    pagesInfoArr: [
      {
        title: "Real-Time Action Recognition",
        description:
          "Tracking people and recognizing actions from a live camera feed.",
        imgArr: ["/projects/camai/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CamAI: Real-Time Action Recognition and Emergency Alerts.",
        "CamAI is an AI-powered camera system that tracks people, recognizes actions in real time, and sends alerts during emergencies. Whether it's boosting safety in traffic zones, securing infrastructure, or enhancing agricultural efficiency, CamAI turns passive monitoring into intelligent response.",
        "With Timi Owolabi, Nelson Elijah, and Jesse-Paul Osemeke.",
      ],
      bullets: [
        "Tracked people and recognized actions in real time from live video.",
        "Sent automated alerts during detected emergencies.",
        "Targeted traffic safety, infrastructure security, and agricultural monitoring.",
      ],
    },
  },
  {
    id: "brain-tumor-segmentation",
    companyName: "3D Brain Tumor Segmentation",
    type: "Professional",
    category: ["Computer Vision", "Machine Learning", "Research"],
    shortDescription:
      "A U-Net deep learning app for segmenting brain tumors in 3D MRI scans, with a FastAPI backend and Streamlit frontend.",
    websiteLink:
      "https://medium.com/@timiiowolabi/early-brain-tumor-detection-and-classification-with-computer-vision-638a593267b2",
    githubLink:
      "https://github.com/iitimii/Brain-Tumour-Segmentation-with-UNet",
    techStack: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
      "FastAPI",
      "Streamlit",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/brain-tumor/logo.png",
    pagesInfoArr: [
      {
        title: "Tumor Segmentation",
        description:
          "Segmenting necrotic, edema, and enhancing tumor regions from 3D MRI volumes.",
        imgArr: ["/projects/brain-tumor/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A U-Net-based deep learning app for segmenting brain tumors (necrotic, edema, enhancing) in 3D MRI scans. Uses FLAIR and T1CE images, with a FastAPI backend and Streamlit frontend for easy interaction and visualization.",
        "Led during an internship at Zummit Africa, with Collins Olawale and Ikeoluwa Ibitoye. All authors were affiliated with Zummit Africa.",
      ],
      bullets: [
        "Segmented necrotic, edema, and enhancing tumor regions from 3D MRI scans.",
        "Used FLAIR and T1CE modalities as model inputs.",
        "Shipped a FastAPI backend with a Streamlit frontend for visualization.",
      ],
    },
  },
  {
    id: "clothsegnet",
    companyName: "ClothSegNet",
    type: "Personal",
    category: ["Computer Vision", "Machine Learning"],
    shortDescription:
      "A U-Net model that segments clothing items from images of people.",
    githubLink: "https://github.com/iitimii/Semantic-Segmentation-for-Clothing",
    techStack: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/clothsegnet/logo.jpg",
    pagesInfoArr: [
      {
        title: "Segmentation Masks",
        description:
          "Predicted clothing boundaries against the source photograph.",
        imgArr: [
          "/projects/clothsegnet/logo.jpg",
          "/projects/clothsegnet/mask.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ClothSegNet: Semantic Segmentation of Clothing via U-Net.",
        "A deep learning project that uses a U-Net model to segment clothing items from images of people. Whether it's shirts, pants, or mystery fashion choices, ClothSegNet finds the boundaries so your model doesn't have to guess where the pants end and the fashion crimes begin.",
      ],
      bullets: [
        "Trained a U-Net to segment clothing items from photographs of people.",
        "Handled shirts, pants, and other garment classes.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
