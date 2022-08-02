import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceoffVro from "./Models/danceoff";
import * as THREE from "three";

const Scene = () => {
  const [action, setAction] = useState("idle");
 

  return (
    <div className="m-8">
    <div className=" bg-[#E7F6F2] p-4  rounded-3xl">
        <div className="p-8 absolute test" >
          <h1 className="lg:text-[8rem] font-semibold">DanceOff</h1>
        </div>
      <div className="w-full h-[500px]  p-0 m-0 bg-gradient-to-b from-[#395B64] via-[#A5C9CA]  rounded-b-[16%] rounded-t-xl">
        <Canvas alpha={true}>
          <ambientLight intensity={0.5} />
          <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
          <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
          <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
          <OrbitControls enableDamping={true} enableZoom={true} />

          <Suspense fallback={null}>
            <DanceoffVro action={action} />
          </Suspense>
        </Canvas>
      </div>
      <div className="controls flex flex-row justify-center items-center overflow-x-scroll">
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("idle")}
        >
          idle
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Belly Dance")}
        >
          Belly Dance
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Shopping Cart ")}
        >
          Shopping Cart{" "}
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Break Dance1")}
        >
          Break Dance
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Dance Tweark")}
        >
          Tweark
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Flair")}
        >
          Flair
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Gagnam Style")}
        >
          Gagnam Style
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("House Dance")}
        >
          House Dance
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Silly")}
        >
          Silly
        </button>
        <button
          className="font-semibold m-4 bg-[#395B64] text-[#E7F6F2] p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Soul Spin Combo")}
        >
          Soul Spin Combo
        </button>
      </div>
    </div>
    </div>
  );
};

export default Scene;
