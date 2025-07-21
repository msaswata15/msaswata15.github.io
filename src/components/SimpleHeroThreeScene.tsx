import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SimpleHeroThreeScene: React.FC = () => {
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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff006e, 1, 100);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x8338ec, 1, 100);
    pointLight3.position.set(0, 15, -10);
    scene.add(pointLight3);

    // Create central wireframe sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(2, 1);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create orbiting rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const ringGeometry = new THREE.RingGeometry(3 + i * 0.8, 3.2 + i * 0.8, 64);
      const colors = [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5];
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2 + (i * Math.PI / 8);
      ring.rotation.y = i * Math.PI / 6;
      rings.push(ring);
      scene.add(ring);
    }

    // Create floating geometric shapes
    const geometries = [
      new THREE.TetrahedronGeometry(0.3),
      new THREE.OctahedronGeometry(0.3),
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
    ];

    const floatingShapes: THREE.Mesh[] = [];
    const shapeCount = 12;
    const colors = [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5];

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.7,
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );
      
      // Add random rotation speed
      (shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };
      
      floatingShapes.push(shape);
      scene.add(shape);
    }

    // Create particle system
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Rotate central sphere
      sphere.rotation.x = time * 0.3;
      sphere.rotation.y = time * 0.2;

      // Rotate rings
      rings.forEach((ring, index) => {
        ring.rotation.z = time * (0.3 + index * 0.1);
      });

      // Animate floating shapes
      floatingShapes.forEach((shape) => {
        const speed = (shape as any).rotationSpeed;
        shape.rotation.x += speed.x;
        shape.rotation.y += speed.y;
        shape.rotation.z += speed.z;
      });

      // Animate particles
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Animate light colors
      pointLight1.color.setHSL((time * 0.1) % 1, 0.8, 0.6);
      pointLight2.color.setHSL((time * 0.1 + 0.3) % 1, 0.8, 0.6);
      pointLight3.color.setHSL((time * 0.1 + 0.6) % 1, 0.8, 0.6);

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      rings.forEach(ring => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      floatingShapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-50" />;
};

export default SimpleHeroThreeScene;
