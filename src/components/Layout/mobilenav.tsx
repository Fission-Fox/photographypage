import logo from "@/assets/Image/designpartnerlogo1.png";
import Image from "next/image";
import Temporaydrawer from "./temporaydrawer";

export default function Mobilenav() {
  return (
    <nav className="!flex z-50  items-center md:!hidden absolute top-[40%] right-5">
      <div>
        <Image src={logo} className="object-cover w-40 " alt="" />
      </div>
      <div className="ml-auto sm:ml-60">
        <Temporaydrawer />
      </div>
    </nav>
  );
}
