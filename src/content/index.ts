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

    // Analytics
    { name: 'Pandas & NumPy', category: 'analytics', description: 'Data manipulation, aggregation, and numerical computation.' },
    { name: 'Apache Spark', category: 'analytics', description: 'Real-time analytics engine and batch data processing.' },
    { name: 'Metabase', category: 'analytics', description: 'Business intelligence visualization & SQL dashboarding.' },
    { name: 'dbt (Data Build Tool)', category: 'analytics', description: 'Analytics engineering & modular SQL transformations.' },

    // Design
    { name: 'Figma', category: 'design', description: 'Interface layout, wireframing, and component design systems.' },
    { name: 'Photoshop', category: 'design', description: 'Image editing and graphic design.' },
    { name: 'Typography & Layout', category: 'design', description: 'Geometric sans typography hierarchy and responsive grids.' },

    // Tools and Version controls
    { name: 'Git & GitHub', category: 'tools-vc', description: 'Distributed version control & GitHub Actions CI/CD workflows.' },
    { name: 'Docker', category: 'tools-vc', description: 'Containerization for consistent deployment environments.' },

    // AI
    { name: 'Gemini', category: 'ai', description: 'Google\'s AI model for natural language processing and generation.' },
    { name: 'Claude Code', category: 'ai', description: 'AI coding assistant for software development.' },
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
      degree: 'Bachelor of Science in Information Technology, major in Business Analytics',
      institution: 'Batangas State University',
      year: '2024 — 2028',
      description: 'Focused on data analytics, database management, and business intelligence solutions.',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'DataCamp Associate Data Engineer',
      issuer: 'DataCamp',
      year: '2026',
      credentialUrl: 'https://www.datacamp.com/certificate/DEA0012363987895',
      description: 'Validates proficiency in data engineering concepts, including ETL pipelines, data modeling, and cloud data solutions.',
    },
  ],

  projects: [
    {
      id: 'dev-1',
      title: 'PhilWeather Data Pipeline',
      category: 'Dev Project',
      year: '2026',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Data flow dashboard screenshot',
      destinationUrl: 'https://github.com/cruzatemanuel/PhilWeather-ETL',
      accentColor: '#09090b',
      featured: true,
      tags: ['Python', 'PostgreSQL', 'Matplotlib', 'pandas', 'NumPy', 'Seaborn'],
      description: 'Automated data pipeline for processing and analyzing weather data in the Philippines spanning 10 years (2010–2019) across 137 Philippine cities.',
    }
  ],
};

export default portfolioContent;


