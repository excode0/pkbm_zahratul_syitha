import React from "react";
import Image from "next/image";
import { poster } from "@/assets/images";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      <div className="w-full h-[150px] md:h-[200px] flex flex-col justify-center items-center bg-gray-600">
        <div className="p-10 mt-[15%] md:mt-[5%]">
          <span className="text-[2em] text-white">PPDB</span>
        </div>
      </div>
      <div className="w-full">
        <Image src={poster} alt="" className="w-full"/>
      </div>
    </div>
  );
};

export default page;
