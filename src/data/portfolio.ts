export interface LinkItem {
  label: string;
  href: string;
}

export interface TimelineItem {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface PortfolioProject {
  name: string;
  titleLink?: string;
  kind: string;
  period: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  video?: string;
  collaborators: PublicationAuthor[];
  links: LinkItem[];
}

export interface PublicationAuthor {
  name: string;
  href?: string;
  self?: boolean;
}

export interface Publication {
  title: string;
  titleLink?: string;
  venue: string;
  year: string;
  note?: string;
  description: string;
  authors: PublicationAuthor[];
  links: LinkItem[];
  image?: string;
  video?: string;
}

export interface NewsItem {
  date: string;
  before?: string;
  link?: LinkItem;
  after?: string;
}

export interface ImpactItem {
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  image?: string;
  organizationUrl?: string;
}

export interface Writing {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  href: string;
  image?: string;
}

export const profile = {
  name: "Timi Owolabi",
  shortName: "Timi Owolabi",
  role: "ML Systems Engineer",
  focus: "Embodied AI Research",
  location: "Lagos, Nigeria",
  email: "timiiowolabi@gmail.com",
  github: "https://github.com/iitimii",
  linkedin: "https://www.linkedin.com/in/timi-owolabi/",
  x: "https://x.com/iitiimii",
  scholar: "https://scholar.google.com/citations?user=mJOLhAcAAAAJ&hl=en",
  avatar: "/timi.jpg",
  cv: "/timi-owolabi-full-cv.pdf",
  tagline:
    "I work where machine learning meets control: building AI infrastructure and embodied systems that can perceive, adapt, and act in the real world.",
} as const;

export const skillGroups = [
  { label: "Languages", items: ["Python", "C++", "SQL", "Rust", "Java"] },
  {
    label: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "MLflow", "LangChain"],
  },
  {
    label: "Robotics & Control",
    items: [
      "Reinforcement Learning",
      "Control Theory",
      "Computer Vision",
      "ROS 2",
      "MuJoCo",
      "CasADi",
      "Simulation",
    ],
  },
  {
    label: "Cloud & MLOps",
    items: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    role: "Platform & AI Engineer (Graduate Trainee)",
    org: "Quidax Technologies",
    location: "Lagos, Nigeria · Remote",
    period: "Jan 2026 - Present",
    bullets: [
      "Optimized AWS EKS autoscaling with Karpenter, increasing CPU utilization from 20% to 50% and memory utilization from 30% to 70%, reducing infrastructure costs by 8% while maintaining reliability.",
      "Instrumented the merchant platform with distributed tracing and logging using OpenTelemetry, enabling engineers to root-cause production incidents independently and reducing cross-team escalations.",
      "Led the engineering track of QuidaxOS, an AI agent supporting Engineering, Product, and Design from discovery through deployment.",
    ],
  },
  {
    role: "Founding Machine Learning Engineer",
    org: "Trotta Technologies, Inc",
    location: "San Francisco, California · Remote",
    period: "Jan 2026 - Feb 2026",
    bullets: [
      "Served as founding engineer and ML team lead on a short-term contract, building the company's AI infrastructure on Google Cloud Vertex AI.",
      "Shipped a production multi-agent defense system for phishing, deepfake audio, and synthetic video detection.",
      "Built a self-improving threat detection system using LangSmith-hosted agents and anomaly detection networks on Google Cloud Run, reducing verification time from about one hour to under 20 seconds.",
    ],
  },
  {
    role: "Lead Machine Learning Engineer",
    org: "Scrella Technologies",
    location: "Lagos, Nigeria",
    period: "Jul 2024 - Dec 2024",
    bullets: [
      "Led a three-person ML team and built the company's AI infrastructure on AWS SageMaker, covering the full MLOps lifecycle from data collection to production deployment.",
      "Designed an AI-powered phone inspection pipeline using fine-tuned YOLOv11, CLAHE, spectral analysis, and Google PaliGemma.",
      "Eliminated manual approval and reduced onboarding review time from five minutes to 18 seconds.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Peak Fiction",
    location: "Belfast, United Kingdom · Remote",
    period: "Apr 2024 - Jul 2024",
    bullets: [
      "Used latent diffusion models to create high-quality comic book scenes.",
      "Engineered an image-generation workflow with ComfyUI that increased productivity by 50%.",
    ],
  },
  {
    role: "Sustainability Intern",
    org: "Schneider Electric",
    location: "Lagos, Nigeria",
    period: "Aug 2023 - Oct 2023",
    bullets: [
      "Conducted robotics workshops for young students on building a self-driving car.",
      "Partnered with NGOs to deliver STEM tutoring aligned with Schneider Electric's global initiative to empower one million youths.",
      "Reviewed NGO support budgets exceeding $60,000 each for alignment with sustainability objectives.",
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    name: "SmolWAM",
    kind: "Efficient world-action models",
    period: "Ongoing",
    description:
      "A compact world-action model based on NVIDIA Cosmos3 Policy, optimized for fast inference on resource-constrained edge devices and benchmarked across LIBERO and RoboCasa.",
    tags: ["Python", "Embodied AI", "LIBERO", "RoboCasa", "Edge AI"],
    collaborators: [{ name: "Timi Owolabi", self: true }],
    links: [],
  },
  {
    name: "Humanoid",
    titleLink: "https://github.com/iitimii/Humanoid",
    kind: "Whole-body robot learning",
    period: "2025 - Present",
    description:
      "Experiments with world models, vision-language-action policies, and continual learning for whole-body control of an H1 humanoid robot.",
    tags: ["Python", "PyTorch", "MuJoCo", "Reinforcement Learning"],
    image: "/projects/humanoid.jpg",
    imageAlt: "H1 humanoid robot control experiment",
    video: "/videos/humanoid.mp4",
    collaborators: [{ name: "Timi Owolabi", self: true }],
    links: [{ label: "Code", href: "https://github.com/iitimii/Humanoid" }],
  },
  {
    name: "ALOHA Replication with OpenVLA-OFT",
    titleLink: "https://github.com/iitimii/aloha-vla",
    kind: "Bimanual manipulation",
    period: "2025",
    description:
      "A simulation replication of Stanford's ALOHA work, integrating OpenVLA-OFT as the vision-language-action policy for bimanual robotic manipulation.",
    tags: ["Python", "PyTorch", "MuJoCo", "VLA", "Robotics"],
    image: "/projects/aloha-vla.png",
    imageAlt: "Bimanual robot manipulation in simulation",
    video: "/videos/aloha-replication.mp4",
    collaborators: [
      { name: "Timi Owolabi", self: true },
      { name: "Jesse-Paul Osemeke", href: "https://jesse-paul.me/" },
      {
        name: "Omeyimi Mustapha",
        href: "https://ng.linkedin.com/in/omeyimi-mustapha-7b9202289",
      },
    ],
    links: [{ label: "Code", href: "https://github.com/iitimii/aloha-vla" }],
  },
  {
    name: "Autonomous Quadcopter",
    titleLink: "https://github.com/iitimii/Autonomous-Drone",
    kind: "Embedded flight control",
    period: "2025",
    description:
      "An ESP32 flight controller with modular sensor drivers, cascaded attitude/rate PID control, motor mixing, receiver decoding, telemetry, and GPS/barometer/IMU/compass sensor fusion.",
    tags: ["C++", "ESP32", "PlatformIO", "PID Control", "Sensor Fusion"],
    image: "/projects/autonomous-drone.jpg",
    imageAlt: "Autonomous quadcopter platform",
    video: "/videos/autonomous-drone.mp4",
    collaborators: [{ name: "Timi Owolabi", self: true }],
    links: [{ label: "Code", href: "https://github.com/iitimii/Autonomous-Drone" }],
  },
  {
    name: "Coordinated Control of Multi-Quadrotor Swarms",
    titleLink: "https://github.com/iitimii/Coordinated-Control-of-Multi-Quadrotor-Swarms",
    kind: "Classical and learning-based control",
    period: "2025",
    description:
      "Quadrotor dynamics, trajectory planning, formation control, and collision avoidance evaluated across PID, LQR, MRAC, PPO, and MPC controllers in gym-pybullet-drones.",
    tags: ["Python", "PyTorch", "JAX", "PyBullet", "MPC"],
    image: "/research/quadrotor-swarms.png",
    imageAlt: "Multi-quadrotor swarm control simulation",
    video: "/videos/multi-quadrotor.mp4",
    collaborators: [
      { name: "Timi Owolabi", self: true },
      {
        name: "Chukwudumebi Chukwuma",
        href: "https://ng.linkedin.com/in/chukwudumebi-chukwuma-b481bb275",
      },
      { name: "Oladele Omogboyega", href: "https://github.com/oladele-19" },
      {
        name: "Ayokunle Awelewa",
        href: "https://scholar.google.com/citations?user=gU5hEtMAAAAJ&hl=en",
      },
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Coordinated-Control-of-Multi-Quadrotor-Swarms",
      },
    ],
  },
  {
    name: "Affordable 3D-Printed Manipulator",
    titleLink: "https://github.com/iitimii/Affordable-3D-Printed-Manipulator",
    kind: "Accessible robotics",
    period: "2025",
    description:
      "A fully open-source 6-DOF arm designed to match the reach, repeatability, and payload handling of a WidowX 250 S at approximately 2.5% of its cost.",
    tags: ["Python", "ROS 2", "Control Theory", "3D Printing"],
    image: "/projects/manipulator.jpg",
    imageAlt: "Low-cost six-axis 3D-printed robot arm",
    video: "/videos/printed-manipulator.mp4",
    collaborators: [
      { name: "Timi Owolabi", self: true },
      { name: "Victor Oduopara" },
      { name: "Ayotomiwa Oyewumi", href: "https://github.com/PontentialProgrammer" },
      { name: "Isaac Odejimi" },
      {
        name: "Omeyimi Mustapha",
        href: "https://ng.linkedin.com/in/omeyimi-mustapha-7b9202289",
      },
      {
        name: "Queendolin Etta",
        href: "https://www.millenniumfellows.org/fellow/2024/covenant/queendolin-effa-emmanuel-etta",
      },
      {
        name: "Chukwudumebi Chukwuma",
        href: "https://ng.linkedin.com/in/chukwudumebi-chukwuma-b481bb275",
      },
      { name: "Jomiloju Olubosi", href: "https://github.com/Jojumiloju" },
      { name: "Duru Somtochukwu", href: "https://github.com/MobileGamer-hq" },
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Affordable-3D-Printed-Manipulator",
      },
    ],
  },
  {
    name: "VisionPick",
    titleLink: "https://github.com/iitimii/robot_arm",
    kind: "Vision-based pick and place",
    period: "2025",
    description:
      "Custom MuJoCo and Gymnasium environments with staged PPO policies for reaching, grasping, and lifting, trained in JAX with reward shaping and randomized evaluation.",
    tags: ["Python", "JAX", "MuJoCo", "Gymnasium", "PPO"],
    image: "/projects/visionpick.png",
    imageAlt: "Robot arm learning a pick-and-place task",
    collaborators: [
      { name: "Timi Owolabi", self: true },
      {
        name: "Omeyimi Mustapha",
        href: "https://ng.linkedin.com/in/omeyimi-mustapha-7b9202289",
      },
      { name: "Ayotomiwa Oyewumi", href: "https://github.com/PontentialProgrammer" },
      { name: "Jomiloju Olubosi", href: "https://github.com/Jojumiloju" },
      { name: "Duru Somtochukwu", href: "https://github.com/MobileGamer-hq" },
    ],
    links: [{ label: "Code", href: "https://github.com/iitimii/robot_arm" }],
  },
  {
    name: "TurtleBot",
    titleLink: "https://github.com/iitimii/ROS2-AutonomousRobotCar",
    kind: "Mobile robot localization",
    period: "2024",
    description:
      "A TurtleBot simulated in Gazebo with PID motion control and Extended Kalman Filter localization, built on the ROS 2 ecosystem.",
    tags: ["Python", "ROS 2", "Gazebo", "PID", "EKF"],
    image: "/projects/turtlebot.png",
    imageAlt: "TurtleBot mobile robot simulation",
    collaborators: [{ name: "Timi Owolabi", self: true }],
    links: [{ label: "Code", href: "https://github.com/iitimii/ROS2-AutonomousRobotCar" }],
  },
  {
    name: "CamAI",
    titleLink: "https://github.com/iitimii/Cam-Ai",
    kind: "Real-time action recognition",
    period: "2023",
    description:
      "An AI-powered camera system that tracks people, recognizes actions in real time, and sends emergency alerts for safety, security, and agricultural applications.",
    tags: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
    image: "/projects/camai.png",
    imageAlt: "CamAI person tracking and action recognition",
    video: "/videos/camai.mp4",
    collaborators: [
      { name: "Timi Owolabi", self: true },
      { name: "Nelson Elijah", href: "https://www.nelsonelijah.com/" },
      { name: "Jesse-Paul Osemeke", href: "https://jesse-paul.me/" },
    ],
    links: [{ label: "Code", href: "https://github.com/iitimii/Cam-Ai" }],
  },
  {
    name: "3D Brain Tumor Segmentation",
    titleLink: "https://github.com/iitimii/Brain-Tumour-Segmentation-with-UNet",
    kind: "Medical computer vision",
    period: "2023",
    description:
      "A U-Net application for segmenting necrotic, edema, and enhancing tumor regions in 3D MRI scans, served through FastAPI and Streamlit with 95% accuracy.",
    tags: ["Python", "TensorFlow", "U-Net", "FastAPI", "Streamlit"],
    image: "/projects/brain-tumor.png",
    imageAlt: "Brain MRI tumor segmentation output",
    collaborators: [
      { name: "Timi Owolabi", self: true },
      {
        name: "Collins Olawale",
        href: "https://www.linkedin.com/in/collins-olawale-210b1a125/",
      },
      {
        name: "Ikeoluwa Ibitoye",
        href: "https://ng.linkedin.com/in/ikeoluwa-ibitoye-04b561268",
      },
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Brain-Tumour-Segmentation-with-UNet",
      },
      {
        label: "Writing",
        href: "https://medium.com/@timiiowolabi/early-brain-tumor-detection-and-classification-with-computer-vision-638a593267b2",
      },
    ],
  },
  {
    name: "ClothSegNet",
    titleLink: "https://github.com/iitimii/Semantic-Segmentation-for-Clothing",
    kind: "Semantic segmentation",
    period: "2023",
    description:
      "A U-Net model that identifies garment boundaries and segments clothing items from photographs of people.",
    tags: ["Python", "TensorFlow", "U-Net", "OpenCV"],
    image: "/projects/clothsegnet.jpg",
    imageAlt: "Clothing semantic-segmentation example",
    collaborators: [{ name: "Timi Owolabi", self: true }],
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Semantic-Segmentation-for-Clothing",
      },
    ],
  },
];

export const researchExperience: TimelineItem[] = [
  {
    role: "Embodied AI Research Group Lead",
    org: "ML Collective",
    location: "Lagos, Nigeria",
    period: "Jun 2026 - Present",
    bullets: [
      "Optimize large world-action models for efficient inference on resource-constrained edge devices.",
      "Implemented layer skipping on NVIDIA's Cosmos3-Edge-DROID model to develop the compact SmolWAM world-action model.",
    ],
  },
  {
    role: "Research Intern",
    org: "National Centre for Artificial Intelligence and Robotics (NCAIR)",
    location: "Abuja, Nigeria",
    period: "Dec 2025 - Present",
    bullets: [
      "Developed AI-powered assistive glasses for visually impaired users.",
      "Deployed Qwen3.5-0.8B on a Raspberry Pi through llama.cpp for on-device scene understanding and real-time environmental descriptions.",
    ],
  },
  {
    role: "Robotics Research Team Lead",
    org: "Google Developer Groups on Campus",
    location: "Ogun, Nigeria",
    period: "Sep 2024 - Aug 2025",
    bullets: [
      "Led a simulation replication of Stanford's ALOHA bimanual manipulation paper.",
      "Developed MuJoCo and JAX vision-based manipulation policies and prototyped a low-cost 3D-printed robot arm.",
    ],
  },
  {
    role: "Research Student",
    org: "Covenant University Centre for Research, Innovation and Discovery",
    location: "Ogun, Nigeria",
    period: "Sep 2024 - Aug 2025",
    bullets: [
      "Collaborated on autonomous waste collection and epidemiological prediction projects for Sub-Saharan Africa.",
      "Built an NLP system that parses, summarizes, and clusters academic literature from Scopus alerts.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "WaySense · Oxford Robotics Institute",
    location: "Oxford, United Kingdom · Remote",
    period: "Mar 2024 - Sep 2024",
    bullets: [
      "Analyzed the Lyft Level 5 dataset for multi-agent vehicle state estimation, lane-change detection, and explainable autonomous driving.",
      "Adapted the fast subset-scan algorithm to graph neural networks for statistically significant traffic anomaly detection.",
    ],
  },
  {
    role: "Machine Learning Research Intern",
    org: "Zummit Africa",
    location: "Lagos, Nigeria",
    period: "Apr 2023 - May 2024",
    bullets: [
      "Developed a U-Net brain tumor segmentation application that achieved 95% accuracy on medical imaging data.",
      "Built a toxic-comment classifier for imbalanced social media data and benchmarked BERT against BiLSTM.",
    ],
  },
  {
    role: "Research Intern",
    org: "Innovia Labs",
    location: "Lagos, Nigeria",
    period: "Mar 2024 - May 2024",
    bullets: [
      "Configured the Pixhawk4 flight controller for an autonomous electric VTOL search-and-rescue drone.",
      "Developed a gesture-controlled home automation system with cascaded landmark detection and an MLP classifier.",
    ],
  },
  {
    role: "Research Intern",
    org: "EPAIL Nigeria",
    location: "Lagos, Nigeria",
    period: "Aug 2023 - Oct 2023",
    bullets: [
      "Developed a vision-based firearm detection system and created a dataset of 10,000 annotated firearm segmentation images.",
      "Developed a compact fixed-wing drone for surveillance operations.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "Coordinated Control of Quadrotor Swarms: Classical, Adaptive, and Learning-Based Methods",
    titleLink: "https://github.com/iitimii/Coordinated-Control-of-Multi-Quadrotor-Swarms",
    venue: "Under Review at IJCAI",
    year: "2026",
    description:
      "Adaptive, optimal, and learning-based control for quadrotor swarms using gym-pybullet-drones.",
    authors: [
      { name: "Oluwatimilehin Owolabi", self: true },
      {
        name: "Chukwudumebi Chukwuma",
        href: "https://ng.linkedin.com/in/chukwudumebi-chukwuma-b481bb275",
      },
      { name: "Oladele Omogboyega", href: "https://github.com/oladele-19" },
      {
        name: "Ayokunle Awelewa",
        href: "https://scholar.google.com/citations?user=gU5hEtMAAAAJ&hl=en",
      },
    ],
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
    image: "/research/quadrotor-swarms.png",
    video: "/videos/multi-quadrotor.mp4",
  },
  {
    title: "Smart Energy Metering and Monitoring System Using Internet of Things",
    venue: "Under Review at IEEE SAUPEC",
    year: "2026",
    description:
      "An Internet of Things approach to smart energy metering and monitoring for more observable and efficient electricity use.",
    authors: [
      { name: "Ayokunle Awelewa" },
      { name: "Kayode Ojo" },
      { name: "E. Edmond" },
      { name: "Oluwatimilehin Owolabi", self: true },
      { name: "I. Samuel" },
    ],
    links: [],
  },
  {
    title: "Fuzzy-PID Controller for Liquid Level Control of Tank Systems",
    titleLink:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mJOLhAcAAAAJ&authuser=1&citation_for_view=mJOLhAcAAAAJ:2osOgNQ5qMEC",
    venue: "NIPES-Journal of Science and Technology",
    year: "2025",
    note: "Oral Presentation",
    description:
      "A Fuzzy-PID controller for single- and double-tank systems that improves handling of nonlinearity, uncertainty, and multivariable disturbances over conventional PID control.",
    authors: [
      {
        name: "Ayokunle Awelewa",
        href: "https://scholar.google.com/citations?user=gU5hEtMAAAAJ&hl=en",
      },
      {
        name: "Kayode Ojo",
        href: "https://scholar.google.com/citations?user=2EfkhzQAAAAJ&hl=en",
      },
      {
        name: "Toluwa Abimbola-Oladejo",
        href: "https://www.linkedin.com/in/toluwa-abimbola-oladejo-9b350b162/",
      },
      { name: "Timilehin Owolabi", self: true },
    ],
    links: [
      {
        label: "PDF",
        href: "https://journals.nipes.org/index.php/jstrissue/article/download/2506/1612",
      },
    ],
    image: "/research/fuzzy-pid.png",
  },
  {
    title:
      "Practical Trade-offs in Neural Network Optimization: Brute Force Search and Gradient Descent",
    titleLink: "https://iopscience.iop.org/article/10.1088/2631-8695/adc5de/meta",
    venue: "Engineering Research Express",
    year: "2025",
    description:
      "A comparison of brute-force and gradient-descent optimization showing complementary trade-offs in accuracy, memory use, and convergence speed.",
    authors: [
      {
        name: "Tobiloba Emmanuel Somefun",
        href: "https://scholar.google.com/citations?user=O3zFs20AAAAJ&hl=en",
      },
      { name: "Timilehin Owolabi", self: true },
      {
        name: "Omowunmi Mary Longe",
        href: "https://www.uj.ac.za/members/dr-omowunmi-mary-longe/",
      },
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/iitimii/Brute-Force-Optimization-for-Neural-Networks",
      },
      {
        label: "PDF",
        href: "https://iopscience.iop.org/article/10.1088/2631-8695/adc5de/pdf",
      },
    ],
    image: "/research/nn-optimization.png",
  },
  {
    title:
      "Enhancing Radiological Imaging for Better Healthcare Outcomes Through High Performance Hybrid Approach",
    titleLink: "https://asric.africa/sites/default/files/2025-02/10%20ES%20Vol.%205%202024.pdf",
    venue: "ASRIC Journal on Engineering Sciences",
    year: "2024",
    description:
      "A hybrid radiological image enhancement method combining unsharp masking, logarithmic transformation, and adaptive histogram equalization.",
    authors: [
      {
        name: "Olumayowa Idowu",
        href: "https://ng.linkedin.com/in/olumayowa-idowu-ba80b644",
      },
      { name: "Haoji Hu", href: "https://person.zju.edu.cn/en/huhaoji" },
      {
        name: "Amusa Akinwale",
        href: "https://funaab.edu.ng/staff/amusa-kamoli-akinwale/",
      },
      {
        name: "Abolaji Ilori",
        href: "https://scholar.google.com/citations?user=BpJKdbAAAAAJ&hl=en",
      },
      { name: "Zou Xingze" },
      { name: "Yubin Wang" },
      { name: "Aiyedun Rasheed", href: "https://www.linkedin.com/in/rasheedaiyedun/" },
      { name: "Timilehin Owolabi", self: true },
    ],
    links: [
      {
        label: "PDF",
        href: "https://asric.africa/sites/default/files/2025-02/10%20ES%20Vol.%205%202024.pdf",
      },
    ],
    image: "/research/radiological-imaging.png",
  },
  {
    title: "Energy Optimization Algorithm for Reducing Energy Consumption in a Smart Home",
    titleLink: "https://ieeexplore.ieee.org/abstract/document/10379321/",
    venue: "IEEE ICMEAS",
    year: "2023",
    description:
      "A smart-home automation algorithm combining appliance scheduling with environmental sensing, achieving up to 68% energy savings in simulation.",
    authors: [
      {
        name: "Tobiloba Somefun",
        href: "https://scholar.google.com/citations?user=O3zFs20AAAAJ&hl=en",
      },
      { name: "Adrian Egbewe Igho-Orere", href: "https://ng.linkedin.com/in/adrian-igho-orere" },
      {
        name: "Comfort Somefun",
        href: "https://ace.covenantuniversity.edu.ng/ra-student.php?user=42",
      },
      { name: "Nelson Elijah", href: "https://www.nelsonelijah.com/" },
      { name: "Timilehin Owolabi", self: true },
      {
        name: "Samson Ongbali",
        href: "https://scholar.google.com/citations?user=lDAAR6wAAAAJ&hl=en",
      },
    ],
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10379321",
      },
    ],
    image: "/research/energy-optimization.png",
  },
];

export const impact: ImpactItem[] = [
  {
    title: "Engineering Innovation Empowerment Foundation",
    organization: "EIEF",
    role: "Co-Founder",
    period: "Dec 2024 - Present",
    description:
      "Hands-on engineering education and support for students with limited access to practical STEM learning.",
    bullets: [
      "Designed and produced engineering kits for teaching core principles.",
      "Organized technical training and mentoring programs.",
      "Launched The Classroom Project and delivered classroom desks and STEM learning support to children at the Durumi IDP camp in Abuja.",
    ],
    image: "/impact/classroom-project.jpg",
  },
  {
    title: "Association of Electrical and Information Engineering Students",
    organization: "Covenant University",
    role: "President",
    period: "Sep 2024 - Aug 2025",
    description:
      "Led a 20-member executive team serving more than 2,000 students across projects, competitions, and academic support.",
    bullets: [
      "Coordinated student projects and engineering competitions.",
      "Founded a mentorship program pairing junior students with seniors for academic and career guidance.",
    ],
    organizationUrl: "https://www.instagram.com/aeies_cu/",
  },
  {
    title: "Machine Learning Education",
    organization: "Association of Professional Women Engineers of Nigeria",
    role: "Machine Learning Tutor",
    period: "Aug 2023 - Oct 2023",
    description:
      "Taught foundational machine learning to more than 50 female engineering students.",
    bullets: [
      "Covered supervised learning, model evaluation, and neural networks.",
      "Developed hands-on Python exercises using real-world datasets.",
    ],
    organizationUrl: "https://www.apwen.org.ng/",
  },
  {
    title: "Hands-on Robotics Instruction",
    organization: "Project Cage Technologies",
    role: "Robotics Instructor",
    period: "Aug 2023 - Oct 2023",
    description:
      "Taught robotics fundamentals and mentored students through complete hardware and software projects.",
    bullets: [
      "Covered electronics, sensors, actuators, embedded programming, and autonomous systems.",
      "Guided system design, hardware integration, programming, and troubleshooting.",
    ],
  },
  {
    title: "Robotics and AI Team",
    organization: "Robotics and Artificial Intelligence Innovators Network",
    role: "Team Lead",
    period: "Sep 2024 - Aug 2025",
    description:
      "Led applied deep-learning projects and organized model-building competitions for students.",
    bullets: [
      "Built a CNN-LSTM speech emotion recognition system with PyTorch Lightning.",
      "Ran a fruit-classification competition comparing ResNet-18, MobileNet V2, and EfficientNet V2.",
    ],
  },
  {
    title: "National Championship Sustainability Projects",
    organization: "Enactus",
    role: "Member",
    period: "May 2021 - May 2023",
    description:
      "Contributed engineering work to the national champion team's circular-economy and sustainable-agriculture projects.",
    bullets: [
      "Designed a soil-nutrient sensor circuit for the Cow Blood to Manure initiative.",
      "Contributed to projects turning recycled bottles into road tiles and biomass waste into reusable food packs.",
    ],
  },
  {
    title: "Youth Sustainability Initiatives",
    organization: "Schneider Electric",
    role: "Sustainability Intern",
    period: "Aug 2023 - Oct 2023",
    description:
      "Combined robotics education with operational support for NGO partnerships aligned with a global youth-empowerment initiative.",
    bullets: [
      "Ran self-driving-car robotics workshops for young students.",
      "Partnered with NGOs on STEM tutoring and reviewed program budgets exceeding $60,000 each.",
    ],
    organizationUrl: "https://www.se.com/",
  },
];

export const writings: Writing[] = [
  {
    title: "Weapon Detection with YOLOv8: Enhancing Public Safety",
    date: "Apr 24, 2024",
    description:
      "How our team at Zummit Africa used YOLOv8 to build a flexible real-time weapon detection system for safer public spaces.",
    tags: ["YOLOv8", "Object Detection", "Computer Vision", "Public Safety"],
    readingTime: "4 min read",
    href: "https://medium.com/@timiiowolabi/weapon-detection-with-yolov8-enhancing-public-safety-39e513688dcd",
  },
  {
    title: "Early Brain Tumor Detection and Classification with Computer Vision",
    date: "Sep 14, 2023",
    description:
      "How a U-Net-based computer vision model can support early brain tumor detection, classification, treatment planning, and clinical research.",
    tags: ["Computer Vision", "AI", "Neuroscience", "Machine Learning"],
    readingTime: "10 min read",
    href: "https://medium.com/@timiiowolabi/early-brain-tumor-detection-and-classification-with-computer-vision-638a593267b2",
    image: "/projects/brain-tumor.png",
  },
];

export const news: NewsItem[] = [
  {
    date: "Jul 2026",
    before: "The State of Robotics in Africa (SORA) report was released. Check it out ",
    link: { label: "here ↗", href: "https://afrob.org/report/" },
  },
  {
    date: "Jun 2026",
    before: "Became lead of the Embodied AI research group at ML Collective.",
  },
  { date: "May 2026", before: "Joined ML Collective." },
  { date: "Aug 2025", before: "Joined African Robotics Network." },
  { date: "Aug 2025", before: "Graduated with First Class Honours." },
  {
    date: "Aug 2025",
    before:
      "Gave the talk “From Campus to Career: Navigating the Engineering Journey” to the Redeemer's University Electrical Engineering Students Association.",
  },
  { date: "Apr 2025", before: "Joined Black in AI." },
  { date: "Apr 2025", before: "Joined Black in Robotics." },
  {
    date: "Aug 2024",
    before: "Gave the talk ",
    link: {
      label: "AI: Our Current Reality and Future Trajectory ↗",
      href: "/talks/nse-abeokuta-ai-training.pdf",
    },
    after: " to the Nigerian Society of Engineers.",
  },
  { date: "May 2024", before: "Joined the International Society of Automation." },
  {
    date: "Apr 2024",
    before: "Gave the talk ",
    link: {
      label: "Deep Learning: Neural Networks ↗",
      href: "/talks/deep-learning-neural-networks.pdf",
    },
    after: " to the Association of Professional Women Engineers of Nigeria.",
  },
  {
    date: "Apr 2024",
    before: "Joined the Association of Professional Women Engineers of Nigeria.",
  },
  { date: "2024", before: "Was a finalist in the Pan-African Robotics Competition." },
  { date: "Jun 2022", before: "Joined Data Science Nigeria." },
  { date: "Dec 2021", before: "Joined the Nigerian Society of Engineers." },
  {
    date: "2021",
    before: "Received the Founder's Award for Best WASSCE Result at Wellspring College.",
  },
  {
    date: "2020",
    before: "Graduated as valedictorian of the Department of Science at Wellspring College.",
  },
];

export const navItems = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "research", label: "research" },
  { id: "impact", label: "impact" },
  { id: "writings", label: "writings" },
  { id: "news", label: "news" },
  { id: "contact", label: "contact" },
];
