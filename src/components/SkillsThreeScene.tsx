import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface SkillsThreeSceneProps {
  skills: string[];
}

const SkillsThreeScene: React.FC<SkillsThreeSceneProps> = ({ skills }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create skill nodes as interconnected spheres
    const skillNodes: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];
    
    const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: theme === 'light' ? 0x3b82f6 : 0x60a5fa,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
    });

    // Position skills in a 3D network
    const positions: THREE.Vector3[] = [];
    const radius = 4;
    
    skills.forEach((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const position = new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      
      positions.push(position);
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.copy(position);
      
      // Store original position and animation properties
      (node as any).originalPosition = position.clone();
      (node as any).animationOffset = Math.random() * Math.PI * 2;
      
      skillNodes.push(node);
      scene.add(node);
    });

    // Create connections between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: theme === 'light' ? 0x8b5cf6 : 0xa78bfa,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const distance = positions[i].distanceTo(positions[j]);
        if (distance < 3) {
          const geometry = new THREE.BufferGeometry().setFromPoints([positions[i], positions[j]]);
          const line = new THREE.Line(geometry, lineMaterial.clone());
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x60a5fa, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 10;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    let hoveredNode: THREE.Mesh | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (rect) {
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(skillNodes);
        
        // Reset previous hover state
        if (hoveredNode) {
          hoveredNode.scale.set(1, 1, 1);
          ((hoveredNode.material as THREE.MeshPhongMaterial).emissive as THREE.Color).setHex(0x000000);
        }
        
        // Set new hover state
        if (intersects.length > 0) {
          hoveredNode = intersects[0].object as THREE.Mesh;
          hoveredNode.scale.set(1.5, 1.5, 1.5);
          ((hoveredNode.material as THREE.MeshPhongMaterial).emissive as THREE.Color).setHex(0x444444);
        } else {
          hoveredNode = null;
        }
      }
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate skill nodes with gentle floating motion
      skillNodes.forEach((node, index) => {
        const animationOffset = (node as any).animationOffset;
        const originalPosition = (node as any).originalPosition;
        
        node.position.x = originalPosition.x + Math.sin(time * 0.5 + animationOffset) * 0.2;
        node.position.y = originalPosition.y + Math.cos(time * 0.7 + animationOffset) * 0.2;
        node.position.z = originalPosition.z + Math.sin(time * 0.3 + animationOffset) * 0.1;
        
        // Rotate nodes
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      // Update connection positions
      connections.forEach((connection, index) => {
        const nodeA = skillNodes[Math.floor(index / (skillNodes.length - 1))];
        const nodeB = skillNodes[index % skillNodes.length];
        if (nodeA && nodeB && nodeA !== nodeB) {
          const geometry = connection.geometry as THREE.BufferGeometry;
          const positions = geometry.attributes.position.array as Float32Array;
          positions[0] = nodeA.position.x;
          positions[1] = nodeA.position.y;
          positions[2] = nodeA.position.z;
          positions[3] = nodeB.position.x;
          positions[4] = nodeB.position.y;
          positions[5] = nodeB.position.z;
          geometry.attributes.position.needsUpdate = true;
        }
      });

      // Gentle camera rotation
      camera.position.x = Math.sin(time * 0.1) * 12;
      camera.position.z = Math.cos(time * 0.1) * 12;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      nodeGeometry.dispose();
      skillNodes.forEach(node => {
        (node.material as THREE.Material).dispose();
      });
      connections.forEach(connection => {
        connection.geometry.dispose();
        (connection.material as THREE.Material).dispose();
      });
      
      renderer.dispose();
    };
  }, [skills, theme]);

  return <div ref={mountRef} className="w-full h-64 md:h-80" />;
};

export default SkillsThreeScene;
