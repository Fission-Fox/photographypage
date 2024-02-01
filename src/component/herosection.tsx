import Image from "next/image";
import React from "react";
import heroimage from "@/assets/Image/herosection1.jpg";
export default function Herosection() {
  return (
    <div>
      <Image
        src={heroimage}
        alt=""
        style={{ objectFit: "cover", height: "100vh" }}
      />
    </div>
  );
}
