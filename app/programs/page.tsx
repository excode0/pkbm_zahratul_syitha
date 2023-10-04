"use client";
import React from "react";
import Image from "next/image";
import { poster_courses } from "@/assets/images";
import CourseSwiper from "./components/CourseSwiper";
const page = () => {
  const courses = [
    {
      title: "Course 1",
      teacher: "Teacher 1",
      description: "Description 1",
      price: "$10",
      poster: "/course1.jpg",
    },
    {
      title: "Course 2",
      teacher: "Teacher 2",
      description: "Description 2",
      price: "$15",
      poster: "/course2.jpg",
    },
    // Tambahkan data kursus lainnya sesuai kebutuhan
  ];
  return (
    <div className="min-h-screen flex flex-col justify-start items-center mb-[100px]">
      <div className="w-full h-[150px] md:h-[200px] flex flex-col justify-center items-center bg-gray-600">
        <div className="p-10 mt-[15%] md:mt-[5%]">
          <span className="text-[2em] text-white">PROGRAMS</span>
        </div>
      </div>
      <div className="flex justify-start items-center w-[80%] mt-[30px]">
        <div className="flex w-full items-center">
          <span className="text-[2em] font-[600] whitespace-nowrap">
            FEATURE COURSES
          </span>
          <hr className="h-[2px] bg-gray-300 w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white w-[70%] flex justify-start items-start shadow-2xl rounded-lg">
          <div className="">
            <Image src={poster_courses} alt="" className="rounded-lg" />
          </div>
          <div className="flex flex-col p-5">
            <span className="text-[1.5em] font-[400]">Economic Of Manager</span>
            <span className="mt-[10px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              esse, officiis hic porro debitis sunt ea vel asperiores. Non
              perspiciatis ut dolore iure nam? Corporis velit exercitationem
              explicabo similique eligendi.
            </span>
            <span className="mt-[10px]">6 Month, 6-12 hrs/week</span>
            <span>Free courses</span>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center w-[80%] mt-[30px]">
        <div className="flex w-full items-center">
          <span className="text-[1.5em] font-[600] whitespace-nowrap">
            Art & Design
          </span>
          <hr className="h-[2px] bg-gray-300 w-full" />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <CourseSwiper/>
      </div>

      <div className="flex justify-start items-center w-[80%] mt-[30px]">
        <div className="flex w-full items-center">
          <span className="text-[1.5em] font-[600] whitespace-nowrap">
            Programming
          </span>
          <hr className="h-[2px] bg-gray-300 w-full" />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <CourseSwiper/>
      </div>
    </div>
  );
};

export default page;
