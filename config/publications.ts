import type { Publication } from "./constants";

export const publications: Publication[] = [
  {
    id: "quadrotor-swarms",
    title:
      "Coordinated Control of Quadrotor Swarms: Classical, Adaptive, and Learning-Based Methods",
    authors: [
      "Oluwatimilehin Owolabi",
      "Chukwudumebi Chukwuma",
      "Oladele Omogboyega",
      "Ayokunle Awelewa",
    ],
    venue: "IJCAI",
    year: 2026,
    status: "Under review",
    summary:
      "Adaptive, optimal, and learning-based control for quadrotor swarms using gym-pybullet-drones.",
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
  {
    id: "fuzzy-pid-liquid-level",
    title: "Fuzzy-PID Controller for Liquid Level Control of Tank Systems",
    authors: [
      "Ayokunle Awelewa",
      "Kayode Ojo",
      "Toluwa Abimbola-Oladejo",
      "Timilehin Owolabi",
    ],
    venue: "NIPES-Journal of Science and Technology",
    year: 2025,
    status: "Published",
    summary:
      "Developed and tested a Fuzzy-PID controller for single- and double-tank liquid level systems, showing improved performance over conventional PID control in handling nonlinearity, uncertainty, and multivariable disturbances.",
    links: [
      {
        label: "Publication",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mJOLhAcAAAAJ&authuser=1&citation_for_view=mJOLhAcAAAAJ:2osOgNQ5qMEC",
      },
      {
        label: "PDF",
        href: "https://journals.nipes.org/index.php/jstrissue/article/download/2506/1612",
      },
    ],
  },
  {
    id: "neural-network-optimization",
    title:
      "Practical Trade-offs in Neural Network Optimization: Brute Force Search and Gradient Descent",
    authors: [
      "Tobiloba Emmanuel Somefun",
      "Timilehin Owolabi",
      "Omowunmi Mary Longe",
    ],
    venue: "Engineering Research Express",
    year: 2025,
    status: "Published",
    summary:
      "This work compares brute force and gradient descent optimization in neural networks, showing that brute force achieves better accuracy and lower memory usage, while gradient descent offers faster convergence—highlighting the potential of hybrid methods for more adaptable and efficient learning.",
    links: [
      {
        label: "Publication",
        href: "https://iopscience.iop.org/article/10.1088/2631-8695/adc5de/meta",
      },
      {
        label: "Code",
        href: "https://github.com/iitimii/Brute-Force-Optimization-for-Neural-Networks",
      },
      {
        label: "PDF",
        href: "https://iopscience.iop.org/article/10.1088/2631-8695/adc5de/pdf",
      },
    ],
  },
  {
    id: "radiological-imaging",
    title:
      "Enhancing Radiological Imaging for Better Healthcare Outcomes Through High Performance Hybrid Approach",
    authors: [
      "Olumayowa Idowu",
      "Haoji Hu",
      "Amusa Akinwale",
      "Abolaji Ilori",
      "Zou Xingze",
      "Yubin Wang",
      "Aiyedun Rasheed",
      "Timilehin Owolabi",
    ],
    venue: "ASRIC Journal on Engineering Sciences",
    year: 2024,
    status: "Published",
    summary:
      "Developed a hybrid radiological image enhancement technique combining unsharp masking, logarithmic transformation, and adaptive histogram equalization, which outperforms CLAHE and Wavelet-based methods in visual quality metrics—offering a more standardized, accurate, and cost-effective solution for medical imaging systems.",
    links: [
      {
        label: "PDF",
        href: "https://asric.africa/sites/default/files/2025-02/10%20ES%20Vol.%205%202024.pdf",
      },
    ],
  },
  {
    id: "smart-home-energy-optimization",
    title:
      "Energy Optimization Algorithm for Reducing Energy Consumption in a Smart Home",
    authors: [
      "Tobiloba Somefun",
      "Adrian Egbewe Igho-Orere",
      "Comfort Somefun",
      "Nelson Elijah",
      "Timilehin Owolabi",
      "Samson Ongbali",
    ],
    venue: "IEEE ICMEAS",
    year: 2023,
    status: "Published",
    summary:
      "Developed a smart home automation algorithm that combines appliance scheduling with real-time environmental sensing to optimize electricity use, achieving up to 68% energy savings in simulations—offering a scalable solution for reducing residential energy consumption and promoting smart grid integration.",
    links: [
      {
        label: "Publication",
        href: "https://ieeexplore.ieee.org/abstract/document/10379321/",
      },
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10379321",
      },
    ],
  },
  {
    id: "smart-energy-metering",
    title:
      "Smart Energy Metering and Monitoring System Using Internet of Things",
    authors: ["A. Awelewa", "K. Ojo", "E. Edmond", "O. Owolabi", "I. Samuel"],
    venue: "IEEE SAUPEC",
    year: 2026,
    status: "Under review",
    links: [],
  },
];

export const featuredPublications = publications.slice(0, 3);
