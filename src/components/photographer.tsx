import React from "react";
import Image from "next/image";
import pic1 from "@/assets/images/pic1.jpg";
import pic2 from "@/assets/images/pic2.jpg";
import pic3 from "@/assets/images/pic3.jpg";

export default function Photographer() {
  return (
    <div className=" flex  flex-wrap !w-[90%] sm:!w-[80%]  m-auto bg-[#FAFAFA]">
      <div className=" bg-[#FAFAFA] flex">
        <div className="   sm:w-[100%] h-[100%] ">
          <Image src={pic1} alt="" />
        </div>

        <div className="flex flex-col w-[80%] px-24 gap-4 py-28">
          <p className="text-[24px] ">Why I'm a photographer</p>
          <p className="text-[16px] text-[#3C3C3C]  mt-10">
            About Lucas-photography is a form of mindfulness and a <br /> way to
            exist in each moment as fully as possible.It is a <br /> way...
          </p>

          <button className="text-[16px] mt-10 border border-[#3C3C3C] w-44 h-14 hover:bg-[#3C3C3C]  hover:text-white">
            READ MORE
          </button>
        </div>
      </div>

      <div className=" bg-[#FAFAFA] flex">
        <div className="flex flex-col w-[80%] px-24 gap-4 py-28">
          <p className="text-[24px] ">Love And Travel</p>
          <p className="text-[16px] text-[#3C3C3C]  mt-10">
            Travel has been a large part of my life for the past last two <br />{" "}
            years.My amazing photographer girlfriend Kathryn and I <br /> t...
          </p>

          <button className="text-[16px] mt-10 border border-[#3C3C3C] w-44 h-14 hover:bg-[#3C3C3C]  hover:text-white">
            READ MORE
          </button>
        </div>
        <div className="   w-[82%] h-[100%] objectcover">
          <Image src={pic2} alt="" />
        </div>
      </div>

      <div className=" bg-[#FAFAFA] flex">
        <div className="   sm:w-[100%] h-[100%]">
          <Image src={pic3} alt="" />
        </div>

        <div className="flex flex-col w-[80%] px-24 gap-4 py-28">
          <p className="text-[24px] ">FAQs</p>
          <p className="text-[16px] text-[#3C3C3C]  mt-10">
            Q:We love the feeling of your photography!What is the <br /> next
            step? A:Great! I'd love to hear your story and <br />
            connect.Se...
          </p>

          <button className="text-[16px] mt-10 border border-[#3C3C3C] w-44 h-14 hover:bg-[#3C3C3C]  hover:text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
