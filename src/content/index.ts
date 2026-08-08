import { PortfolioData } from '../types/content';

export const portfolioContent: PortfolioData = {
  profile: {
    name: 'Emanuel Cruzat',
    role: 'Software & Data Engineer',
    bio: 'Specializing in scalable data pipelines, high-throughput distributed architectures, and clean, high-performance web systems.',
    portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    portraitAlt: 'Portrait of Emanuel Cruzat',
    resumeUrl: 'https://docs.google.com/document/d/placeholder-resume',
    socials: {
      linkedin: 'https://linkedin.com/in/placeholder-emanuelcruzat',
      github: 'https://github.com/placeholder-emanuelcruzat',
      instagram: 'https://instagram.com/placeholder-emanuelcruzat',
      email: 'mailto:emanuel.cruzat@example.com',
    },
  },

  tools: [
    { name: 'Python', category: 'data' },
    { name: 'SQL', category: 'data' },
    { name: 'PySpark', category: 'data' },
    { name: 'PostgreSQL', category: 'data' },
    { name: 'React', category: 'dev' },
    { name: 'TypeScript', category: 'dev' },
    { name: 'Vite', category: 'dev' },
    { name: 'Docker', category: 'dev' },
    { name: 'Git', category: 'dev' },
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
  ],
};

export default portfolioContent;

