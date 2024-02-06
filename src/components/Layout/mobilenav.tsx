import React from "react";
import Image from "next/image";
import logo from "@/assets/Image/designpartnerlogo1.png";
import Temporaydrawer from "./temporaydrawer";

export default function Mobilenav() {
  return (
    <nav className="flex  items-center md:hidden absolute top-[40%] right-5">
      <div>
        <Image src={logo} className="object-cover w-40 " alt="" />
      </div>
      <div className="ml-auto sm:ml-60">
        <Temporaydrawer />
      </div>
    </nav>
  );
}
