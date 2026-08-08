import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl';
import styles from './SpecularButton.module.css';

export interface SpecularButtonProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const PAD = 20;

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#10b981',
  tintOpacity = 0.9,
  blur = 12,
  textColor = '#ffffff',
  lineColor = '#ffffff',
  baseColor = '#10b981',
  intensity = 1.2,
  shineSize = 15,
  shineFade = 35,
  thickness = 1.5,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = true,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  style,
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const propsRef = useRef({
    radius,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate,
  });

  propsRef.current = {
    radius,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate,
  };

  useEffect(() => {
    const btn = btnRef.current;
    const container = containerRef.current;
    if (!btn || !container) return;

    let renderer: Renderer | null = null;
    let animId: number;

    try {
      renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio, 2) });
      const gl = renderer.gl;
      const canvas = gl.canvas as HTMLCanvasElement;
      canvas.style.position = 'absolute';
      canvas.style.inset = '0';
      canvas.style.pointerEvents = 'none';
      container.appendChild(canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uCenter: { value: [0, 0] },
          uHalfSize: { value: [0, 0] },
          uRadius: { value: 0 },
          uAngle: { value: 0 },
          uPx: { value: 1 },
          uLineColor: { value: new Color(lineColor) },
          uBaseColor: { value: new Color(baseColor) },
          uIntensity: { value: intensity },
          uShineSize: { value: (shineSize * Math.PI) / 180 },
          uShineFade: { value: (shineFade * Math.PI) / 180 },
          uThickness: { value: thickness },
          uBaseWidth: { value: 3 },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      let currentAngle = 0;
      let targetAngle = 0;
      let alphaIntensity = 1;
      let mouseX = -9999;
      let mouseY = -9999;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const updateAndRender = (t: number) => {
        if (!btn || !renderer) return;

        const rect = btn.getBoundingClientRect();
        const w = rect.width + PAD * 2;
        const h = rect.height + PAD * 2;
        renderer.setSize(w, h);

        const dpr = renderer.dpr;
        const halfW = (rect.width / 2) * dpr;
        const halfH = (rect.height / 2) * dpr;
        const rPx = Math.min(propsRef.current.radius, rect.width / 2, rect.height / 2) * dpr;

        program.uniforms.uCenter.value = [(w / 2) * dpr, (h / 2) * dpr];
        program.uniforms.uHalfSize.value = [halfW, halfH];
        program.uniforms.uRadius.value = rPx;
        program.uniforms.uPx.value = dpr;

        program.uniforms.uLineColor.value.set(propsRef.current.lineColor);
        program.uniforms.uBaseColor.value.set(propsRef.current.baseColor);

        if (propsRef.current.followMouse) {
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = mouseX - cx;
          const dy = mouseY - cy;
          const dist = Math.hypot(dx, dy);

          if (dist < propsRef.current.proximity) {
            targetAngle = Math.atan2(-dy, dx);
            alphaIntensity = Math.min(1, 1 - dist / propsRef.current.proximity);
          } else {
            alphaIntensity = propsRef.current.autoAnimate ? 1 : 0;
            if (propsRef.current.autoAnimate) {
              targetAngle += propsRef.current.speed * 0.02;
            }
          }
        } else if (propsRef.current.autoAnimate) {
          targetAngle += propsRef.current.speed * 0.02;
          alphaIntensity = 1;
        }

        currentAngle += (targetAngle - currentAngle) * 0.15;
        program.uniforms.uAngle.value = currentAngle;
        program.uniforms.uIntensity.value = propsRef.current.intensity * alphaIntensity;

        renderer.render({ scene: mesh });
        animId = requestAnimationFrame(updateAndRender);
      };

      animId = requestAnimationFrame(updateAndRender);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', handleMouseMove);
        if (canvas && canvas.parentElement) {
          canvas.parentElement.removeChild(canvas);
        }
      };
    } catch (e) {
      console.warn('WebGL SpecularButton fallback activated:', e);
    }
  }, [lineColor, baseColor, intensity, shineSize, shineFade, thickness]);

  const sizeClass =
    size === 'sm' ? styles.sizeSm : size === 'lg' ? styles.sizeLg : styles.sizeMd;

  const btnStyle: React.CSSProperties = {
    borderRadius: `${radius}px`,
    backgroundColor: tintOpacity > 0 ? tint : 'var(--color-accent)',
    color: textColor,
    backdropFilter: blur > 0 ? `blur(${blur}px)` : 'none',
    WebkitBackdropFilter: blur > 0 ? `blur(${blur}px)` : 'none',
    ...style,
  };

  return (
    <button
      ref={btnRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.specularButton} ${sizeClass} ${className}`}
      style={btnStyle}
    >
      <div ref={containerRef} className={styles.canvasContainer} />
      <span className={styles.labelContent}>{children}</span>
    </button>
  );
};

export default SpecularButton;
