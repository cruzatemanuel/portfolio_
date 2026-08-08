import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styles from './PixelBlast.module.css';

export interface PixelBlastProps {
  variant?: 'circle' | 'square' | 'triangle' | 'diamond';
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  enableRipples?: boolean;
  speed?: number;
  transparent?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const PixelBlast: React.FC<PixelBlastProps> = ({
  pixelSize = 6,
  color = '#0071e3',
  speed = 0.6,
  transparent = true,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene: THREE.Scene;
    let camera: THREE.OrthographicCamera;
    let renderer: THREE.WebGLRenderer;
    let material: THREE.ShaderMaterial;
    let mesh: THREE.Mesh;
    let animId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      renderer = new THREE.WebGLRenderer({ alpha: transparent, antialias: false });
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 400;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const canvas = renderer.domElement;
      canvas.className = styles.pixelCanvas;
      container.appendChild(canvas);

      const colorObj = new THREE.Color(color);

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColor;
        uniform float uPixelSize;
        varying vec2 vUv;

        // Bayer Matrix Dithering pattern calculation
        float bayer4(vec2 p) {
          mat4 bayer = mat4(
             0.0, 12.0,  3.0, 15.0,
             8.0,  4.0, 11.0,  7.0,
             2.0, 14.0,  1.0, 13.0,
            10.0,  6.0,  9.0,  5.0
          );
          int x = int(mod(p.x, 4.0));
          int y = int(mod(p.y, 4.0));
          return bayer[x][y] / 16.0;
        }

        void main() {
          vec2 grid = floor(gl_FragCoord.xy / uPixelSize);
          float dither = bayer4(grid);

          float wave = sin(grid.x * 0.08 + uTime * 2.0) * cos(grid.y * 0.08 + uTime * 1.5);
          float alpha = step(dither, wave * 0.5 + 0.5) * 0.35;

          gl_FragColor = vec4(uColor, alpha);
        }
      `;

      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(width, height) },
          uColor: { value: new THREE.Vector3(colorObj.r, colorObj.g, colorObj.b) },
          uPixelSize: { value: pixelSize },
        },
        transparent: true,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || 400;
        renderer.setSize(w, h);
        material.uniforms.uResolution.value.set(w, h);
      };

      window.addEventListener('resize', handleResize);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        material.uniforms.uTime.value = clock.getElapsedTime() * speed;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', handleResize);
        if (canvas && canvas.parentElement) {
          canvas.parentElement.removeChild(canvas);
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    } catch (e) {
      console.warn('PixelBlast Three.js renderer fallback:', e);
    }
  }, [pixelSize, color, speed, transparent]);

  return (
    <div
      ref={containerRef}
      className={`${styles.pixelBlastContainer} ${className}`}
      style={style}
    />
  );
};

export default PixelBlast;
