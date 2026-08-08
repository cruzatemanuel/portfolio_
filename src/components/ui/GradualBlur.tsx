import React, { useMemo } from 'react';
import styles from './GradualBlur.module.css';

export interface GradualBlurProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  opacity?: number;
  target?: 'parent' | 'page';
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CURVE_FUNCTIONS = {
  linear: (p: number) => p,
  bezier: (p: number) => p * p * (3 - 2 * p),
  'ease-in': (p: number) => p * p,
  'ease-out': (p: number) => 1 - Math.pow(1 - p, 2),
  'ease-in-out': (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2),
};

const getGradientDirection = (position: string) => {
  switch (position) {
    case 'top':
      return 'to top';
    case 'bottom':
      return 'to bottom';
    case 'left':
      return 'to left';
    case 'right':
      return 'to right';
    default:
      return 'to bottom';
  }
};

export const GradualBlur: React.FC<GradualBlurProps> = ({
  position = 'bottom',
  strength = 2,
  height = '6rem',
  width,
  divCount = 5,
  exponential = false,
  curve = 'bezier',
  opacity = 1,
  target = 'parent',
  zIndex = 100,
  className = '',
  style = {},
}) => {
  const isVertical = position === 'top' || position === 'bottom';
  const calculatedWidth = width || (isVertical ? '100%' : height);
  const calculatedHeight = isVertical ? height : width || '100%';

  const layers = useMemo(() => {
    const curveFn = CURVE_FUNCTIONS[curve] || CURVE_FUNCTIONS.linear;
    const direction = getGradientDirection(position);

    return Array.from({ length: divCount }, (_, i) => {
      const step = (i + 1) / divCount;
      const progress = curveFn(step);
      const blurPx = exponential
        ? Math.pow(2, progress * strength * 2) - 1
        : progress * strength * 8;

      const maskGradient = `linear-gradient(${direction}, rgba(0,0,0,${opacity}) ${step * 60}%, rgba(0,0,0,0) 100%)`;

      return {
        id: i,
        backdropFilter: `blur(${blurPx.toFixed(2)}px)`,
        WebkitBackdropFilter: `blur(${blurPx.toFixed(2)}px)`,
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
      };
    });
  }, [divCount, curve, position, strength, exponential, opacity]);

  const containerStyle: React.CSSProperties = {
    position: target === 'page' ? 'fixed' : 'absolute',
    ...(position === 'top' && { top: 0, left: 0, right: 0 }),
    ...(position === 'bottom' && { bottom: 0, left: 0, right: 0 }),
    ...(position === 'left' && { top: 0, bottom: 0, left: 0 }),
    ...(position === 'right' && { top: 0, bottom: 0, right: 0 }),
    width: calculatedWidth,
    height: calculatedHeight,
    zIndex: target === 'page' ? zIndex + 100 : zIndex,
    ...style,
  };

  return (
    <div className={`${styles.gradualBlurContainer} ${className}`} style={containerStyle}>
      {layers.map((layer) => (
        <div
          key={layer.id}
          className={styles.gradualBlurLayer}
          style={{
            backdropFilter: layer.backdropFilter,
            WebkitBackdropFilter: layer.WebkitBackdropFilter,
            maskImage: layer.maskImage,
            WebkitMaskImage: layer.WebkitMaskImage,
          }}
        />
      ))}
    </div>
  );
};

export default GradualBlur;
