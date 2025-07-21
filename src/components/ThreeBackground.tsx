import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface ThreeBackgroundProps {
  className?: string;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameId = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.OctahedronGeometry(0.3),
      new THREE.DodecahedronGeometry(0.3),
    ];

    const shapes: THREE.Mesh[] = [];
    const shapeCount = 15;

    // Create materials based on theme
    const getMaterial = (color: number) => {
      return theme === 'light'
        ? new THREE.MeshPhongMaterial({ 
            color, 
            transparent: true, 
            opacity: 0.6,
            shininess: 100
          })
        : new THREE.MeshPhongMaterial({ 
            color, 
            transparent: true, 
            opacity: 0.8,
            shininess: 100
          });
    };

    const colors = [
      0x3b82f6, // blue
      0x8b5cf6, // purple
      0xec4899, // pink
      0x06b6d4, // cyan
      0x10b981, // emerald
      0xf59e0b, // amber
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = getMaterial(colors[Math.floor(Math.random() * colors.length)]);
      const shape = new THREE.Mesh(geometry, material);

      // Random position
      shape.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      );

      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Store random properties for animation
      (shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };

      (shape as any).floatSpeed = Math.random() * 0.02 + 0.01;
      (shape as any).floatOffset = Math.random() * Math.PI * 2;

      shapes.push(shape);
      scene.add(shape);
    }

    // Create particle system
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      particleVelocities.push((Math.random() - 0.5) * 0.02);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: theme === 'light' ? 0x3b82f6 : 0x60a5fa,
      size: 2,
      transparent: true,
      opacity: theme === 'light' ? 0.6 : 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      // Animate shapes
      shapes.forEach((shape, index) => {
        const time = Date.now() * 0.001;
        
        // Rotation
        shape.rotation.x += (shape as any).rotationSpeed.x;
        shape.rotation.y += (shape as any).rotationSpeed.y;
        shape.rotation.z += (shape as any).rotationSpeed.z;

        // Floating motion
        shape.position.y += Math.sin(time * (shape as any).floatSpeed + (shape as any).floatOffset) * 0.01;

        // Mouse interaction
        const distance = shape.position.distanceTo(camera.position);
        if (distance < 10) {
          shape.position.x += mouse.x * 0.01;
          shape.position.y += mouse.y * 0.01;
        }
      });

      // Animate particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleVelocities[i];
        
        // Reset particle if it goes too far
        if (positions[i * 3 + 1] > 25) {
          positions[i * 3 + 1] = -25;
          positions[i * 3] = (Math.random() - 0.5) * 50;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Camera gentle movement
      const time = Date.now() * 0.0005;
      camera.position.x = Math.sin(time) * 0.5;
      camera.position.y = Math.cos(time * 0.8) * 0.3;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      shapes.forEach(shape => {
        scene.remove(shape);
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
      
      scene.remove(particles);
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={mountRef} className={`fixed inset-0 pointer-events-none ${className}`} />;
};

export default ThreeBackground;
