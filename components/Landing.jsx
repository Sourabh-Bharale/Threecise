import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomePageMoves from "./Models/homePage";
import * as THREE from "three";
import Link from 'next/link'
const Scene = () => {
  const [action, setAction] = useState("1");

  return (
    <>
      <div className=" pl-16 absolute test">
        <h1 className="lg:text-[10rem] text-[6rem] font-semibold">How do i?</h1>
      </div>
      <div className="lg:ml-8 lg:pr-8 flex lg:flex-row flex-col lg:bg-gradient-to-r bg-gradient-to-b from-[#A5C9CA] to-[#2C3333] lg:bg-inherit rounded-b-[16%] lg:rounded-b-none lg:from-[#2C3333] lg:via-[#A5C9CA]">
        <div className="lg:w-[900px]  w-[100vw] lg:h-[700px] h-[60vh] ">
          <Canvas alpha={false}>
            <ambientLight intensity={0.5} />
            <pointLight intensity={2} position={[-1, 1, 3]} color="#2C3333" />
            <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
            <pointLight intensity={2} position={[0, 3, -10]} color="white" />
            <OrbitControls enableDamping={true} enableZoom={true} />

            <Suspense fallback={null}>
              <HomePageMoves action={action} />
            </Suspense>
          </Canvas>
          <div className="ml-8 mr-8 controls relative top-[-100px] flex flex-row lg:justify-center items-center overflow-x-scroll lg:bg-inherit  pl-4 pr-4">
            
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("1")}
            >
              1
            </button>
           
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("2")}
            >
              2
            </button>
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("3")}
            >
              3
            </button>
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("4")}
            >
              4
            </button>
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("5")}
            >
              5
            </button>
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("6")}
            >
              6
            </button>
            <button
              className="hover:scale-[1.2] font-semibold m-4 bg-[#2C3333] hover:bg-white hover:text-cyan-500 text-cyan-300 p-4 rounded-full flex justify-center items-center"
              onClick={() => setAction("8")}
            >
              8
            </button>
          </div>
        </div>
        <div className="card  lg:w-[500px] lg:h-[700px] h-[300px] m-4 rounded-xl">
          <div className="card2 lg:w-[500px] lg:h-[700px] h-[300px] overflow-x-none overflow-y-scroll bg-[#2C3333] rounded-xl ">
          <div className="lg:p-16 p-8 pl-16 lg:pt-0 test1 lg:text-[3rem] text-[2rem] font-bold flex flex-row rounded-2xl  lg:relative lg:top-[100px] lg:left-[0px] ">

              <div className="bg-gradient-to-t from-[#72FFFF] to-[#06B6D4] pl-2 rounded-xl mr-2"></div>
              <Link href='/danceoff'>
              Dance Off
              </Link>
            </div>
            <div className="lg:p-16 p-8 pl-16 test1 lg:text-[3rem] text-[2rem] font-bold flex flex-row rounded-2xl  lg:relative lg:top-[100px] lg:left-[50px] ">
              <div className="bg-gradient-to-t from-[#72FFFF] to-[#06B6D4] pl-2 rounded-xl mr-2"></div>
             <Link href='/excercise'>
             Excercises
              </Link>
            </div>
            <div className="lg:p-16 p-8 pl-16 test1 lg:text-[3rem] text-[2rem] font-bold flex flex-row rounded-2xl  lg:relative lg:top-[100px] lg:left-[100px] ">
              <div className="bg-gradient-to-t from-[#72FFFF] to-[#06B6D4] pl-2 rounded-xl mr-2"></div>
              <Link href='/funmoves'>
              Fun Moves
              </Link> 
            </div>
             
            <div className="lg:p-16 p-8 pl-16 test1 lg:text-[3rem] text-[2rem] font-bold flex flex-row rounded-2xl  lg:relative lg:top-[100px] lg:left-[0px] ">
              <div className="bg-gradient-to-t from-[#72FFFF] to-[#06B6D4] pl-2 rounded-xl mr-2"></div>
              <Link href='/hiphop'>
              Hip Hop
              </Link>
            </div>
            <div className="lg:p-16 p-8 pl-16 test1 lg:text-[3rem] text-[2rem] font-bold flex flex-row rounded-2xl  lg:relative lg:top-[100px] lg:left-[50px] ">
              <div className="bg-gradient-to-t from-[#72FFFF] to-[#06B6D4] pl-2 rounded-xl mr-2"></div>
              <Link href='/squats'>
              Squats
              </Link>
            </div>
            <div className="lg:p-16 p-8 pl-16 test1 lg:text-[3rem] text-[2rem] font-bold flex flex-row rounded-2xl  lg:relative lg:top-[100px] lg:left-[0px] ">
              <div className="bg-gradient-to-t from-[#72FFFF] to-[#06B6D4] pl-2 rounded-xl mr-2"></div>
              <Link href='/thrillermoves'>
              Thriller Moves
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scene;
