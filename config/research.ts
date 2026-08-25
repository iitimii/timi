export interface LinkedName {
  name: string;
  link?: string;
}

export interface IntroSegment {
  text: string;
  link?: string;
}

export interface PublicationInterface {
  id: string;
  title: string;
  titleLink?: string;
  authors: LinkedName[];
  /** Index into `authors` that refers to Timi, rendered bold. */
  selfIndex: number;
  venue: string;
  year: string;
  /** Extra emphasis after the venue, e.g. an oral presentation note. */
  note?: string;
  links: { label: string; href: string }[];
  description: string;
  image: string;
}

export interface NewsItem {
  date: string;
  content: string;
}

/**
 * Intro paragraphs, split into segments so the entities that were links on
 * iitimii.github.io stay links here.
 */
export const researchIntro: IntroSegment[][] = [
  [
    { text: "I graduated with a 4.85/5.0 GPA in Electrical Engineering from " },
    {
      text: "Covenant University",
      link: "https://www.covenantuniversity.edu.ng/",
    },
    {
      text: ". During my time at Covenant, I led the Robotics Research Team for ",
    },
    {
      text: "Google Developer Groups on Campus",
      link: "https://gdg.community.dev/gdg-on-campus-covenant-university-ota-nigeria/",
    },
    {
      text: ", where we worked on reinforcement learning, vision-language-action models, and low-cost robotic systems. Also, I worked with ",
    },
    { text: "Dr. Daniel Omeiza", link: "https://danielomeiza.github.io/" },
    { text: " of the " },
    { text: "Oxford Robotics Institute", link: "https://ori.ox.ac.uk/" },
    { text: " on autonomous driving and graph neural networks." },
  ],
  [
    {
      text: "I'm passionate about teaching and mentorship. I currently teach machine learning to undergraduate and graduate women of ",
    },
    { text: "APWEN", link: "https://www.apwen.org.ng/" },
    { text: ". I was the president of the " },
    {
      text: "Association of Electrical and Information Engineering Students",
      link: "https://www.instagram.com/aeies_cu/",
    },
    {
      text: " and I founded the AEIES student mentorship program to help students master engineering concepts from first principles.",
    },
  ],
  [
    {
      text: "I'm currently interested in meta-learning for self-improving policies, and learning-based model predictive control for mobility and manipulation in legged and aerial robots. My vision is to unify machine learning, control theory, and cognitive science to build embodied AI systems that think, remember, and learn continuously.",
    },
  ],
];

export const publications: PublicationInterface[] = [
  {
    id: "quadrotor-swarms",
    title:
      "Coordinated Control of Quadrotor Swarms: Classical, Adaptive, and Learning-Based Methods",
    titleLink:
      "https://github.com/iitimii/Coordinated-Control-of-Multi-Quadrotor-Swarms",
    authors: [
      { name: "Oluwatimilehin Owolabi" },
      {
        name: "Chukwudumebi Chukwuma",
        link: "https://ng.linkedin.com/in/chukwudumebi-chukwuma-b481bb275",
      },
      { name: "Oladele Omogboyega", link: "https://github.com/oladele-19" },
      {
        name: "Ayokunle Awelewa",
        link: "https://scholar.google.com/citations?user=gU5hEtMAAAAJ&hl=en",
      },
    ],
    selfIndex: 0,
    venue: "Under Review at IJCAI",
    year: "2026",
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
    description:
      "Adaptive, optimal, and learning-based control for quadrotor swarms using gym-pybullet-drones.",
    image: "/research/quadrotor-swarms/logo.png",
  },
  {
    id: "fuzzy-pid",
    title: "Fuzzy-PID Controller for Liquid Level Control of Tank Systems",
    titleLink:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mJOLhAcAAAAJ&authuser=1&citation_for_view=mJOLhAcAAAAJ:2osOgNQ5qMEC",
    authors: [
      {
        name: "Ayokunle Awelewa",
        link: "https://scholar.google.com/citations?user=gU5hEtMAAAAJ&hl=en",
      },
      {
        name: "Kayode Ojo",
        link: "https://scholar.google.com/citations?user=2EfkhzQAAAAJ&hl=en",
      },
      {
        name: "Toluwa Abimbola-Oladejo",
        link: "https://www.linkedin.com/in/toluwa-abimbola-oladejo-9b350b162/",
      },
      { name: "Timilehin Owolabi" },
    ],
    selfIndex: 3,
    venue: "NIPES-Journal of Science and Technology",
    year: "2025",
    note: "(Oral Presentation)",
    links: [
      {
        label: "PDF",
        href: "https://journals.nipes.org/index.php/jstrissue/article/download/2506/1612",
      },
    ],
    description:
      "Developed and tested a Fuzzy-PID controller for single- and double-tank liquid level systems, showing improved performance over conventional PID control in handling nonlinearity, uncertainty, and multivariable disturbances.",
    image: "/research/fuzzy-pid/logo.png",
  },
  {
    id: "nn-optimization",
    title:
      "Practical Trade-offs in Neural Network Optimization: Brute Force Search and Gradient Descent",
    titleLink:
      "https://iopscience.iop.org/article/10.1088/2631-8695/adc5de/meta",
    authors: [
      {
        name: "Tobiloba Emmanuel Somefun",
        link: "https://scholar.google.com/citations?user=O3zFs20AAAAJ&hl=en",
      },
      { name: "Timilehin Owolabi" },
      {
        name: "Omowunmi Mary Longe",
        link: "https://www.uj.ac.za/members/dr-omowunmi-mary-longe/",
      },
    ],
    selfIndex: 1,
    venue: "Engineering Research Express",
    year: "2025",
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
    description:
      "This work compares brute force and gradient descent optimization in neural networks, showing that brute force achieves better accuracy and lower memory usage, while gradient descent offers faster convergence—highlighting the potential of hybrid methods for more adaptable and efficient learning.",
    image: "/research/nn-optimization/logo.png",
  },
  {
    id: "radiological-imaging",
    title:
      "Enhancing Radiological Imaging for Better Healthcare Outcomes Through High Performance Hybrid Approach",
    titleLink:
      "https://asric.africa/sites/default/files/2025-02/10%20ES%20Vol.%205%202024.pdf",
    authors: [
      {
        name: "Olumayowa Idowu",
        link: "https://ng.linkedin.com/in/olumayowa-idowu-ba80b644",
      },
      { name: "Haoji Hu", link: "https://person.zju.edu.cn/en/huhaoji" },
      {
        name: "Amusa Akinwale",
        link: "https://funaab.edu.ng/staff/amusa-kamoli-akinwale/",
      },
      {
        name: "Abolaji Ilori",
        link: "https://scholar.google.com/citations?user=BpJKdbAAAAAJ&hl=en",
      },
      { name: "Zou Xingze" },
      { name: "Yubin Wang" },
      {
        name: "Aiyedun Rasheed",
        link: "https://www.linkedin.com/in/rasheedaiyedun/",
      },
      { name: "Timilehin Owolabi" },
    ],
    selfIndex: 7,
    venue: "ASRIC Journal on Engineering Sciences",
    year: "2024",
    links: [
      {
        label: "PDF",
        href: "https://asric.africa/sites/default/files/2025-02/10%20ES%20Vol.%205%202024.pdf",
      },
    ],
    description:
      "Developed a hybrid radiological image enhancement technique combining unsharp masking, logarithmic transformation, and adaptive histogram equalization, which outperforms CLAHE and Wavelet-based methods in visual quality metrics—offering a more standardized, accurate, and cost-effective solution for medical imaging systems.",
    image: "/research/radiological-imaging/logo.png",
  },
  {
    id: "energy-optimization",
    title:
      "Energy Optimization Algorithm for Reducing Energy Consumption in a Smart Home",
    titleLink: "https://ieeexplore.ieee.org/abstract/document/10379321/",
    authors: [
      {
        name: "Tobiloba Somefun",
        link: "https://scholar.google.com/citations?user=O3zFs20AAAAJ&hl=en",
      },
      {
        name: "Adrian Egbewe Igho-Orere",
        link: "https://ng.linkedin.com/in/adrian-igho-orere",
      },
      {
        name: "Comfort Somefun",
        link: "https://ace.covenantuniversity.edu.ng/ra-student.php?user=42",
      },
      { name: "Nelson Elijah", link: "https://www.nelsonelijah.com/" },
      { name: "Timilehin Owolabi" },
      {
        name: "Samson Ongbali",
        link: "https://scholar.google.com/citations?user=lDAAR6wAAAAJ&hl=en",
      },
    ],
    selfIndex: 4,
    venue: "ICMEAS",
    year: "2023",
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10379321",
      },
    ],
    description:
      "Developed a smart home automation algorithm that combines appliance scheduling with real-time environmental sensing to optimize electricity use, achieving up to 68% energy savings in simulations—offering a scalable solution for reducing residential energy consumption and promoting smart grid integration.",
    image: "/research/energy-optimization/logo.png",
  },
];

export const news: NewsItem[] = [
  {
    date: "Jun 2026",
    content: "I became lead of the Embodied AI focus group at MLC.",
  },
];
