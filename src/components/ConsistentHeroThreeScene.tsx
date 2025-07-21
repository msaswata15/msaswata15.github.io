import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ConsistentHeroThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Professional Network Structure (similar to other sections)
    const networkNodes: THREE.Mesh[] = [];
    const networkConnections: THREE.Line[] = [];
    const nodeCount = 30;
    
    for (let i = 0; i < nodeCount; i++) {
      const geometry = new THREE.SphereGeometry(0.12 + Math.random() * 0.08, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.55 + Math.random() * 0.25, 0.8, 0.6),
        transparent: true,
        opacity: 0.8,
        emissive: new THREE.Color().setHSL(0.55 + Math.random() * 0.25, 0.4, 0.2)
      });
      
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 40
      );
      
      (node as any).pulseSpeed = 1 + Math.random() * 1.5;
      (node as any).originalScale = node.scale.x;
      
      networkNodes.push(node);
      scene.add(node);
      
      // Create intelligent connections
      if (i > 0) {
        for (let j = 0; j < Math.min(3, i); j++) {
          const targetIndex = Math.floor(Math.random() * i);
          const targetNode = networkNodes[targetIndex];
          const distance = node.position.distanceTo(targetNode.position);
          
          if (distance < 12) {
            const points = [node.position, targetNode.position];
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineMaterial = new THREE.LineBasicMaterial({
              color: 0x4A90E2,
              transparent: true,
              opacity: 0.3
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            networkConnections.push(line);
            scene.add(line);
          }
        }
      }
    }

    // Professional Skills Crystals
    const skillsCrystals: THREE.Mesh[] = [];
    const crystalShapes = ['octahedron', 'icosahedron', 'dodecahedron'];
    const crystalColors = [0x61DAFB, 0x3178C6, 0x4CAF50, 0xF7931E, 0xFF6B6B, 0x9B59B6];
    
    for (let i = 0; i < 18; i++) {
      let geometry: THREE.BufferGeometry;
      const shapeType = crystalShapes[i % crystalShapes.length];
      
      switch (shapeType) {
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(0.4);
          break;
        case 'icosahedron':
          geometry = new THREE.IcosahedronGeometry(0.3);
          break;
        default:
          geometry = new THREE.DodecahedronGeometry(0.35);
      }
      
      const material = new THREE.MeshPhongMaterial({
        color: crystalColors[i % crystalColors.length],
        transparent: true,
        opacity: 0.7,
        emissive: new THREE.Color(crystalColors[i % crystalColors.length]).multiplyScalar(0.1),
        shininess: 100
      });
      
      const crystal = new THREE.Mesh(geometry, material);
      crystal.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 35
      );
      
      (crystal as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: 0.01 + Math.random() * 0.02,
        z: (Math.random() - 0.5) * 0.015
      };
      
      (crystal as any).floatAmplitude = 0.5 + Math.random() * 1;
      (crystal as any).floatSpeed = 0.8 + Math.random() * 1.2;
      (crystal as any).baseY = crystal.position.y;
      
      skillsCrystals.push(crystal);
      scene.add(crystal);
    }

    // Data Flow Particles (Professional Movement)
    const dataParticles: THREE.Points[] = [];
    for (let i = 0; i < 8; i++) {
      const particleCount = 80;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      for (let j = 0; j < particleCount; j++) {
        // Create flowing patterns
        const angle = (j / particleCount) * Math.PI * 4;
        const radius = 5 + Math.sin(angle * 0.5) * 3;
        positions[j * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 20;
        positions[j * 3 + 1] = Math.sin(angle * 0.3) * 2 + (Math.random() - 0.5) * 15;
        positions[j * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 30;
        
        const color = new THREE.Color().setHSL(0.55 + Math.random() * 0.25, 0.8, 0.7);
        colors[j * 3] = color.r;
        colors[j * 3 + 1] = color.g;
        colors[j * 3 + 2] = color.b;
      }
      
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const material = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      const particleSystem = new THREE.Points(geometry, material);
      dataParticles.push(particleSystem);
      scene.add(particleSystem);
    }

    // Innovation Rings (Professional Branding)
    const innovationRings: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.TorusGeometry(2 + i * 0.5, 0.1, 16, 32);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + i * 0.05, 0.7, 0.5),
        transparent: true,
        opacity: 0.4,
        emissive: new THREE.Color().setHSL(0.6 + i * 0.05, 0.3, 0.2)
      });
      
      const ring = new THREE.Mesh(geometry, material);
      ring.position.set(0, 0, -10 - i * 2);
      ring.rotation.x = Math.PI / 2;
      
      (ring as any).rotationSpeed = 0.005 + i * 0.002;
      
      innovationRings.push(ring);
      scene.add(ring);
    }

    // Professional Code Blocks
    const codeBlocks: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.BoxGeometry(
        0.6 + Math.random() * 0.4,
        0.3 + Math.random() * 0.2,
        0.1
      );
      
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.12 + Math.random() * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.6,
        emissive: new THREE.Color().setHSL(0.12 + Math.random() * 0.1, 0.4, 0.2)
      });
      
      const block = new THREE.Mesh(geometry, material);
      block.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 30
      );
      
      block.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      (block as any).velocity = {
        rotation: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.008
        }
      };
      
      codeBlocks.push(block);
      scene.add(block);
    }

    // Enhanced Professional Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x4A90E2, 0.8);
    directionalLight1.position.set(10, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x00AA88, 0.6);
    directionalLight2.position.set(-8, -5, -8);
    scene.add(directionalLight2);

    const pointLight1 = new THREE.PointLight(0x61DAFB, 1, 25);
    pointLight1.position.set(8, 5, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9B59B6, 0.8, 20);
    pointLight2.position.set(-6, -4, 10);
    scene.add(pointLight2);

    const spotLight = new THREE.SpotLight(0x4A90E2, 0.5);
    spotLight.position.set(0, 15, 0);
    spotLight.target.position.set(0, 0, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.3;
    scene.add(spotLight);
    scene.add(spotLight.target);

    // Camera position for hero section
    camera.position.z = 18;
    camera.position.y = 2;
    
    let time = 0;

    // Animation loop with professional movements
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Animate network nodes with professional pulsing
      networkNodes.forEach((node, index) => {
        const pulseSpeed = (node as any).pulseSpeed;
        const scale = 1 + Math.sin(time * pulseSpeed + index) * 0.2;
        node.scale.setScalar(scale);
        
        // Subtle rotation
        node.rotation.y = time * 0.2 + index * 0.3;
      });

      // Animate skills crystals with professional movement
      skillsCrystals.forEach((crystal, index) => {
        const speed = (crystal as any).rotationSpeed;
        crystal.rotation.x += speed.x;
        crystal.rotation.y += speed.y;
        crystal.rotation.z += speed.z;
        
        // Professional floating motion
        const floatData = (crystal as any);
        crystal.position.y = floatData.baseY + 
          Math.sin(time * floatData.floatSpeed + index) * floatData.floatAmplitude;
      });

      // Animate data particles with flowing motion
      dataParticles.forEach((system, index) => {
        system.rotation.y = time * 0.1 + index * 0.2;
        system.rotation.z = Math.sin(time * 0.05 + index) * 0.1;
        system.position.y = Math.sin(time * 0.2 + index) * 1.5;
      });

      // Animate innovation rings
      innovationRings.forEach((ring) => {
        ring.rotation.z += (ring as any).rotationSpeed;
      });

      // Animate code blocks
      codeBlocks.forEach((block) => {
        const vel = (block as any).velocity.rotation;
        block.rotation.x += vel.x;
        block.rotation.y += vel.y;
        block.rotation.z += vel.z;
      });

      // Professional mouse interaction (subtle)
      camera.position.x += (mousePos.x * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (mousePos.y * 1.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      // Dynamic professional lighting
      pointLight1.position.x = Math.sin(time * 0.5) * 10;
      pointLight1.position.z = Math.cos(time * 0.5) * 10;
      pointLight2.position.x = Math.cos(time * 0.3) * 8;
      pointLight2.position.y = Math.sin(time * 0.2) * 5;

      // Subtle spotlight movement
      spotLight.position.x = Math.sin(time * 0.1) * 3;
      spotLight.position.z = Math.cos(time * 0.1) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries, materials, and textures
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ConsistentHeroThreeScene;
