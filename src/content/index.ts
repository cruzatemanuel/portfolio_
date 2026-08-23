import { PortfolioData } from '../types/content';

export const portfolioContent: PortfolioData = {
  profile: {
    name: 'Emanuel Cruzat',
    role: 'Software & Data Engineer',
    bio: 'Specializing in scalable data pipelines, high-throughput distributed architectures, and clean, high-performance web systems.',
    portraitUrl: './assets/profile_primary.png',
    portraitHoverUrl: './assets/profile_hover.png',
    portraitAlt: 'Portrait of Emanuel Cruzat',
    resumeUrl: 'https://docs.google.com/document/d/1qL9rbv6xytX_UdFmqQnHJC_NrqYeWO7i/edit?usp=sharing&ouid=109406289362191345908&rtpof=true&sd=true',
    socials: {
      linkedin: 'https://www.linkedin.com/in/emanuel-cruzat-8bb340218/',
      github: 'https://github.com/cruzatemanuel',
      instagram: 'https://instagram.com/placeholder-emanuelcruzat',
      email: 'mailto:emanuelcruzat@gmail.com',
    },
  },

  tools: [
    // Backend & Database
    { name: 'Python', category: 'backend-db', iconName: 'python', description: 'Core language for distributed data pipelines & backend APIs.' },
    { name: 'SQL', category: 'backend-db', iconName: 'sql', description: 'Advanced query optimization & relational data modeling.' },
    { name: 'PostgreSQL', category: 'backend-db', iconName: 'postgresql', description: 'Relational database management & transactional storage.' },
    { name: 'PySpark', category: 'backend-db', iconName: 'pyspark', description: 'Distributed data processing framework for large-scale datasets.' },

    // Analytics
    { name: 'Pandas & NumPy', category: 'analytics', iconName: 'pandas-numpy', description: 'Data manipulation, aggregation, and numerical computation.' },
    { name: 'Apache Spark', category: 'analytics', iconName: 'apachespark', description: 'Real-time analytics engine and batch data processing.' },
    { name: 'Metabase', category: 'analytics', iconName: 'metabase', description: 'Business intelligence visualization & SQL dashboarding.' },
    { name: 'dbt (Data Build Tool)', category: 'analytics', iconName: 'dbt', description: 'Analytics engineering & modular SQL transformations.' },

    // Design
    { name: 'Figma', category: 'design', iconName: 'figma', description: 'Interface layout, wireframing, and component design systems.' },
    { name: 'Photoshop', category: 'design', iconName: 'photoshop', description: 'Image editing and graphic design.' },
    { name: 'Typography & Layout', category: 'design', iconName: 'typography', description: 'Geometric sans typography hierarchy and responsive grids.' },

    // Tools and Version controls
    { name: 'Git & GitHub', category: 'tools-vc', iconName: 'git-github', description: 'Distributed version control & GitHub Actions CI/CD workflows.' },
    { name: 'Docker', category: 'tools-vc', iconName: 'docker', description: 'Containerization for consistent deployment environments.' },

    // AI
    { name: 'Gemini', category: 'ai', iconName: 'gemini', description: 'Google\'s AI model for natural language processing and generation.' },
    { name: 'Claude Code', category: 'ai', iconName: 'claude', description: 'AI coding assistant for software development.' },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Public Information Officer 2',
      organization: 'Integrated Information Technology Student Society (IINTESS)',
      logoUrl: '',
      logoAlt: 'IINTESS Logo',
      year: '2026 — Present',
      description: 'Responsible for managing the organization\'s public communications, social media presence, and information dissemination to members and stakeholders.',
    },
    {
      id: 'exp-2',
      role: 'Multimedia Committee Member',
      organization: 'Integrated Information Technology Student Society (IINTESS)',
      logoUrl: '',
      logoAlt: 'IINTESS Logo',
      year: '2025 — 2026',
      description: 'Contributed to the creation and management of multimedia content, including graphics, videos, and promotional materials for events and campaigns.',
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science in Information Technology, major in Business Analytics',
      institution: 'Batangas State University',
      year: '2024 — Present',
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
    {
      id: 'cert-2',
      title: 'SAP Analytics Cloud & SAP Build Apps Certification',
      issuer: 'ASEAN Foundation',
      year: '2026',
      credentialUrl: '',
      description: 'Demonstrates expertise in using SAP Analytics Cloud for data visualization and SAP Build Apps for application development within the SAP ecosystem.',
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
      description: 'Automated data pipeline for processing and analyzing weather data in the Philippines, spanning 10 years (2010–2019) across 137 Philippine cities.',
    },
    {
      id: 'dev-2',
      title: 'PHJob-Market-Pipeline',
      category: 'Dev Project',
      year: 'Ongoing',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Data flow dashboard screenshot',
      destinationUrl: 'https://github.com/cruzatemanuel/PHJob-Market-Pipeline',
      accentColor: '#09090b',
      featured: true,
      tags: ['Python', 'PostgreSQL', 'Matplotlib', 'pandas', 'Git', 'Docker'],
      description: 'An ETL pipeline that scrapes 200+ tech job postings from Jobstreet PH, and stores them in a PostgreSQL data warehouse',
    },
  ],
};

export default portfolioContent;


