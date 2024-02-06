import Image from "next/image";
import React from "react";
import heroimage from "@/assets/Image/downtown.jpg";
export default function Herosection() {
  return (
    <div>
      <Image
        src={heroimage}
        alt=""
        style={{ objectFit: "cover", height: "100vh", width: "100%" }}
      />
    </div>
  );
}
