import React from "react";
import Image from "next/image";
import elegant from "@/assets/IMAGES/ELEGANT.jpg";

export default function Love() {
  return (
    <div className="flex justify-center">
      <div className="flex   flex-wrap w-[80%] bg-[#FAFAFA] ">
        <div className="flex flex-col lg:flex-row ">
          <div className="">
            <Image
              src={elegant}
              className="w-[549px] h-[417px]"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="  gap-4 md:gap-12 w-[554px] flex flex-col items-center text-[#3C3C3CB3]   ">
            <div>
              <h2 className="text-[30px]  "> Love</h2>
              <p>
                {" "}
                A gallery of elopement photography from weddings, love <br />
                and marriage. “Your task is not to seek for love, but <br />{" "}
                merely to s...
              </p>
              <div>
                <button className=" border text-[#3C3C3C] hover:bg-[black] hover:text-white  ">
                  {" "}
                  READ MORE{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
