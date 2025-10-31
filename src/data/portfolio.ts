export const HERO_CONTENT = "Building scalable systems from code to cloud. DevOps & Cloud Engineer | Full-Stack Developer. Passionate about automating deployments, optimizing cloud infrastructure, and developing robust web applications with modern technologies.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production-grade reality. My journey began with full-stack development—building web apps with Java, React, and Node.js. Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments. I work across AWS and OCI, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform and automation scripts. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub, and GitLab CI/CD to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', category: 'cloud', level: 85 },
  { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'cloud', level: 80 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 85 },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-plain.svg', category: 'infrastructure', level: 80 },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 75 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg', category: 'devops', level: 85 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg', category: 'devops', level: 80 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg', category: 'devops', level: 95 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg', category: 'development', level: 85 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 90 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 88 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-plain.svg', category: 'development', level: 90 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg', category: 'database', level: 80 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg', category: 'database', level: 85 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-plain.svg', category: 'database', level: 75 },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', category: 'development', level: 95 },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', category: 'development', level: 90 },
];

export const PROJECTS = [
  {
    title: 'Amazon Clone — EKS & ArgoCD Deployment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a production-grade Amazon Clone on AWS EKS with full GitOps automation via ArgoCD. Integrated CI/CD pipelines using GitHub Actions, containerized microservices with Docker, and managed configuration using Kustomize for seamless auto-sync deployments.',
    technologies: ['AWS EKS', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Kustomize', 'Docker', 'Terraform'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
  {
    title: 'Next.js CI/CD Pipeline with Docker & Kubernetes',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed and containerized a Next.js application, deploying it to Kubernetes clusters using GitHub Actions for automated CI/CD. Implemented multi-stage Docker builds, health probes, resource limits, and rolling updates for high availability.',
    technologies: ['Next.js', 'Docker', 'Kubernetes', 'GitHub Actions', 'GHCR'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka/nextjs-docker-kubernetes-app',
    websiteLink: '',
  },
  {
    title: 'Realtime Chat App — MERN + Socket.IO',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed a real-time chat application using the MERN stack with Socket.IO for instant communication. Implemented custom hooks and Zustand for efficient state management. Dockerized for deployment.',
    technologies: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'Zustand', 'Docker'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/Mern_ChatApp',
    websiteLink: 'https://mern-chatapp-rfj5.onrender.com/',
  },
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Automated AWS infrastructure provisioning using Terraform with reusable modules for EC2, VPC, and S3. Integrated CI/CD with GitHub Actions for continuous deployment of cloud environments.',
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'EC2', 'S3'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka',
    websiteLink: '',
  },
  {
    title: 'Netflix Clone using React',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Built a Netflix clone with React, Tailwind CSS, and Firebase. Integrated React Router for seamless navigation and Firebase for authentication.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/NetflixReact_Clone',
    websiteLink: 'https://netflix-clone-wi5g.onrender.com/',
  },
  {
    title: 'Modern Portfolio with 3D Animations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed and developed a modern portfolio website featuring smooth animations, 3D effects powered by Three.js, and a sleek user interface. Leveraged Tailwind CSS for responsive design, React for dynamic interactivity, and Zustand for state management. The site incorporates Framer Motion for fluid transitions.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'HTML', 'CSS'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/Neeraj_Portfolio',
    websiteLink: 'https://neerajnakka.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Dynamic React portfolio showcasing projects with Tailwind CSS design and Framer Motion animations.',
    technologies: ['Tailwind CSS', 'React.js', 'React Router Dom', 'Framer Motion'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/PortFolio_React/tree/master',
    websiteLink: 'https://neerajchandra.onrender.com/',
  },
];

export const CONTACT = {
  address: 'Hyderabad, Telangana, India',
  phoneNo: '+91 9000600559',
  email: 'neerajnakka.n@gmail.com',
  social: {
    github: 'https://github.com/neerajnakka',
    linkedin: 'https://linkedin.com/in/neerajchandran',
    twitter: 'https://twitter.com/neerajnakka',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
