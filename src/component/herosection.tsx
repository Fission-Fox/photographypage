import Image from "next/image";
import React from "react";
import heroimage from "@/assets/Image/herosection1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Herosection() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
      style={{ width: "100%", zIndex: "1" }}
    >
      <SwiperSlide>
        <div>
          <Image
            src={heroimage}
            alt=""
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src={heroimage}
            alt=""
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src={heroimage}
            alt=""
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src={heroimage}
            alt=""
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
