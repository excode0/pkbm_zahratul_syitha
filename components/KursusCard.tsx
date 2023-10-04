import { ic_kursus, ic_kursus1, t3 } from "@/assets/images";
import React from "react";
import { online } from "../utils/dummydata";
import Image from "next/image";
const KursusCard = () => {
  return (
    <>
      <div className="w-full flex flex-col jusitfy-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center">
          {online.map((val) => (
            <div className="kursus relative bg-white flex flex-col justify-center items-center shadow-xl shadow-[#1eb2a6] p-2 rounded-xl">
              <div className="salempang p-[2px] md:p-2">
                <span className="text-[0.5em] md:text-[1em]">30 KURSUS</span>
              </div>
              <div className="p-5 w-[80%]">
                <Image src={ic_kursus1} alt="kursus" className="show" />
                <Image src={ic_kursus} alt="kursus" className="hidden" />
              </div>
              <div className="flex flex-col justify-center items-center course-details">
                <span className="text-kursus text-[1em] md:text-[1.5em]">
                  {val.courseName}
                </span>
                <hr className="w-[0%] h-[3px]" />
              </div>
              <div className="btn-lihat-kursus bg-[#1eb2a6] text-white flex justify-center items-center border-2 p-3 rounded-lg w-full m-2">
                <span className="text-[1em] font-[500]">LIHAT KURSUS</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 mt-[20px]">
          <div className="bg-[#1eb2a6] hover:shadow-lg hover:shadow-[#1eb2a6] rounded-xl p-5">
            <span className="text-white ">LIHAT SELENGKAPNYA</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default KursusCard;
