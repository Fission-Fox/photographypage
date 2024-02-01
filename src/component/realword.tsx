import Image from "next/image";
import React from "react";
import stephan from "@/assets/Image/stephan1.jpg";
export default function Realword() {
  return (
    <div className="mt-20 ">
      <div className="text-center">REAL WORDS FROM MY CLIENTS</div>
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
            <div className="text-[27px] text-center mt-4">Carla & Stephan</div>
            <div className="text-center mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              excepturi quia. Omnis maxime, doloremque inventore rerum repellat
              laudantium fuga, nam facilis a incidunt, at accusantium molestias
              voluptatibus illo eos iure velit iusto? Impedit, maxime. Ex,
              mollitia veritatis architecto eum nesciunt voluptate excepturi
              molestias voluptates consequuntur, possimus sequi praesentium quo
              dicta.
            </div>

            <div className="text-center mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              excepturi quia. Omnis maxime, doloremque inventore rerum repellat
              laudantium fuga, nam facilis a incidunt, at accusantium molestias
              voluptatibus illo eos iure velit iusto? Impedit, maxime. Ex,
              mollitia veritatis architecto eum nesciunt voluptate excepturi
              molestias voluptates consequuntur, possimus sequi praesentium quo
              dicta.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
