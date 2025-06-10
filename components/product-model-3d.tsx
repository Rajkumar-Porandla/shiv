"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function HoodieModel() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={meshRef} scale={[2, 2, 2]} position={[0, -1, 0]}>
      <mesh>
        <boxGeometry args={[1, 1.5, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Hood */}
      <mesh position={[0, 0.5, 0.1]}>
        <boxGeometry args={[0.8, 0.6, 0.4]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.8} />
      </mesh>
      {/* Neon accents */}
      <mesh position={[0, 0, 0.16]}>
        <boxGeometry args={[0.6, 0.1, 0.02]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

export function ProductModel3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <HoodieModel />

        <Environment preset="studio" />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={2}
          maxDistance={6}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  )
}
