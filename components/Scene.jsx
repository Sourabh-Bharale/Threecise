import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Models/CarWithClouds";
import DanceMoves from "./Models/DanceMoves1";
import * as THREE from 'three'

const Scene = () => {
  const [action, setAction] = useState("flair");

  return (
    <>
    <div className="w-full h-[700px] p-0 m-0">
    <Canvas className="">
      <ambientLight intensity={0.5}/>
      <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
      <OrbitControls enableDamping={true} enableZoom={true} />
      
      <Suspense fallback={null}>
        <DanceMoves action={action}/>
      </Suspense>
    </Canvas>
    </div>
    <div className="controls flex flex-row justify-center items-center">
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("flair")}>do flair</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("hipHop")}>do hip hop</button>

      </div>
    </>
  );
};

export default Scene;
