import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function Footer() {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" px-16 py-3 mt-20 hover:bg-black hover:text-white">
          <button className="text-[20px]">@LUCASMOBLEY</button>
        </div>
      </div>
      <div className="flex flex-wrap  justify-evenly mt-8 gap-3">
        <div className="flex gap-4">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className="text-center text-[20px]">
          Subscribe to my <br />
          newsletter
        </div>
        <div className="border pl-6 flex items-center">
          <input
            type="text"
            className="w-[90%] sm:w-[362px] h-[58px] outline-none"
            placeholder="ENTER YOUR EMAIL"
          />
          <ArrowRightIcon />
        </div>
      </div>

      <div className="text-center mt-6 ">
        ©2024 Lucas Mobley Photography Inc. // Seattle Washington //
        206-455-5978
      </div>
    </div>
  );
}
