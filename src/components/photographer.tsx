import React from "react";
import Image from "next/image";
import pic1 from "@/assets/images/pic1.jpg";
import pic2 from "@/assets/images/pic2.jpg";
import pic3 from "@/assets/images/pic3.jpg";
import pic4 from "@/assets/images/pic4.jpg";

export default function Photographer() {
  return (
    <div className=" flex  flex-col justify-center gap-3 xl:gap-0 ">
      <div className=" flex flex-wrap  w-[90%] xl:w-[1257px]  justify-center  items-center m-auto ">
        <div>
          <Image
            className="w-[628px]"
            style={{ objectFit: "cover" }}
            src={pic1}
            alt=""
          />
        </div>

        <div className="bg-[#fafafa] w-[628px] h-[220] sm:h-[420px] flex justify-center m-auto px-3 sm:px-0">
          <div>
            <p
              className="text-[30px] mt-20 mb-12 md:mb-14 "
              style={{
                fontFamily: "Sorts Mill Goudy",
                fontSize: "1.375rem",
                letterSpacing: "0.03em",
                wordSpacing: "0em",
                lineHeight: "1.3em",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              {" "}
              Why I'm a photographer
            </p>
            <p
              className="mb-10 text-[12px] sm:text-[16px] 2xl:text-[20px] text-[#3C3C3CB3]"
              style={{
                fontFamily: "Overpass, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0em",
                wordSpacing: "0em",
                lineHeight: "1.73em",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              About Lucas-Photography is a form of mindfulness and a <br /> way
              to exist in each moment as fully as possible.It is a <br />
              way...
            </p>
            <div>
              <button
                className=" border text-[#3C3C3C] hover:bg-[black] hover:text-white w-56 h-14 mb-10"
                style={{
                  fontFamily: "Overpass, sans-serif",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.21em",
                  wordSpacing: "0em",
                  lineHeight: "1.87em",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap  w-[90%] xl:w-[1257px]  justify-center  items-center m-auto ">
        <div className="bg-[#fafafa] w-[628px] h-[220] sm:h-[420px] flex justify-center m-auto px-3 sm:px-0">
          <div>
            <p
              className="text-[30px] mt-20 mb-12 md:mb-14 "
              style={{
                fontFamily: "Sorts Mill Goudy",
                fontSize: "1.375rem",
                letterSpacing: "0.03em",
                wordSpacing: "0em",
                lineHeight: "1.3em",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              {" "}
              Love and Travel
            </p>
            <p
              className="mb-10 text-[12px] sm:text-[16px] 2xl:text-[20px] text-[#3C3C3CB3]"
              style={{
                fontFamily: "Overpass, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0em",
                wordSpacing: "0em",
                lineHeight: "1.73em",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              Travel has been a large part of my life for the past last two{" "}
              <br />
              years.My amazing photographer girlfriend Kathryn and I <br />
              t...
            </p>
            <div>
              <button
                className=" border text-[#3C3C3C] hover:bg-[black] hover:text-white w-56 h-14 mb-10"
                style={{
                  fontFamily: "Overpass, sans-serif",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.21em",
                  wordSpacing: "0em",
                  lineHeight: "1.87em",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-[628px]"
            style={{ objectFit: "cover" }}
            src={pic2}
            alt=""
          />
        </div>
      </div>

      <div className=" flex flex-wrap  w-[90%] xl:w-[1257px]  justify-center  items-center m-auto  ">
        <div>
          <Image
            className="w-[628px]"
            style={{ objectFit: "cover" }}
            src={pic3}
            alt=""
          />
        </div>

        <div className="bg-[#fafafa] w-[628px] h-[220] sm:h-[420px] flex justify-center m-auto px-3 sm:px-0">
          <div>
            <p
              className="text-[30px] mt-20 mb-12 md:mb-14 "
              style={{
                fontFamily: "Sorts Mill Goudy",
                fontSize: "1.375rem",
                letterSpacing: "0.03em",
                wordSpacing: "0em",
                lineHeight: "1.3em",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              {" "}
              FAQS
            </p>
            <p
              className="mb-10 text-[12px] sm:text-[16px] 2xl:text-[20px] text-[#3C3C3CB3] "
              style={{
                fontFamily: "Overpass, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0em",
                wordSpacing: "0em",
                lineHeight: "1.73em",
                textTransform: "none",
                fontWeight: "normal",
              }}
            >
              Q:We love the feeling of your photography!What is the <br /> next
              step? A:Great! I'd love to hear your story and <br />
              connect.Se...
            </p>
            <div>
              <button
                className=" border text-[#3C3C3C] hover:bg-[black] hover:text-white w-56 h-14 mb-10"
                style={{
                  fontFamily: "Overpass, sans-serif",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.21em",
                  wordSpacing: "0em",
                  lineHeight: "1.87em",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <hr className=" w-[250px] xl:w-[550px]" />
        <Image className="items-center w-[200px]" src={pic4} alt="" />
        <hr className="  w-[250px] xl:w-[550px] " />
      </div>
    </div>
  );
}
