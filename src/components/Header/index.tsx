"use client";
// import LogoLight from "@/assets/images/logo-light.png";
import logo from "@/assets/Image/designpartnerlogo1.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Mobilenav from "../Layout/mobilenav";
export default function Header() {
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && !scrollingDown) {
        // Scroll down, hide the header
        setScrollingDown(true);
      } else if (currentScroll < 1 && scrollingDown) {
        // Scroll up, show the header
        setScrollingDown(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll, scrollingDown]);

  return (
    <>
      <nav className="!hidden md:!flex fixed " style={{ zIndex: 5 }}>
        <div
          id="scroll-header"
          className={`flex items-center justify-center gap-10 xl:gap-20  py-7 w-full fixed transition-all duration-300 top-0
                text-[0.6875rem] lg:text-[20px] font-light
            ${
              scrollingDown
                ? "bg-[rgba(255,255,255,0.8)] bg-opacity-20 transform translate-y-0"
                : "bg-transparent"
            }`}
        >
          <Link
            href={"/mystory"}
            className="text-[#3c3c3c]  cursor-pointer hover:underline text-[0.6875rem] lg:text-[20px]"
          >
            About Us
          </Link>

          <Link href={"/"}>
            <Image
              src={logo}
              className="w-[139px] h-[139px] object-cover "
              alt=""
            />
          </Link>

          <Link
            href={"/pricing"}
            className="text-[#3c3c3c]  cursor-pointer hover:underline text-[0.6875rem] lg:text-[20px]"
          >
            Packages
          </Link>
        </div>
      </nav>
      <Mobilenav />
    </>
  );
}
