import React from 'react';
import { portfolioContent } from '../../content';
import styles from './ToolMarquee.module.css';

export const ToolMarquee: React.FC = () => {
  const { tools } = portfolioContent;
  // Duplicate array to achieve seamless infinite looping
  const marqueeItems = [...tools, ...tools];

  return (
    <section className={styles.marqueeWrapper} aria-label="Tools and Technologies">
      <div className={styles.marqueeTrack}>
        {marqueeItems.map((tool, idx) => (
          <div key={`${tool.name}-${idx}`} className={styles.toolBadge}>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolMarquee;
