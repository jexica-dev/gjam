import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" text-sm p-2 mix-blend-color-burn text-white bg-slate-700 w-44 font-gt-mono flex flex-row justify-around">
      <div>
        <Link className=" text-white hover:brightness-200 hover:invert  ">
          JAMS
        </Link>
      </div>
      <div>
        <Link className=" text-white hover:brightness-200 hover:invert ">
          ABOUT
        </Link>
      </div>
      <div>
        <Link className=" text-white hover:brightness-200 hover:invert ">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
