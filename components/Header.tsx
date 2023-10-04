"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { pkbm_logo } from "@/assets/images";
import Image from "next/image";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const [click, setClick] = useState(false);
  return (
    <>
      <header className="header sticky inset-0 z-50 w-full">
        <nav className={`nav  ${
            isScrolled ? "bg-white shadow-lg shadow-gray-300" : "bg-gray-50 bg-opacity-[0.2] text-white"
          } flex justify-between fixed top-0 w-full`}>
          <div className="flex justify-center items-center p-2">
            <Image src={pkbm_logo} alt="pkbm" className="w-[100px]" />
            <div className="flex flex-col">
              <span className="text-[1em] font-bold">
                PKBM ZAHRATUL SYITHA
              </span>
              <span className="text-[1em]">KABUPATEN PASAMAN BARAT</span>
            </div>
          </div>
          <ul
            className={click ? "mobile-nav text-white" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li className="text-[1.3em] md:text-[0.9em]">
              <Link href="/">HOME</Link>
            </li>
            <li className="text-[1.3em] md:text-[1em]">
              <Link href="/news">NEWS</Link>
            </li>
            {/* <li className="text-[1.3em] md:text-[1em]">
              <Link href="/about">AKADEMIK</Link>
            </li> */}
            <li className="text-[1.3em] md:text-[1em]">
              <Link href="/ppdb">PPDB</Link>
            </li>
            <li className="text-[1.3em] md:text-[1em]">
              <Link href="/programs">PROGRAMS</Link>
            </li>
            <li className="text-[1.3em] md:text-[1em]">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={click ? "block" : "hidden"}>
              <hr/>
            </li>
            <li className={click ? "block" : "hidden"}>
              <div className="w-full flex justify-between items-center">
                <div className="icon flex justify-center items-center p-3 rounded-xl">
                  <i className="fab fa-facebook text-2xl "></i>
                </div>
                <div className="icon flex justify-center items-center p-3 rounded-xl">
                  <i className="fab fa-instagram text-2xl md:text-lg " ></i>
                </div>
                <div className="icon flex justify-center items-center p-3 rounded-xl">
                  <i className="fab fa-twitter text-2xl md:text-lg"></i>
                </div>
                <div className="icon flex justify-center items-center p-3 rounded-xl">
                  <i className="fab fa-youtube text-2xl md:text-lg"></i>
                </div>
              </div>
            </li>
          </ul>
          <div className="start w-[20%] flex flex-col justify-center items-center">
            <div className="icon-container w-[80%] flex justify-between items-center">
              <div className="icon flex justify-center items-center p-2 rounded-xl">
                <i className="fab fa-facebook text-2xl "></i>
              </div>
              <div className="icon flex justify-center items-center p-2 rounded-xl">
                <i className="fab fa-instagram text-2xl"></i>
              </div>
              <div className="icon flex justify-center items-center p-2 rounded-xl">
                <i className="fab fa-twitter text-2xl "></i>
              </div>
              <div className="icon flex justify-center items-center p-2 rounded-xl">
                <i className="fab fa-youtube text-2xl"></i>
              </div>
            </div>
            <button className="toggle" onClick={() => setClick(!click)}>
              {click ? (
                <i className="fa fa-times"> </i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
