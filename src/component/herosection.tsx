import heroimage from "@/assets/Image/img.png";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import './styles.css';
// Import Swiper styles
import "swiper/css";

export default function Herosection() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
      style={{ width: "100%", zIndex: "1" }}
    >
      <SwiperSlide>
        <div className="relative">
          <Image
            src={heroimage}
            alt=""
            style={{
              objectFit: "cover",
              height: "100vh",
              width: "100%",
            }}
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
