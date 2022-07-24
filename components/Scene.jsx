import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Models/CarWithClouds";
import * as THREE from 'three'
const Scene = () => {
  return (
    <div className="w-full h-[700px] p-0 m-0">
    <Canvas className="">
      <OrbitControls enableDamping={true} enableZoom={true} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default Scene;
