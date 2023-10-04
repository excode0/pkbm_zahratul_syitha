import { t3 } from "@/assets/images";
import { online } from "@/utils/dummydata";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex p-4">
        <Image src={t3} alt={""} className="w-16 h-16 rounded-xl mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{"MUHAMMAD RIVAN"}</h3>
          <p className="text-[#1eb2a6]">{"TUKANG PAKUAK"}</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste hic dolorum eius dolor magnam illum consectetur molestias! Quos est alias voluptates culpa corrupti architecto velit quaerat in, corporis perspiciatis soluta.</p>
      </div>
    </div>
  );
};

export default Testimonial;
