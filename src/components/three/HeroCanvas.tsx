'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Torus, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.5;
      torusRef.current.rotation.y = Math.sin(t * 0.3) * 0.5;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.6;
      innerRef.current.rotation.z = t * 0.4;
    }
  });

  return (
    <group>
      {/* Outer distorted sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef} scale={1.4}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#00f5ff"
            emissive="#003344"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
            distort={0.3}
            speed={2}
            wireframe={false}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Torus ring */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh ref={torusRef} scale={1.0}>
          <torusGeometry args={[1.8, 0.06, 16, 100]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Inner wireframe */}
      <Float speed={3} rotationIntensity={2} floatIntensity={0.3}>
        <mesh ref={innerRef} scale={0.7}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#92400e"
            emissiveIntensity={0.4}
            metalness={1}
            roughness={0}
            wireframe
          />
        </mesh>
      </Float>

      {/* Orbiting small spheres */}
      {[0, 1, 2, 3].map((i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={1}>
          <OrbitalSphere index={i} />
        </Float>
      ))}
    </group>
  );
}

function OrbitalSphere({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const colors = ['#00f5ff', '#8b5cf6', '#fbbf24', '#f43f5e'];
  const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  const radius = 2.4;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle = angles[index] + t * 0.5;
    if (ref.current) {
      ref.current.position.x = Math.cos(angle) * radius;
      ref.current.position.y = Math.sin(angle * 0.7) * 0.6;
      ref.current.position.z = Math.sin(angle) * radius;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 12, 12]} />
      <meshStandardMaterial
        color={colors[index]}
        emissive={colors[index]}
        emissiveIntensity={1}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#fbbf24" />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
