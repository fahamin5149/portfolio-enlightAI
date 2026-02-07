"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useRef, useMemo } from "react"
import type * as THREE from "three"

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)

  const shapes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10 - 5] as [
        number,
        number,
        number,
      ],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
      type: Math.floor(Math.random() * 3),
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} index={i} />
      ))}
    </group>
  )
}

function FloatingShape({
  position,
  scale,
  speed,
  type,
  index,
}: {
  position: [number, number, number]
  scale: number
  speed: number
  type: number
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 0.5
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3
    }
  })

  const geometry = useMemo(() => {
    switch (type) {
      case 0:
        return <boxGeometry args={[1, 1, 1]} />
      case 1:
        return <octahedronGeometry args={[0.7]} />
      default:
        return <tetrahedronGeometry args={[0.8]} />
    }
  }, [type])

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry}
      <meshStandardMaterial color="#1a1a2e" transparent opacity={0.6} roughness={0.3} metalness={0.8} />
    </mesh>
  )
}

function CameraRig() {
  const { camera } = useThree()

  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.3
    camera.lookAt(0, 0, 0)
  })

  return null
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#e8eaef"]} />
        <fog attach="fog" args={["#e8eaef", 5, 25]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <FloatingShapes />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  )
}
