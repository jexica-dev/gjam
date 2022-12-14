import React from "react";
import gjamLogo from "../../images/logo-transparent.png";
import Navbar from "./Navbar";
import checker from "../../images/checker-bg.svg";
import checkersm from "../../images/checker-sm.svg";

export default function RightNav() {
  return (
    <div className="  mix-blend-difference opacity-0 w-0 lg:w-2/6 lg:fixed lg:top-0 lg:right-0 lg:text-center lg:opacity-100 md:opacity-0 sm:opacity-0  ">
      <div className=" top-0 right-0 z-50">
        <img className="absolute z-0 opacity-60" src={checker} alt="" />
        <div className="absolute p-10 z-50">
          <img className=" mix-blend-color-dodge" src={gjamLogo} alt="" />
        </div>
      </div>
      <div className="justify-center h-screen flex flex-col">
        <div className=" flex justify-around">
          <Navbar className="absolute" />
          {/* <img className="absolute z-0" src={checkersm} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
