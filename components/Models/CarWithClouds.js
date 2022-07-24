

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader, Canvas, useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/carWithClouds.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube000_0.geometry} material={materials.cristales} />
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube001_0.geometry} material={materials.carroceria} />
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube002_0.geometry} material={materials.interior} />
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube004_0.geometry} material={materials.chasis} />
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube005_0.geometry} material={materials.ruedas} />
        </group>
        <group position={[0, 0, -4.91]} rotation={[Math.PI / 2, -1.55, 0]}>
          <mesh geometry={nodes.GP_Layer_CUGP_Layer_0.geometry} material={materials.clouds} />
        </group>
        <mesh geometry={nodes.Plane_0.geometry} material={materials.shadow} />
        <group position={[1.68, 2.77, -1.28]} rotation={[-0.06, 0, 0]} scale={7.47}>
          <mesh geometry={nodes.Plane004_0.geometry} material={materials.shadow} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/carWithClouds.gltf')
