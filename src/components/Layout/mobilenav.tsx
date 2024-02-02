import React from "react";
import Image from "next/image";
import logo from "@/assets/Image/designpartnerlogo1.png";
import Temporaydrawer from "./temporaydrawer";

export default function Mobilenav() {
  return (
    <nav className="flex justify-between md:hidden absolute  ">
      <div className="items-center ">
        <Image
          src={logo}
          className=" w-[200px] h-[150px] object-cover "
          alt=""
        />
      </div>
      <div>
        <Temporaydrawer />
      </div>
    </nav>
  );
}
