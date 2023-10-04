import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="flex justify-center items-center h-full">
          <div className="w-[80%] flex flex-col justify-start items-start">
            <div className="flex flex-col">
              <span className="text-[1.5em]  p-2">Pusat Kegiatan Belajar Masyarakat (PKBM) </span>
              <span className="font-bold text-[2em] md:text-[3em] p-2">ZAHRATUL SYITHA </span>
              <span className="text-white text-[1.5em] p-2">PPDB PADA TAHUN AJARAN 20xx/20xx TELAH DIBUKA</span>
            </div>
            <div className="w-[80%] flex justify-start items-start p-2">
              <Link
                href={"#"}
                className="flex flex-col justify-center items-center bg-[#1eb2a6] border border-2 border-white rounded-lg p-5 shadow-2xl"
              >
                <span className="text-white text-[1.5em] font-bold text-center ">
                  DAFTAR
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
