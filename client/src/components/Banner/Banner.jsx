import "./Banner.css";
import gjamLogo from "../../images/logo-transparent.png";
import lineGradient from "../../images/line-gradient.svg";
import jamVideo from "../../images/jam.mp4";
import { Link } from "react-router-dom";
import banner from "../../images/banner-01.png";
import Navbar from "../Nav/Navbar";

export default function Banner() {
  return (
    <div className="featured-jams-banner mb-3">
      <div className="">
        <div className="w-4/5 mix-blend-color-burn fixed flex flex-col items-center top-3 z-50">
          <Navbar />
        </div>
        <div className="relative">
          <img
            className="filter  mix-blend-color-soft-light  opacity-80  "
            src={banner}
            alt=""
          />
        </div>

        <div className="w-2/5 lg:w-2/5 md:w-2/5 sm:w-screen absolute top-0 right-0 ">
          {/* <div className="h-30 bg-white ">test</div> */}

          <img
            className="p-4 absolute top-0 right-0 filter  mix-blend-hard-light hue-rotate-15 brightness-105 "
            src={gjamLogo}
            alt=""
            srcset=""
          />

          {/* <div className="relative h-44 lg:h-96  md:h-72 sm:h-64">
              <p className=" text-sm text lg:text-base md:text-sm  absolute font-gt-mono font-bold drop-shadow-lg  bottom-0 lg:left-10 md:left-5  filter mix-blend-soft-light text-black">
                family-owned, locally grown,{" "}
                <span className=" block"> and freshly bottled.</span>
              </p>
            </div> */}
        </div>
      </div>
    </div>
  );
}
