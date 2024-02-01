import React from "react";

export default function Text() {
  return (
    <div className="flex flex-col items-center mb-9 pt-10">
      <div className="text-[31px]">Let's text!</div>
      <div className="mt-8">Message</div>
      <div className="border-b-2">
        <input
          type="text"
          className="w-[100%] sm:w-[787px] h-[91px] outline-none text-center"
        />
      </div>

      <div className="mt-8">Name</div>
      <div className="border-b-2">
        <input
          type="text"
          className="w-[100%] sm:w-[787px] h-[91px] outline-none text-center"
        />
      </div>

      <div className="mt-8">Phone number</div>
      <div className="border-b-2">
        <input
          type="email"
          className="w-[100%] sm:w-[787px] h-[91px] outline-none text-center"
        />
      </div>

      <div className="mt-14 border px-20 py-4 hover:bg-black hover:text-white text-[20px]">
        <button>SEND</button>
      </div>
    </div>
  );
}
