import { PortfolioData } from '../types/content';

export const portfolioContent: PortfolioData = {
  profile: {
    name: 'Emanuel Cruzat',
    role: 'Software & Data Engineer',
    bio: 'Specializing in scalable data pipelines, high-throughput distributed architectures, and clean, high-performance web systems.',
    portraitUrl: './assets/profile_primary.png',
    portraitHoverUrl: './assets/profile_hover.png',
    portraitAlt: 'Portrait of Emanuel Cruzat',
    resumeUrl: 'https://docs.google.com/document/d/placeholder-resume',
    socials: {
      linkedin: 'https://www.linkedin.com/in/emanuel-cruzat-8bb340218/',
      github: 'https://github.com/cruzatemanuel',
      instagram: 'https://instagram.com/placeholder-emanuelcruzat',
      email: 'mailto:emanuelcruzat@gmail.com',
    },
  },

  tools: [
    // Backend & Database
    { name: 'Python', category: 'backend-db', description: 'Core language for distributed data pipelines & backend APIs.' },
    { name: 'SQL', category: 'backend-db', description: 'Advanced query optimization & relational data modeling.' },
    { name: 'PostgreSQL', category: 'backend-db', description: 'Relational database management & transactional storage.' },
    { name: 'PySpark', category: 'backend-db', description: 'Distributed data processing framework for large-scale datasets.' },
    { name: 'FastAPI', category: 'backend-db', description: 'High-performance Python web framework for microservices.' },

    // Analytics
    { name: 'Pandas & NumPy', category: 'analytics', description: 'Data manipulation, aggregation, and numerical computation.' },
    { name: 'Apache Spark', category: 'analytics', description: 'Real-time analytics engine and batch data processing.' },
    { name: 'Metabase', category: 'analytics', description: 'Business intelligence visualization & SQL dashboarding.' },
    { name: 'dbt (Data Build Tool)', category: 'analytics', description: 'Analytics engineering & modular SQL transformations.' },

    // Design
    { name: 'Figma', category: 'design', description: 'Interface layout, wireframing, and component design systems.' },
    { name: 'CSS Modules & Tokens', category: 'design', description: 'Clean monochromatic UI engineering and design tokens.' },
    { name: 'Typography & Layout', category: 'design', description: 'Geometric sans typography hierarchy and responsive grids.' },

    // Tools and Version controls
    { name: 'Git & GitHub', category: 'tools-vc', description: 'Distributed version control & GitHub Actions CI/CD workflows.' },
    { name: 'Docker', category: 'tools-vc', description: 'Containerization for consistent deployment environments.' },
    { name: 'Vite & React', category: 'tools-vc', description: 'Modern frontend application bundling & component lifecycle.' },
    { name: 'Linux / Bash', category: 'tools-vc', description: 'Shell scripting, server administration, and automation.' },

    // AI
    { name: 'PyTorch', category: 'ai', description: 'Deep learning framework for model training & evaluation.' },
    { name: 'Scikit-Learn', category: 'ai', description: 'Machine learning algorithms, classification, and regression.' },
    { name: 'OpenAI API & LangChain', category: 'ai', description: 'LLM integration, prompt engineering, and agent workflows.' },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Data Engineer & Core Contributor',
      organization: 'Data Insights Lab',
      logoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80',
      logoAlt: 'Data Insights Lab Logo',
      year: '2024 — Present',
      description: 'Building automated SQL ETL pipelines and optimizing high-throughput distributed data systems.',
    },
    {
      id: 'exp-2',
      role: 'Full-Stack Software Engineer',
      organization: 'Dev Tech Solutions',
      logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
      logoAlt: 'Dev Tech Solutions Logo',
      year: '2023 — 2024',
      description: 'Architecting responsive React applications, TypeScript interfaces, and REST API services.',
    },
    {
      id: 'exp-3',
      role: 'Systems & Data Associate',
      organization: 'Open Source Systems',
      logoUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&q=80',
      logoAlt: 'Open Source Logo',
      year: '2022 — 2023',
      description: 'Maintaining automated database validation tools and optimizing query performance.',
    },
    {
      id: 'exp-4',
      role: 'Junior Data Analyst & Developer',
      organization: 'Tech Catalyst Analytics',
      logoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=120&q=80',
      logoAlt: 'Tech Catalyst Logo',
      year: '2021 — 2022',
      description: 'Developed automated reporting scripts and optimized SQL database queries for reporting.',
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science in Information Technology / Computer Science',
      institution: 'Batangas State University',
      year: '2020 — 2024',
      description: 'Focused on Software Engineering, Database Systems, Distributed Systems, and Data Architecture.',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'AWS Certified Data Engineer — Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      credentialUrl: 'https://aws.amazon.com/verification',
      description: 'Validates expertise in data ingestion, pipeline transformation, security, and AWS data services.',
    },
    {
      id: 'cert-2',
      title: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks',
      year: '2024',
      credentialUrl: 'https://databricks.com/verification',
      description: 'Demonstrates proficiency with Delta Lake, PySpark processing, and automated orchestration.',
    },
    {
      id: 'cert-3',
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      year: '2023',
      credentialUrl: 'https://cloud.google.com/certification',
      description: 'Certifies skills in designing operational data systems, BigQuery analytics, and streaming pipelines.',
    },
  ],

  projects: [
    {
      id: 'dev-1',
      title: 'Real-time Streaming Pipeline',
      category: 'Dev Project',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Data flow dashboard screenshot',
      destinationUrl: 'https://github.com/placeholder-data-pipeline',
      accentColor: '#09090b',
      featured: true,
      tags: ['Python', 'PySpark', 'SQL', 'Docker'],
      description: 'Distributed event processing pipeline ingesting analytics metrics with sub-second latency.',
    },
    {
      id: 'dev-2',
      title: 'Minimal Developer Portfolio Engine',
      category: 'Dev Project',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Portfolio web app interface',
      destinationUrl: 'https://github.com/placeholder-portfolio-engine',
      accentColor: '#09090b',
      featured: true,
      tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
      description: 'High-performance static web application engineered with strict monochromatic single-column layout.',
    },
    {
      id: 'dev-3',
      title: 'ETL Pipeline Monitor & Anomaly Detector',
      category: 'Dev Project',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'ETL Monitor dashboard',
      destinationUrl: 'https://github.com/placeholder-etl-monitor',
      accentColor: '#09090b',
      featured: true,
      tags: ['SQL', 'PostgreSQL', 'Python'],
      description: 'Automated data validation and anomaly detection engine for distributed relational databases.',
    },
    {
      id: 'dev-4',
      title: 'Distributed Log Aggregator',
      category: 'Dev Project',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Log Aggregator screenshot',
      destinationUrl: 'https://github.com/placeholder-log-aggregator',
      accentColor: '#09090b',
      featured: false,
      tags: ['Python', 'Docker', 'FastAPI'],
      description: 'Scalable log collection and parsing service handling high-concurrency log streams.',
    },
  ],
};

export default portfolioContent;


