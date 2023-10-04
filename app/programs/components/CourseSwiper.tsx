"use client";

import Image from "next/image";
import { poster_courses } from "@/assets/images";
import React, { useRef, useState } from "react";
const items = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
  { id: 6, title: "Item 6" },
  { id: 7, title: "Item 6" },
  { id: 8, title: "Item 6" },
  { id: 9, title: "Item 6" },
  // Add more items as needed
];
const CourseSwiper = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[600px] space-x-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[300px] bg-white rounded-lg shadow-2xl mb-[10px] relative"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-[30%] w-full"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="w-full p-5">
              <a href="#">
                <h5 className="mb-1 text-xl font-bold tracking-tight">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <span className="text-gray-600">MUHAMMAD RIVAN</span>
              <p className="mt-[10px] mb-[10px] text-sm">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p className="text-sm">6 Month, 6-12 hrs/week</p>
              <p className="text-sm">Free Course</p>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a> */}
            </div>
            <div className="absolute inset-0 flex items-end justify-end p-2">
              <button className="px-3 py-1 bg-[#19998e] text-white rounded-md hover:bg-[#1eb2a6]">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CourseSwiper;
