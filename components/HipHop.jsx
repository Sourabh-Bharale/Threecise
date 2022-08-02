import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HMoves from "./Models/hipHop";
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
        <HMoves action={action}/>
      </Suspense>
    </Canvas>
    </div>
    <div className="controls flex flex-row justify-center items-center overflow-x-scroll">
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Bboy Hip Hop")}>Bboy Hip Hop</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Hip Hop 1")}>Hip Hop 1</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Hip Hop 2")}>Hip Hop 2</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Hip Hop 3")}>Hip Hop 3</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Robot Hip Hop")}>Robot Hip Hop</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Snake Hip Hop")}>Snake Hip Hop</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Tut Hip Hop")}>Tut Hip Hop</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("Wave Hip Hop")}>Wave Hip Hop</button>
        <button className='font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center' onClick={() => setAction("idle")}>idle</button>
        </div>
    </div>
    </div>
  );
};

export default Scene;
