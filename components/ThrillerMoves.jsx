import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TMoves from "./Models/thrillerMoves";
import * as THREE from 'three'

const Scene = () => {
  const [action, setAction] = useState("idle");

  return (
    <>
    <div className="w-full h-[500px] p-0 m-0 bg-black rounded-b-[16%]">
    <Canvas  alpha={true}>
      <ambientLight intensity={0.5}/>
      <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
      <OrbitControls enableDamping={true} enableZoom={true} />
      <Suspense fallback={null}>
        <TMoves action={action}/>
      </Suspense>
    </Canvas>

    </div>
    <div className="controls flex flex-row justify-center items-center overflow-x-scroll">
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Thriller Move 1")}>Thriller Move 1</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Thriller Move 2")}>Thriller Move 2</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("idle")}>idle</button>
      </div>
    </>
  );
};

export default Scene;
