"use client";
import React, { useState } from "react";
import { t3 } from "@/assets/images";
import Image from "next/image";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Ganti dengan jumlah halaman total yang sesuai

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-start items-center mb-[100px]">
      <div className="w-full h-[150px] md:h-[200px] flex flex-col justify-center items-center bg-gray-600">
        <div className="p-10 mt-[15%] md:mt-[5%]">
          <span className="text-[2em] text-white">NEWS</span>
        </div>
      </div>
      <div className="flex justify-start items-center w-[80%] mt-[30px]">
        <div className="flex w-full items-center">
          <span className="text-[2em] font-[600] whitespace-nowrap">
            BERITA UTAMA
          </span>
          <hr className="h-[2px] bg-gray-300 w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%]">
          <Image src={t3} alt="" className="w-full md:w-full p-5" />
          <div className="flex flex-col justify-start items-start p-5">
            <span className="text-[1.5em] font-[600]">
              PENERIMAAN SISWA/I PPBD TELAH DIBUKA TAHUN AJARAN 20XX/20XX{" "}
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              ipsum beatae odio dolore, quisquam minus illo maxime, libero modi
              deleniti eum quidem optio ullam molestias tenetur perspiciatis
              ipsam laborum magni!
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center w-[80%] mt-[30px]">
        <div className="flex w-full items-center">
          <span className="text-[1.5em] font-[600] whitespace-nowrap">
            BERITA LAINNYA
          </span>
          <hr className="h-[2px] bg-gray-300 w-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%]">
        <div className="h-full flex flex-col justify-start items-start w-full">
          <div className="flex flex-col bg-white rounded-lg p-5 shadow-2xl">
            <div className="w-full ">
              <form>
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col p-2">
              <span className="font-[500]">KATEGORI</span>
              <div className="flex flex-col p-2">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium"
                  >
                    Art & Design
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    // checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                    Technology
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div className="flex justify-start items-start w-full ">
                <Image src={t3} alt="" className="w-[30%] p-5" />
                <div className="flex flex-col justify-start items-start p-5">
                  <span className="text-[1em] font-[600]">
                    PENERIMAAN SISWA/I PPBD TELAH DIBUKA TAHUN AJARAN 20XX/20XX{" "}
                  </span>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum ipsum beatae odio dolore, quisquam minus illo
                    maxime, libero modi deleniti eum quidem optio ullam
                    molestias tenetur perspiciatis ipsam laborum magni!
                  </span>
                </div>
              </div>
            ))}
          <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a
                  href="#"
                  className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={handlePrevPage}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className={`z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white ${
                    currentPage === 3 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={() => setCurrentPage(3)}
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  ...
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                  onClick={handleNextPage}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default News;
