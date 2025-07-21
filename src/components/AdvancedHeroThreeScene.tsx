import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AdvancedHeroThreeScene: React.FC = () => {
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

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const lights = [
      { color: 0x00d4ff, position: [20, 20, 20], intensity: 2 },
      { color: 0xff006e, position: [-20, -20, 10], intensity: 1.8 },
      { color: 0x8338ec, position: [0, 25, -15], intensity: 1.6 },
      { color: 0x06ffa5, position: [-15, 0, 25], intensity: 1.4 },
    ];

    const pointLights: THREE.PointLight[] = [];
    lights.forEach(({ color, position, intensity }) => {
      const light = new THREE.PointLight(color, intensity, 100);
      light.position.set(position[0], position[1], position[2]);
      pointLights.push(light);
      scene.add(light);
    });

    // Create central complex geometry - DNA-like double helix
    const helixGroup = new THREE.Group();
    
    // Main helix structure
    const helixPoints1: THREE.Vector3[] = [];
    const helixPoints2: THREE.Vector3[] = [];
    const segmentCount = 200;
    
    for (let i = 0; i < segmentCount; i++) {
      const angle = (i / segmentCount) * Math.PI * 12;
      const y = (i / segmentCount) * 20 - 10;
      const radius = 3;
      
      helixPoints1.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      ));
      
      helixPoints2.push(new THREE.Vector3(
        Math.cos(angle + Math.PI) * radius,
        y,
        Math.sin(angle + Math.PI) * radius
      ));
    }

    const helixGeometry1 = new THREE.BufferGeometry().setFromPoints(helixPoints1);
    const helixGeometry2 = new THREE.BufferGeometry().setFromPoints(helixPoints2);
    
    const helixMaterial1 = new THREE.LineBasicMaterial({ 
      color: 0x00d4ff, 
      transparent: true, 
      opacity: 0.8 
    });
    const helixMaterial2 = new THREE.LineBasicMaterial({ 
      color: 0xff006e, 
      transparent: true, 
      opacity: 0.8 
    });

    const helix1 = new THREE.Line(helixGeometry1, helixMaterial1);
    const helix2 = new THREE.Line(helixGeometry2, helixMaterial2);
    
    helixGroup.add(helix1);
    helixGroup.add(helix2);

    // Add connecting bridges between helixes
    for (let i = 0; i < helixPoints1.length; i += 10) {
      const bridgeGeometry = new THREE.BufferGeometry().setFromPoints([
        helixPoints1[i],
        helixPoints2[i]
      ]);
      const bridgeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x8338ec, 
        transparent: true, 
        opacity: 0.6 
      });
      const bridge = new THREE.Line(bridgeGeometry, bridgeMaterial);
      helixGroup.add(bridge);
    }

    scene.add(helixGroup);

    // Create orbiting energy rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const ringGeometry = new THREE.TorusGeometry(5 + i * 1.5, 0.1, 16, 100);
      const colors = [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5, 0xffbe0b, 0xfb5607];
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.6,
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = (i * Math.PI) / 12;
      ring.rotation.y = (i * Math.PI) / 8;
      ring.rotation.z = (i * Math.PI) / 16;
      rings.push(ring);
      scene.add(ring);
    }

    // Create floating data nodes
    const dataNodes: THREE.Mesh[] = [];
    const nodeCount = 40;

    for (let i = 0; i < nodeCount; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5][Math.floor(Math.random() * 4)],
        transparent: true,
        opacity: 0.8,
      });
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      
      // Position nodes in orbital patterns
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      node.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      (node as any).orbitalSpeed = 0.001 + Math.random() * 0.002;
      (node as any).orbitalRadius = radius;
      (node as any).orbitalAngle = theta;
      (node as any).orbitalPhi = phi;
      
      dataNodes.push(node);
      scene.add(node);
    }

    // Create particle field
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 100;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const color = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.8, 0.7);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 20;

    // Enhanced mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Euler();
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
      
      targetRotation.x = mouse.y * 0.2;
      targetRotation.y = mouse.x * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Animate helix group
      helixGroup.rotation.y = time * 0.2;
      helixGroup.rotation.x = Math.sin(time * 0.3) * 0.1;

      // Animate rings
      rings.forEach((ring, index) => {
        ring.rotation.x += 0.005 * (index + 1);
        ring.rotation.y += 0.003 * (index + 1);
        ring.rotation.z += 0.002 * (index + 1);
        
        // Pulsing effect
        const scale = 1 + Math.sin(time * 2 + index) * 0.1;
        ring.scale.setScalar(scale);
      });

      // Animate data nodes with orbital motion
      dataNodes.forEach((node, index) => {
        const orbitalSpeed = (node as any).orbitalSpeed;
        const radius = (node as any).orbitalRadius;
        
        (node as any).orbitalAngle += orbitalSpeed;
        (node as any).orbitalPhi += orbitalSpeed * 0.5;
        
        const angle = (node as any).orbitalAngle;
        const phi = (node as any).orbitalPhi;
        
        node.position.x = radius * Math.sin(phi) * Math.cos(angle);
        node.position.y = radius * Math.sin(phi) * Math.sin(angle);
        node.position.z = radius * Math.cos(phi);
        
        // Pulsing glow effect
        const material = node.material as THREE.MeshBasicMaterial;
        material.opacity = 0.6 + Math.sin(time * 3 + index) * 0.3;
      });

      // Animate particles
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(time + i * 0.01) * 0.02;
        positions[i * 3] += Math.cos(time * 0.7 + i * 0.01) * 0.015;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Smooth camera rotation based on mouse
      camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.05;
      camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.05;

      // Animate lights
      pointLights.forEach((light, index) => {
        const lightTime = time + index * Math.PI * 0.5;
        light.color.setHSL((lightTime * 0.1) % 1, 0.8, 0.7);
        light.intensity = 1.5 + Math.sin(lightTime * 2) * 0.5;
        
        // Move lights in figure-8 patterns
        const radius = 15;
        light.position.x = Math.cos(lightTime * 0.7) * radius;
        light.position.y = Math.sin(lightTime * 0.5) * radius * 0.8;
        light.position.z = Math.sin(lightTime * 0.3) * radius * 0.6;
      });

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
      
      // Dispose resources
      helixGeometry1.dispose();
      helixGeometry2.dispose();
      helixMaterial1.dispose();
      helixMaterial2.dispose();
      
      rings.forEach(ring => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      
      dataNodes.forEach(node => {
        node.geometry.dispose();
        (node.material as THREE.Material).dispose();
      });
      
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-60" />;
};

export default AdvancedHeroThreeScene;
