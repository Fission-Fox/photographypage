import Image from "next/image";
import React from "react";
import tree from "@/assets/Image/tree1.jpg";

export default function Portfolio() {
  return (
    <div className="mt-32 W-[80%] pl-20 pr-20 ">
      <hr />

      <div className="flex justify-center pt-28">
        <div className="hover:bg-black hover:text-white text-[10px] sm:text-[20px] px-3 sm:px-14 py-4 border">
          <button>EXPLORE MY PORTFOLIO</button>
        </div>
      </div>
      <div className="flex justify-center  mt-28 pl-20 pr-20">
        <div className="border-black border-t mt-8 w-[90%] mr-10 "></div>
        <div>
          <Image src={tree} className="w-[210px]  object-cover" alt="" />
        </div>
        <div className="border-black border-t w-[90%] mt-8 ml-10"></div>
      </div>
    </div>
  );
}
