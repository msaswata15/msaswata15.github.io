import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const OptimizedThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, // Disable for performance
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    mountRef.current.appendChild(renderer.domElement);

    // Create simple particle system
    const particleCount = 200; // Reduced from previous implementations
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;
      
      // Colors - professional palette
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        colors[i3] = 0.0; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1.0; // Cyan
      } else if (colorChoice < 0.6) {
        colors[i3] = 0.4; colors[i3 + 1] = 0.7; colors[i3 + 2] = 1.0; // Blue
      } else {
        colors[i3] = 0.6; colors[i3 + 1] = 0.3; colors[i3 + 2] = 1.0; // Purple
      }
      
      // Velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Simple point material
    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Add simple connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    // Create fewer connection lines for performance
    for (let i = 0; i < Math.min(50, particleCount); i++) {
      const i3 = i * 3;
      const nextI3 = ((i + 1) % particleCount) * 3;
      
      linePositions.push(
        positions[i3], positions[i3 + 1], positions[i3 + 2],
        positions[nextI3], positions[nextI3 + 1], positions[nextI3 + 2]
      );
      
      // Line colors
      lineColors.push(0.2, 0.6, 1.0, 0.2, 0.6, 1.0);
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3
    });

    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSystem);

    // Position camera
    camera.position.z = 50;

    // Animation variables
    let animationId: number;
    const clock = new THREE.Clock();

    // Optimized animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Gentle rotation
      particleSystem.rotation.y = elapsedTime * 0.1;
      lineSystem.rotation.y = elapsedTime * 0.05;
      
      // Update particle positions
      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Boundary check
        if (Math.abs(positions[i3]) > 50) velocities[i3] *= -1;
        if (Math.abs(positions[i3 + 1]) > 50) velocities[i3 + 1] *= -1;
        if (Math.abs(positions[i3 + 2]) > 50) velocities[i3 + 2] *= -1;
      }
      
      particleSystem.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
      style={{ background: 'transparent' }}
    />
  );
};

export default OptimizedThreeBackground;
