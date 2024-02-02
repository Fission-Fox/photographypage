import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/image 1.png";
import image2 from "@/assets/images/image 2.png";
import Checkbox from "@/assets/svg/checkbox";

export default function Pricing() {
  return (
    <div className="w-[50%] h-[full]  m-auto box-shadow: 0px 4px 4px 0px #00000040;">
      <div className="py-3">
        <div className="text-[32px] font-bold text-center">Pricing</div>
        <div className="text-[16px] text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page <br /> when looking at its layout.{" "}
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col  shadow-xl w-[284px] h-[472px] bg-white py-20">
          <div>
            <p className="text-center font-bold text-[14px]">BRONZE</p>
          </div>

          <div className="flex justify-center">
            <p className=" text-[16px] py-3 text-[#8F8A8A]">$</p>
            <p className="font-bold text-[30px] ">99.99</p>
            <p className="text-[16px] py-3 text-[#8F8A8A]">/Year</p>
          </div>
          <div className="px-">
            <div className="flex flex-col text-[14px]  gap-2 py-5 ">
              <p className="px-3 flex gap-2">
                <Checkbox />
                Detail Page
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Rating and Reviews
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Email
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Url
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Phone
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Additional Phone
              </p>
              <p className="text-[#17BFE6] text-[14px]  px-3"> Read More </p>
            </div>
            <div className="flex  px-2">
              <button className="border border-[#8F8A8A] w-[224px]  mt-5 rounded-sm text-[#8F8A8A] font-semibold py-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col  shadow-xl w-[284px] h-[472px] bg-white py-20">
          <div>
            <p className="text-center font-bold text-[14px]">SILVER</p>
          </div>

          <div className="flex justify-center">
            <p className=" text-[16px] py-3 text-[#8F8A8A]">$</p>
            <p className="font-bold text-[30px] ">199.99</p>
            <p className="text-[16px] py-3 text-[#8F8A8A]">/Year</p>
          </div>
          <div className="px-">
            <div className="flex flex-col text-[14px]  gap-2 py-5 ">
              <p className="px-3 flex gap-2">
                <Checkbox />
                Detail Page
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Rating and Reviews
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Email
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Url
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Phone
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Additional Phone
              </p>
              <p className="text-[#17BFE6] text-[14px]  px-3"> Read More </p>
            </div>
            <div className="flex  px-2">
              <button className="border border-[#8F8A8A] w-[224px]  mt-5 rounded-sm text-[#8F8A8A] font-semibold py-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col  shadow-xl w-[284px] h-[512px] bg-white  pt-20">
          <div className="flex flex-col items-center ">
            <p className=" bg-[#ffb348] w-28 text-[12px] ">Recommended</p>
            <p className="text-center font-bold text-[14px]">GOLD</p>
          </div>

          <div className="flex justify-center">
            <p className=" text-[16px] py-3 text-[#8F8A8A]">$</p>
            <p className="font-bold text-[30px] ">349.99</p>
            <p className="text-[16px] py-3 text-[#8F8A8A]">/Year</p>
          </div>
          <div className="px-">
            <div className="flex flex-col text-[14px]  gap-2 py-1 ">
              <p className="px-3 flex gap-2">
                <Checkbox />
                Detail Page
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Rating and Reviews
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Email
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Url
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Phone
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Additional Phone
              </p>
              <p className="text-[#17BFE6] text-[14px]  px-3"> Read More </p>
            </div>
            <div className="flex  px-2">
              <button className="border border-[#8F8A8A] w-[224px]  mt-14 rounded-sm text-[#8F8A8A] font-semibold py-2  ">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col  shadow-xl w-[284px] h-[472px] bg-white py-20">
          <div>
            <p className="text-center font-bold text-[14px]">Diamond</p>
          </div>

          <div className="flex justify-center">
            <p className=" text-[16px] py-3 text-[#8F8A8A]">$</p>
            <p className="font-bold text-[30px] ">544.99</p>
            <p className="text-[16px] py-3 text-[#8F8A8A]">/Year</p>
          </div>
          <div className="px-">
            <div className="flex flex-col text-[14px]  gap-2 py-5 ">
              <p className="px-3 flex gap-2">
                <Checkbox />
                Detail Page
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Rating and Reviews
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Email
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Url
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Phone
              </p>
              <p className="px-3 flex gap-2">
                <Checkbox />
                Additional Phone
              </p>
              <p className="text-[#17BFE6] text-[14px]  px-3"> Read More </p>
            </div>
            <div className="flex  px-2 ">
              <button className="border border-[#8F8A8A] w-[224px]  mt-5 rounded-sm text-[#8F8A8A] font-semibold py-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
