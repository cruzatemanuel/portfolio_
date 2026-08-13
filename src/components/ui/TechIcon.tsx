import React from 'react';
import {
  SiPython,
  SiPostgresql,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiMetabase,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiGooglegemini,
  SiAnthropic,
  SiLangchain,
} from 'react-icons/si';
import { TbBrandOpenai, TbBrandAdobePhotoshop } from 'react-icons/tb';
import { Database, Type, Code2, BarChart2, Layers } from 'lucide-react';

interface TechIconProps {
  name: string;
  iconName?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  iconName,
  size = 14,
  className,
  style,
}) => {
  const key = `${iconName || ''} ${name}`.toLowerCase().trim();

  if (key.includes('python') && !key.includes('pyspark')) {
    return <SiPython size={size} className={className} style={{ color: '#3776AB', flexShrink: 0, ...style }} />;
  }

  if (key.includes('postgresql') || key.includes('postgres')) {
    return <SiPostgresql size={size} className={className} style={{ color: '#4169E1', flexShrink: 0, ...style }} />;
  }

  if (key.includes('pyspark') || key.includes('apachespark') || key.includes('apache spark') || key.includes('spark')) {
    return <SiApachespark size={size} className={className} style={{ color: '#E25A1C', flexShrink: 0, ...style }} />;
  }

  if (key.includes('sql') && !key.includes('postgresql') && !key.includes('mysql')) {
    return <Database size={size} className={className} style={{ color: '#00758F', flexShrink: 0, ...style }} />;
  }

  if (key.includes('pandas') && key.includes('numpy')) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', flexShrink: 0, ...style }}>
        <SiPandas size={size} style={{ color: '#150458' }} />
        <SiNumpy size={size} style={{ color: '#013243' }} />
      </span>
    );
  }

  if (key.includes('pandas')) {
    return <SiPandas size={size} className={className} style={{ color: '#150458', flexShrink: 0, ...style }} />;
  }

  if (key.includes('numpy')) {
    return <SiNumpy size={size} className={className} style={{ color: '#013243', flexShrink: 0, ...style }} />;
  }

  if (key.includes('metabase')) {
    return <SiMetabase size={size} className={className} style={{ color: '#509EE3', flexShrink: 0, ...style }} />;
  }

  if (key.includes('dbt')) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#FF694B', flexShrink: 0, ...style }}>
        <Layers size={size} className={className} />
      </span>
    );
  }

  if (key.includes('figma')) {
    return <SiFigma size={size} className={className} style={{ color: '#F24E1E', flexShrink: 0, ...style }} />;
  }

  if (key.includes('photoshop')) {
    return <TbBrandAdobePhotoshop size={size} className={className} style={{ color: '#31A8FF', flexShrink: 0, ...style }} />;
  }

  if (key.includes('typography')) {
    return <Type size={size} className={className} style={{ color: '#A0A0A0', flexShrink: 0, ...style }} />;
  }

  if (key.includes('git') && key.includes('github')) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', flexShrink: 0, ...style }}>
        <SiGit size={size} style={{ color: '#F05032' }} />
        <SiGithub size={size} style={{ color: 'var(--color-text-primary)' }} />
      </span>
    );
  }

  if (key.includes('github')) {
    return <SiGithub size={size} className={className} style={{ color: 'var(--color-text-primary)', flexShrink: 0, ...style }} />;
  }

  if (key.includes('git')) {
    return <SiGit size={size} className={className} style={{ color: '#F05032', flexShrink: 0, ...style }} />;
  }

  if (key.includes('docker')) {
    return <SiDocker size={size} className={className} style={{ color: '#2496ED', flexShrink: 0, ...style }} />;
  }

  if (key.includes('gemini')) {
    return <SiGooglegemini size={size} className={className} style={{ color: '#8E75FF', flexShrink: 0, ...style }} />;
  }

  if (key.includes('claude')) {
    return <SiAnthropic size={size} className={className} style={{ color: '#D97757', flexShrink: 0, ...style }} />;
  }

  if (key.includes('openai') && key.includes('langchain')) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', flexShrink: 0, ...style }}>
        <TbBrandOpenai size={size} style={{ color: '#10A37F' }} />
        <SiLangchain size={size} style={{ color: '#1C3C3C' }} />
      </span>
    );
  }

  if (key.includes('openai')) {
    return <TbBrandOpenai size={size} className={className} style={{ color: '#10A37F', flexShrink: 0, ...style }} />;
  }

  if (key.includes('langchain')) {
    return <SiLangchain size={size} className={className} style={{ color: '#1C3C3C', flexShrink: 0, ...style }} />;
  }

  if (key.includes('seaborn') || key.includes('matplotlib')) {
    return <BarChart2 size={size} className={className} style={{ color: '#FF7F0E', flexShrink: 0, ...style }} />;
  }

  // Default fallback icon
  return <Code2 size={size} className={className} style={{ flexShrink: 0, ...style }} />;
};

export default TechIcon;
