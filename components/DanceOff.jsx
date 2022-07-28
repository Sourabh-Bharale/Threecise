import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceoffVro from "./Models/danceoff";
import * as THREE from "three";

const Scene = () => {
  const [action, setAction] = useState("idle");

  return (
    <>
      <div className="w-full h-[500px]  p-0 m-0 bg-black rounded-b-[16%]">
        <Canvas alpha={true}>
          <ambientLight intensity={0.5} />
          <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
          <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
          <pointLight intensity={2} position={[0, 3, -10]} color="white" />
          <OrbitControls enableDamping={true} enableZoom={true} />

          <Suspense fallback={null}>
            <DanceoffVro action={action} />
          </Suspense>
        </Canvas>
      </div>
      <div className="controls flex flex-row justify-center items-center overflow-x-scroll">
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("idle")}
        >
          idle
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Belly Dance")}
        >
          Belly Dance
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Shopping Cart ")}
        >
          Shopping Cart{" "}
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Break Dance1")}
        >
          Break Dance
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Dance Tweark")}
        >
          Tweark
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Flair")}
        >
          Flair
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Gagnam Style")}
        >
          Gagnam Style
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("House Dance")}
        >
          House Dance
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Silly")}
        >
          Silly
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Soul Spin Combo")}
        >
          Soul Spin Combo
        </button>
      </div>
    </>
  );
};

export default Scene;
