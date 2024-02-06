import Image from "next/image";
import React from "react";
import stephan from "@/assets/Image/stephan1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Realword() {
  return (
    <>
      <div className="mt-20 !font-normal !text-[#3c3c3c]">
        <div
          className="text-center "
          style={{
            fontFamily: "Over",
            wordSpacing: "0em",
            letterSpacing: "0.2em",
            lineHeight: "1.87em",
            fontSize: "1.375rem",
          }}
        >
          REAL WORDS FROM MY CLIENTS
        </div>
      </div>
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
          <div className="flex justify-center">
            <div className="bg-[#FAFAFA] w-[80%] flex flex-wrap justify-evenly pt-28 pb-28 mt-20">
              <div>
                <Image
                  className="w-[234px] sm:w-[318px] h-[300px] sm:h-[476px] mt-16"
                  style={{ objectFit: "cover" }}
                  src={stephan}
                  alt=""
                />
              </div>
              <div className="w-[90%] sm:w-[451px] ">
                <div
                  className="text-[27px] text-center mt-4"
                  style={{ fontFamily: "Sorts Mill Goudy" }}
                >
                  Carla & Stephan
                </div>
                <div className="text-center mt-10 text-[#3c3c3c] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, excepturi quia. Omnis maxime, doloremque inventore
                  rerum repellat laudantium fuga, nam facilis a incidunt, at
                  accusantium molestias voluptatibus illo eos iure velit iusto?
                  Impedit, maxime. Ex, mollitia veritatis architecto eum
                  nesciunt voluptate excepturi molestias voluptates
                  consequuntur, possimus sequi praesentium quo dicta.
                </div>

                <div className="text-center mt-10 text-[#3c3c3c] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, excepturi quia. Omnis maxime, doloremque inventore
                  rerum repellat laudantium fuga, nam facilis a incidunt, at
                  accusantium molestias voluptatibus illo eos iure velit iusto?
                  Impedit, maxime. Ex, mollitia veritatis architecto eum
                  nesciunt voluptate excepturi molestias voluptates
                  consequuntur, possimus sequi praesentium quo dicta.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-[#FAFAFA] w-[80%] flex flex-wrap justify-evenly pt-28 pb-28 mt-20">
              <div>
                <Image
                  className="w-[234px] sm:w-[318px] h-[300px] sm:h-[476px] mt-16"
                  style={{ objectFit: "cover" }}
                  src={stephan}
                  alt=""
                />
              </div>
              <div className="w-[90%] sm:w-[451px] ">
                <div
                  className="text-[27px] text-center mt-4"
                  style={{ fontFamily: "Sorts Mill Goudy" }}
                >
                  Carla & Stephan
                </div>
                <div className="text-center mt-10 text-[#3c3c3c] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, excepturi quia. Omnis maxime, doloremque inventore
                  rerum repellat laudantium fuga, nam facilis a incidunt, at
                  accusantium molestias voluptatibus illo eos iure velit iusto?
                  Impedit, maxime. Ex, mollitia veritatis architecto eum
                  nesciunt voluptate excepturi molestias voluptates
                  consequuntur, possimus sequi praesentium quo dicta.
                </div>

                <div className="text-center mt-10 text-[#3c3c3c] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, excepturi quia. Omnis maxime, doloremque inventore
                  rerum repellat laudantium fuga, nam facilis a incidunt, at
                  accusantium molestias voluptatibus illo eos iure velit iusto?
                  Impedit, maxime. Ex, mollitia veritatis architecto eum
                  nesciunt voluptate excepturi molestias voluptates
                  consequuntur, possimus sequi praesentium quo dicta.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
