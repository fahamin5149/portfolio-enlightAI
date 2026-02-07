"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useRef, useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import * as THREE from "three"

function Model({ url }: { url: string }) {
  const [scene, setScene] = useState<THREE.Group | null>(null)
  const modelRef = useRef<THREE.Group>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [previousMouse, setPreviousMouse] = useState({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const { gl } = useThree()

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      url,
      (gltf) => {
        const loadedScene = gltf.scene.clone()
        const box = new THREE.Box3().setFromObject(loadedScene)
        const center = box.getCenter(new THREE.Vector3())
        loadedScene.position.sub(center)
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 1.5 / maxDim
        loadedScene.scale.setScalar(scale)
        setScene(loadedScene)
      },
      undefined,
      (error) => console.error("Error loading model:", error),
    )
  }, [url])

  useEffect(() => {
    const canvas = gl.domElement

    const handlePointerDown = (e: PointerEvent) => {
      setIsDragging(true)
      setPreviousMouse({ x: e.clientX, y: e.clientY })
      velocity.current = { x: 0, y: 0 }
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging || !modelRef.current) return
      const deltaX = e.clientX - previousMouse.x
      const deltaY = e.clientY - previousMouse.y
      modelRef.current.rotation.y += deltaX * 0.01
      modelRef.current.rotation.x += deltaY * 0.01
      velocity.current = { x: deltaX * 0.01, y: deltaY * 0.01 }
      setPreviousMouse({ x: e.clientX, y: e.clientY })
    }

    const handlePointerUp = () => {
      setIsDragging(false)
    }

    canvas.addEventListener("pointerdown", handlePointerDown)
    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerup", handlePointerUp)
    canvas.addEventListener("pointerleave", handlePointerUp)

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerup", handlePointerUp)
      canvas.removeEventListener("pointerleave", handlePointerUp)
    }
  }, [gl, isDragging, previousMouse])

  useFrame((_, delta) => {
    if (modelRef.current) {
      if (!isDragging) {
        velocity.current.x *= 0.95
        velocity.current.y *= 0.95
        modelRef.current.rotation.y += velocity.current.x
        modelRef.current.rotation.x += velocity.current.y

        // Subtle auto-rotation when velocity is nearly zero
        if (Math.abs(velocity.current.x) < 0.001 && Math.abs(velocity.current.y) < 0.001) {
          modelRef.current.rotation.y += delta * 0.3
        }
      }
    }
  })

  if (!scene) return null

  return (
    <group ref={modelRef}>
      <primitive object={scene} />
    </group>
  )
}

export function Logo3D({ className }: { className?: string }) {
  return (
    <div className={`${className} cursor-grab active:cursor-grabbing`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, -3, 2]} intensity={0.4} />
        <Suspense fallback={null}>
          <Model url="/v0-logo.glb" />
        </Suspense>
      </Canvas>
    </div>
  )
}
