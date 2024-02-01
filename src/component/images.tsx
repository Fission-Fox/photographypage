import Image from "next/image";
import React from "react";
import adventure from "@/assets/Image/adventures1.jpg";
import sarahdan from "@/assets/Image/sarah&dan1.jpg";
import tintypes from "@/assets/Image/tintypes1.jpg";
import photographer from "@/assets/Image/photographer1.jpg";
import nathan from "@/assets/Image/nathan1.jpg";
import dansarah from "@/assets/Image/dan&sarah1.jpg";
export default function Images() {
  return (
    <div className="mt-32">
      <div
        className="text-center font-light text-[0.6875rem]"
        style={{
          fontFamily: "Over",
          wordSpacing: "0em",
          letterSpacing: "0.2em",
          lineHeight: "1.87em",
        }}
      >
        FEATURED POSTS FROM WEDDINGS, ADVENTURES AND PORTRAITS
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-16 px-2">
        <div className="w-[90%] sm:w-auto">
          <div className="flex gap-5 ">
            <Image
              src={adventure}
              className="w-[50%] sm:w-[275px] h-[193px] hover:scale-95 transition duration-700 cursor-pointer"
              style={{ objectFit: "cover" }}
              alt=""
            />
            <Image
              src={sarahdan}
              className="w-[50%] sm:w-[275px] h-[193px] hover:scale-95 transition duration-700 cursor-pointer"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="mt-5">
            <Image
              src={photographer}
              className="hover:scale-95 transition duration-700 cursor-pointer"
              alt=""
              style={{ width: "572px", height: "382px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-[90%] sm:w-auto">
          <div>
            <Image
              src={tintypes}
              className="hover:scale-95 transition duration-700 cursor-pointer"
              style={{ width: "572px", height: "382px", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="flex gap-4 mt-5">
            <Image
              src={nathan}
              className="w-[50%] sm:w-[275px] h-[193px] hover:scale-95 transition duration-700 cursor-pointer "
              style={{ objectFit: "cover" }}
              alt=""
            />
            <Image
              src={dansarah}
              className="w-[50%] sm:w-[275px] h-[193px] hover:scale-95 transition duration-700 cursor-pointer"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
