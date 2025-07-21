import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const EnhancedHeroThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with enhanced quality
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true, 
      powerPreference: 'high-performance' 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced lighting system with dynamic colors
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.2);
    scene.add(ambientLight);

    // Multiple animated lights for dramatic effect
    const lights = [
      { color: 0x00d4ff, position: [15, 10, 15], intensity: 2 },
      { color: 0xff006e, position: [-15, -10, 10], intensity: 1.8 },
      { color: 0x8338ec, position: [10, -15, -10], intensity: 1.5 },
      { color: 0x06ffa5, position: [-10, 15, -15], intensity: 1.6 },
      { color: 0xffbe0b, position: [0, 0, 20], intensity: 1.4 },
    ];

    const pointLights: THREE.PointLight[] = [];
    lights.forEach(({ color, position, intensity }) => {
      const light = new THREE.PointLight(color, intensity, 50);
      light.position.set(position[0], position[1], position[2]);
      light.castShadow = true;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      pointLights.push(light);
      scene.add(light);
    });

    // Central complex wireframe structure - DNA-like double helix
    const helixGeometry1 = new THREE.TorusKnotGeometry(3, 0.8, 100, 16, 2, 3);
    const helixGeometry2 = new THREE.TorusKnotGeometry(2.5, 0.6, 100, 16, 3, 2);
    
    const helixMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    
    const helixMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xff006e,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    const helix1 = new THREE.Mesh(helixGeometry1, helixMaterial1);
    const helix2 = new THREE.Mesh(helixGeometry2, helixMaterial2);
    helix2.rotation.y = Math.PI / 3;
    
    scene.add(helix1);
    scene.add(helix2);

    // Create multiple orbiting rings with different geometries
    const rings: THREE.Mesh[] = [];
    const ringCount = 8;
    
    for (let i = 0; i < ringCount; i++) {
      const innerRadius = 5 + i * 1.2;
      const outerRadius = innerRadius + 0.3;
      const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 64);
      
      const colors = [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5, 0xffbe0b, 0xfb5607, 0x3a86ff, 0x06d6a0];
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2 + (i * Math.PI / 12);
      ring.rotation.y = i * Math.PI / 8;
      ring.rotation.z = i * Math.PI / 16;
      rings.push(ring);
      scene.add(ring);
    }

    // Create floating geometric constellation
    const geometries = [
      new THREE.TetrahedronGeometry(0.4),
      new THREE.OctahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.4),
      new THREE.DodecahedronGeometry(0.4),
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.ConeGeometry(0.3, 0.8, 8),
      new THREE.CylinderGeometry(0.2, 0.4, 0.8, 8),
    ];

    const floatingShapes: THREE.Mesh[] = [];
    const shapeCount = 30;
    const colors = [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5, 0xffbe0b, 0xfb5607, 0x3a86ff];

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.8,
        shininess: 100,
        emissive: colors[Math.floor(Math.random() * colors.length)],
        emissiveIntensity: 0.1,
      });
      
      const shape = new THREE.Mesh(geometry, material);
      
      // Position shapes in spherical distribution
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      shape.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      shape.castShadow = true;
      shape.receiveShadow = true;
      
      // Add random properties for animation
      (shape as any).originalPosition = shape.position.clone();
      (shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03,
      };
      (shape as any).floatSpeed = Math.random() * 0.02 + 0.01;
      (shape as any).floatRadius = Math.random() * 2 + 1;
      
      floatingShapes.push(shape);
      scene.add(shape);
    }

    // Enhanced particle system with multiple layers
    const createParticleSystem = (count: number, size: number, color: number, range: number) => {
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(count * 3);
      const particleColors = new Float32Array(count * 3);
      const particleSizes = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * range;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * range;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * range;

        const particleColor = new THREE.Color(color);
        particleColors[i * 3] = particleColor.r;
        particleColors[i * 3 + 1] = particleColor.g;
        particleColors[i * 3 + 2] = particleColor.b;
        
        particleSizes[i] = Math.random() * size + size * 0.5;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

      const particleMaterial = new THREE.PointsMaterial({
        size: size,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      return new THREE.Points(particleGeometry, particleMaterial);
    };

    // Create multiple particle layers
    const particleSystems = [
      createParticleSystem(2000, 0.05, 0x00d4ff, 80),
      createParticleSystem(1500, 0.08, 0xff006e, 60),
      createParticleSystem(1000, 0.12, 0x8338ec, 40),
    ];

    particleSystems.forEach(system => scene.add(system));

    // Create energy field lines connecting shapes
    const createEnergyLines = () => {
      const lineGeometry = new THREE.BufferGeometry();
      const positions = [];
      const lineColors = [];
      const colorPalette = [0x00d4ff, 0xff006e, 0x8338ec, 0x06ffa5, 0xffbe0b, 0xfb5607, 0x3a86ff];
      
      for (let i = 0; i < floatingShapes.length - 1; i++) {
        if (Math.random() > 0.7) { // Only connect some shapes
          const shape1 = floatingShapes[i];
          const shape2 = floatingShapes[i + 1];
          
          positions.push(shape1.position.x, shape1.position.y, shape1.position.z);
          positions.push(shape2.position.x, shape2.position.y, shape2.position.z);
          
          const lineColor = new THREE.Color(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
          lineColors.push(lineColor.r, lineColor.g, lineColor.b);
          lineColors.push(lineColor.r, lineColor.g, lineColor.b);
        }
      }
      
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
      
      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
      });
      
      return new THREE.LineSegments(lineGeometry, lineMaterial);
    };

    const energyLines = createEnergyLines();
    scene.add(energyLines);

    camera.position.set(0, 0, 25);

    // Enhanced mouse interaction with smooth interpolation
    const mouse = new THREE.Vector2();
    const targetCameraPosition = new THREE.Vector3(0, 0, 25);
    const currentCameraPosition = new THREE.Vector3(0, 0, 25);

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
      
      targetCameraPosition.x = mouse.x * 5;
      targetCameraPosition.y = mouse.y * 3;
      targetCameraPosition.z = 25 + mouse.x * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Performance monitoring
    let lastTime = 0;
    const frameRate = 1000 / 60; // Target 60 FPS

    // Enhanced animation loop with physics-like behavior
    let frameId: number;
    const clock = new THREE.Clock();
    
    const animate = (currentTime: number) => {
      frameId = requestAnimationFrame(animate);
      
      // Frame rate limiting for performance
      if (currentTime - lastTime < frameRate) return;
      lastTime = currentTime;
      
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement
      currentCameraPosition.lerp(targetCameraPosition, 0.05);
      camera.position.copy(currentCameraPosition);
      camera.lookAt(scene.position);

      // Animate central helixes with complex rotations
      helix1.rotation.x = elapsedTime * 0.2;
      helix1.rotation.y = elapsedTime * 0.3;
      helix1.rotation.z = elapsedTime * 0.1;
      
      helix2.rotation.x = -elapsedTime * 0.25;
      helix2.rotation.y = elapsedTime * 0.2;
      helix2.rotation.z = -elapsedTime * 0.15;

      // Animate rings with wave-like motion
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsedTime * (0.2 + index * 0.05);
        ring.rotation.x += Math.sin(elapsedTime + index) * 0.001;
        ring.rotation.y += Math.cos(elapsedTime * 0.7 + index) * 0.002;
        
        // Pulsing effect
        const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.05;
        ring.scale.setScalar(scale);
      });

      // Animate floating shapes with orbital motion
      floatingShapes.forEach((shape, index) => {
        const speed = (shape as any).rotationSpeed;
        const originalPos = (shape as any).originalPosition;
        const floatSpeed = (shape as any).floatSpeed;
        const floatRadius = (shape as any).floatRadius;
        
        // Rotation
        shape.rotation.x += speed.x;
        shape.rotation.y += speed.y;
        shape.rotation.z += speed.z;
        
        // Orbital motion around original position
        const time = elapsedTime * floatSpeed;
        shape.position.x = originalPos.x + Math.cos(time + index) * floatRadius;
        shape.position.y = originalPos.y + Math.sin(time * 0.7 + index) * floatRadius;
        shape.position.z = originalPos.z + Math.sin(time * 0.5 + index) * floatRadius * 0.5;
      });

      // Animate particle systems
      particleSystems.forEach((system, systemIndex) => {
        const positions = system.geometry.attributes.position.array as Float32Array;
        const particleCount = positions.length / 3;
        
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3 + 1] += Math.sin(elapsedTime + i * 0.01) * 0.02 * (systemIndex + 1);
          positions[i3] += Math.cos(elapsedTime * 0.5 + i * 0.01) * 0.01 * (systemIndex + 1);
          positions[i3 + 2] += Math.sin(elapsedTime * 0.3 + i * 0.01) * 0.015 * (systemIndex + 1);
        }
        system.geometry.attributes.position.needsUpdate = true;
        
        // Rotate entire particle system
        system.rotation.y = elapsedTime * 0.1 * (systemIndex + 1);
      });

      // Animate lights with complex patterns
      pointLights.forEach((light, index) => {
        const time = elapsedTime + index * Math.PI * 0.4;
        
        // Color cycling
        light.color.setHSL((time * 0.05 + index * 0.2) % 1, 0.9, 0.7);
        
        // Intensity pulsing
        light.intensity = 1.5 + Math.sin(time * 2) * 0.5 + Math.cos(time * 3) * 0.3;
        
        // Complex orbital motion
        const radius = 15 + Math.sin(time * 0.3) * 5;
        const height = Math.sin(time * 0.2) * 10;
        
        light.position.x = Math.cos(time * 0.4 + index * 1.2) * radius;
        light.position.z = Math.sin(time * 0.4 + index * 1.2) * radius;
        light.position.y = height + Math.sin(time * 0.6 + index) * 5;
      });

      // Add camera shake effect on mouse movement
      const shakeIntensity = (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.1;
      camera.position.x += (Math.random() - 0.5) * shakeIntensity * 0.5;
      camera.position.y += (Math.random() - 0.5) * shakeIntensity * 0.3;

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of all resources
      [helixGeometry1, helixGeometry2, ...geometries].forEach(geo => geo.dispose());
      [helixMaterial1, helixMaterial2].forEach(mat => mat.dispose());
      
      rings.forEach(ring => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });

      floatingShapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });

      particleSystems.forEach(system => {
        system.geometry.dispose();
        system.material.dispose();
      });

      energyLines.geometry.dispose();
      energyLines.material.dispose();
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-60" />;
};

export default EnhancedHeroThreeScene;
