import React from 'react';
import { portfolioContent } from '../../content';
import TechIcon from '../ui/TechIcon';
import styles from './ToolMarquee.module.css';

export const ToolMarquee: React.FC = () => {
  const { tools } = portfolioContent;
  // Duplicate array to achieve seamless infinite looping marquee track
  const marqueeItems = [...tools, ...tools];

  return (
    <section className={styles.marqueeWrapper} aria-label="Tech Stack and Tools">
      <div className={styles.marqueeTrack}>
        {marqueeItems.map((tool, idx) => (
          <div key={`${tool.name}-${idx}`} className={styles.toolBadge}>
            <TechIcon name={tool.name} iconName={tool.iconName} size={15} />
            <span className={styles.toolName}>{tool.name}</span>
            <span className={styles.toolCategory}>{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolMarquee;
