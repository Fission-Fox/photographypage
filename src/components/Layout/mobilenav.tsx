import React from "react";
import Image from "next/image";
import logo from "@/assets/Image/designpartnerlogo1.png";
import Temporaydrawer from "./temporaydrawer";

export default function Mobilenav() {
  return (
    <nav className="flex  items-center md:hidden absolute top-[30%] left-12">
      <div className=" pt-16 w-48">
        <Image src={logo} className="object-cover " alt="" />
      </div>
      <div className="">
        <Temporaydrawer />
      </div>
    </nav>
  );
}
