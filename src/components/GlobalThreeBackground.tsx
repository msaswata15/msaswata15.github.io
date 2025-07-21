import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GlobalThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create subtle geometric pattern with dark theme
    const geometry = new THREE.PlaneGeometry(50, 50, 20, 20);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 4;
    plane.position.z = -20;
    scene.add(plane);

    // Create floating dots with dark theme colors
    const dotGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.2,
    });

    const dots: THREE.Mesh[] = [];
    for (let i = 0; i < 50; i++) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial.clone());
      dot.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      );
      
      // Add random properties for animation
      (dot as any).velocity = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.005,
      };
      
      dots.push(dot);
      scene.add(dot);
    }

    camera.position.z = 30;

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.0005;

      // Gentle wave animation on the grid
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 2;
      }
      geometry.attributes.position.needsUpdate = true;

      // Animate dots
      dots.forEach((dot) => {
        dot.position.x += (dot as any).velocity.x;
        dot.position.y += (dot as any).velocity.y;
        dot.position.z += (dot as any).velocity.z;

        // Wrap around screen bounds
        if (Math.abs(dot.position.x) > 50) (dot as any).velocity.x *= -1;
        if (Math.abs(dot.position.y) > 50) (dot as any).velocity.y *= -1;
        if (Math.abs(dot.position.z) > 25) (dot as any).velocity.z *= -1;
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      geometry.dispose();
      material.dispose();
      dotGeometry.dispose();
      dots.forEach(dot => {
        (dot.material as THREE.Material).dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none -z-10" />;
};

export default GlobalThreeBackground;
