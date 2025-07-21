import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroThreeScene: React.FC = () => {
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

    const pointLight1 = new THREE.PointLight(0x3b82f6, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1, 100);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    // Create a central wireframe sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: theme === 'light' ? 0x3b82f6 : 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create orbiting rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.RingGeometry(3 + i * 0.5, 3.2 + i * 0.5, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: [0x3b82f6, 0x8b5cf6, 0xec4899][i],
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2 + (i * Math.PI / 6);
      rings.push(ring);
      scene.add(ring);
    }

    // Create floating code symbols
    const createTextSprite = (text: string, color: number) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return null;

      canvas.width = 128;
      canvas.height = 128;
      
      context.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
      context.font = '48px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(1, 1, 1);
      
      return sprite;
    };

    const codeSymbols = ['{}', '<>', '()', '[]', '/>', '&&'];
    const sprites: THREE.Sprite[] = [];

    codeSymbols.forEach((symbol, index) => {
      const sprite = createTextSprite(symbol, 0x60a5fa);
      if (sprite) {
        const angle = (index / codeSymbols.length) * Math.PI * 2;
        sprite.position.set(
          Math.cos(angle) * 6,
          Math.sin(angle) * 3,
          Math.sin(angle * 2) * 2
        );
        sprites.push(sprite);
        scene.add(sprite);
      }
    });

    camera.position.z = 12;

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
        ring.rotation.z = time * (0.5 + index * 0.1);
      });

      // Animate sprites
      sprites.forEach((sprite, index) => {
        const angle = (index / sprites.length) * Math.PI * 2 + time * 0.5;
        sprite.position.x = Math.cos(angle) * 6;
        sprite.position.y = Math.sin(angle) * 3;
        sprite.position.z = Math.sin(angle * 2) * 2;
      });

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Update light colors based on time
      pointLight1.color.setHSL((time * 0.1) % 1, 0.7, 0.5);
      pointLight2.color.setHSL((time * 0.1 + 0.3) % 1, 0.7, 0.5);

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
      
      // Dispose of geometries and materials
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      rings.forEach(ring => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      sprites.forEach(sprite => {
        sprite.material.dispose();
      });
      
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-30" />;
};

export default HeroThreeScene;
