import vanlife from "@/assets/Image/9.jpg";
import leave from "@/assets/Image/leave1.jpg";
import Image from "next/image";
export default function Vanlife() {
  return (
    <div className="w-full mb-20">
      <div className="flex justify-center  mt-28 pl-20 pr-20">
        <div className="border-black border-t mt-6 w-[90%] mr-10 "></div>
        <div>
          <Image src={leave} className="w-[210px]  object-cover" alt="" />
        </div>
        <div className="border-black border-t w-[90%] mt-6 ml-10"></div>
      </div>

      <div className="flex justify-center flex-wrap gap-20 mt-32">
        <div className="w-[90%] sm:w-[459px]">
          <div
            className="text-[1.375rem]"
            style={{
              fontFamily: "Sorts Mill Goudy",
              fontWeight: "lighter",
              letterSpacing: "0.01em",
              lineHeight: "1.3em",
            }}
          >
            Love & vanlife
          </div>
          <div className="mt-8 text-[#3c3c3c] font-light">
            My amazing girlfriend Kathryn and I love to travel. We are both
            photographers, red heads, and adventurers! Seattle is our home but
            we shoot all over the country, and spend part of the year in the
            Southwest in our Sprinter VanRV. Kathryn and I would love to connect
            and photograph you along the way, or at home in the Pacific
            Northwest. Send me an email to inquire about availability, pricing,
            or just to share your story.
          </div>
          <div className="mt-8">
            <Image
              src={vanlife}
              className="object-cover w-[90%] sm:w-auto"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#FAFAFA] w-[90%] sm:w-[572px] flex flex-col items-center pb-6">
          <div
            style={{ fontFamily: "Sorts Mill Goudy" }}
            className="text-[1.375rem] text-center mt-20"
          >
            Where we are headed!
          </div>
          <div className="mt-20 text-[16px] font-light">
            <div className="">November</div>
            <div>Portland Oregon</div>
          </div>

          <div className="mt-8 text-[16px] font-light">
            <div>November</div>
            <div>Portland Oregon</div>
          </div>

          <div className="mt-8 text-[16px] font-light">
            <div>November</div>
            <div>Portland Oregon</div>
          </div>
          <div className="mt-8 text-[16px] font-light">
            <div>November</div>
            <div>Portland Oregon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
