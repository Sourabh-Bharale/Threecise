import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EMode1 from "./Models/excercise1";
import * as THREE from 'three'

const Scene = () => {
  const [action, setAction] = useState("idle");

  return (
    <div className="m-8">
    <div className=" bg-[#E7F6F2] p-4  rounded-3xl">
        <div className="p-8 absolute test" >
          <h1 className="lg:text-[8rem] font-semibold">DanceOff</h1>
        </div>
      <div className="w-full h-[500px]  p-0 m-0 bg-gradient-to-b from-[#395B64] via-[#A5C9CA]  rounded-b-[16%] rounded-t-xl">
    <Canvas  alpha={true}>
      <ambientLight intensity={0.5}/>
      <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
      <OrbitControls enableDamping={true} enableZoom={true} />
      
      <Suspense fallback={null}>
        <EMode1 action={action}/>
      </Suspense>
    </Canvas>
    </div>
    <div className="controls flex flex-row justify-center items-center overflow-x-scroll">
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("idle")}>idle</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Bicep Curl")}>Bicep Curl</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Front Raises")}>Front Raises</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Kettlebell Swing")}>Kettlebell Swing</button>        
        </div>
    </div>
    </div>
  );
};

export default Scene;
