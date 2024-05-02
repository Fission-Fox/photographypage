import adventure from "@/assets/Image/1.jpg";
import sarahdan from "@/assets/Image/10.jpg";
import dansarah from "@/assets/Image/2.jpg";
import nathan from "@/assets/Image/3.jpg";
import photographer from "@/assets/Image/4.jpg";
import tintypes from "@/assets/Image/6.jpg";
import Image from "next/image";
export default function Images() {
  return (
    <div className="mt-32">
      <div
        className="text-center font-light text-[0.6875rem]"
        style={{
          fontFamily: "Over",
          wordSpacing: "0em",
          letterSpacing: "0.2em",
          lineHeight: "1.87em",
        }}
      >
        FEATURED POSTS FROM WEDDINGS, ADVENTURES AND PORTRAITS
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-4 mt-16 px-2">
        <div className="w-[90%] sm:w-auto">
          <div className="flex gap-1 lg:gap-5 ">
            <div className="w-[50%] md:w-[297px] group h-[150px] md:h-[208px] relative">
              <Image
                src={adventure}
                className="w-[100%] h-[100%] group-hover:scale-95 transition duration-700 cursor-pointer absolute"
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div
                style={{ fontFamily: "Sorts Mill Goudy" }}
                className="relative  flex justify-center group-hover:scale-95 transition duration-700 items-center text-white text-[24px] top-20"
              >
                Adventures
              </div>
            </div>
            <div className="w-[50%] sm:w-[297px] h-[150px] md:h-[208px] relative">
              <Image
                src={sarahdan}
                className="w-[100%] h-[100%] hover:scale-95 transition duration-700 cursor-pointer absolute"
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div
                style={{ fontFamily: "Sorts Mill Goudy" }}
                className="relative  flex justify-center group-hover:scale-95 transition duration-700 items-center text-white text-[24px] top-20"
              >
                Adventures
              </div>
            </div>
          </div>
          <div className="mt-1 lg:mt-5 w-[100%] sm:w-[600px] lg:w-[618px] h-[200px] md:h-[413px] relative">
            <Image
              src={photographer}
              className="hover:scale-95 transition duration-700 cursor-pointer w-[100%] h-[100%]  object-cover absolute"
              alt=""
              // style={{  objectFit: "cover" }}
            />
            <div
              style={{ fontFamily: "Sorts Mill Goudy" }}
              className="relative  flex justify-center group-hover:scale-95 transition duration-700 items-center text-white text-[24px] top-20 md:top-52"
            >
              Adventures
            </div>
          </div>
        </div>

        <div className="w-[90%] sm:w-auto ">
          <div className=" w-[100%] sm:w-[600px] lg:w-[618px] h-[200px] md:h-[413px] relative">
            <Image
              src={tintypes}
              className="hover:scale-95 transition duration-700 cursor-pointer w-[100%] h-[100%]  object-cover absolute"
              // style={{  objectFit: "cover" }}
              alt=""
            />
            <div
              style={{ fontFamily: "Sorts Mill Goudy" }}
              className="relative  flex justify-center group-hover:scale-95 transition duration-700 items-center text-white text-[24px] top-20 md:top-52"
            >
              Adventures
            </div>
          </div>
          <div className="flex gap-1 lg:gap-5 mt-1 lg:mt-5">
            <div className="w-[50%] md:w-[297px] h-[150px] md:h-[208px] relative">
              <Image
                src={nathan}
                className="w-[100%] h-[100%] hover:scale-95 transition duration-700 cursor-pointer absolute"
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div
                style={{ fontFamily: "Sorts Mill Goudy" }}
                className="relative  flex justify-center group-hover:scale-95 transition duration-700 items-center text-white text-[24px] top-20"
              >
                Adventures
              </div>
            </div>
            <div className="w-[50%] sm:w-[297px] h-[150px] md:h-[208px] relative">
              <Image
                src={dansarah}
                className="w-[100%] h-[100%] hover:scale-95 transition duration-700 cursor-pointer absolute"
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div
                style={{ fontFamily: "Sorts Mill Goudy" }}
                className="relative  flex justify-center group-hover:scale-95 transition duration-700 items-center text-white text-[24px] top-20"
              >
                Adventures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
