import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ProjectRecord } from '../../types/content';
import styles from './ChromaGrid.module.css';

export interface ChromaGridProps {
  items?: ProjectRecord[];
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items = [],
  radius = 350,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
  className = '',
  style = {},
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);
  const setX = useRef<((v: number) => void) | null>(null);
  const setY = useRef<((v: number) => void) | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 1, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: fadeOut, overwrite: true });
    }
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.chromaGridContainer} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        '--spotlight-radius': `${radius}px`,
        ...style,
      } as React.CSSProperties}
    >
      <div
        ref={fadeRef}
        className={styles.spotlightOverlay}
        aria-hidden="true"
      />

      <div className={styles.grid}>
        {items.map((project) => (
          <a
            key={project.id}
            href={project.destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.chromaCard}
            style={{
              '--card-accent': project.accentColor,
            } as React.CSSProperties}
          >
            <div className={styles.cardImageWrapper}>
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className={styles.cardImage}
                loading="lazy"
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.categoryTag}>{project.category}</span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              {project.description && (
                <p className={styles.cardDescription}>{project.description}</p>
              )}
              <div className={styles.cardFooter}>
                <span>{project.year}</span>
                <span>View project →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChromaGrid;
