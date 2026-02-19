import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob({ position, color, scale = 1, speed = 1, distort = 0.4 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.8}
          metalness={0.05}
          distort={distort}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function SoftBox({ position, color, scale = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.9} metalness={0} />
      </mesh>
    </Float>
  );
}

function Torus({ position, color, scale = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  return (
    <Float speed={0.8} rotationIntensity={0.8} floatIntensity={0.5}>
      <mesh position={position} scale={scale} rotation={[0.5, 0.3, 0]}>
        <torusGeometry args={[1, 0.4, 32, 64]} />
        <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} />
      </mesh>
    </Float>
  );
}

export default function FloatingScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#faf3e8" />
      <directionalLight position={[-3, 3, 2]} intensity={0.3} color="#d4e8d0" />

      <Blob position={[0.5, 0.5, 0]} color="#7ba585" scale={1.6} speed={0.8} distort={0.35} />
      <Blob position={[-2.2, -1.2, -1]} color="#e8a088" scale={0.9} speed={1.2} distort={0.5} />
      <SoftBox position={[2.5, -0.8, -0.5]} color="#f0dcc0" scale={0.7} />
      <Torus position={[-1.5, 1.8, -1.5]} color="#a8c8d8" scale={0.5} />
      <Blob position={[2, 2, -2]} color="#f0dcc0" scale={0.6} speed={0.6} distort={0.3} />
    </Canvas>
  );
}
