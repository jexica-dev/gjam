import React, { useState } from "react";
import gjamLogo from "../../images/logo-transparent.png";
import { Pivot as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const navBgColor = " mix-blend-overlay";

  return (
    <>
      <div className=" bg-bottom mix-blend-hard-light w-screen fixed z-50 top-0 h-16 bg-gradient08 bg-cover grid grid-cols-1 place-items-center">
        <button
          onClick={handleToggle}
          className="bg-transparent relative flex justify-around z-50"
        >
          <Hamburger toggle={setOpen} toggled={open} color="#ffff95" />
        </button>
      </div>
      <img
        className="px-16 pb-4 pt-16 mix-blend-color-dodge hue-rotate-30 contrast-150 saturate-150"
        src={gjamLogo}
        alt=""
        srcset=""
      />
      <div>
        <ul
          style={
            !open ? { display: "none" } : { display: "", fontSize: "10vw" }
          }
          className={
            !open
              ? "hide"
              : " fixed top-0 opacity-90 pb-5 pt-16 flex flex-col text-left justify-center text-black px-14 bg-gradient01 bg-cover w-screen"
          }
        >
          <li>
            <span className={navBgColor}>
              <Link to="/">featured jams</Link>
            </span>
            {/* <span>&nbsp;&nbsp; &nbsp;&nbsp;</span> */}
          </li>
          <li>
            <span className={navBgColor}>
              <Link to="/jams">collection</Link>
            </span>
            {/* <span>&nbsp;&nbsp; &nbsp;&nbsp;</span> */}
          </li>
          <li>
            <span className={navBgColor}>
              <Link className="" to="/login">
                login : create
              </Link>
            </span>
          </li>
          <li>
            <span className={navBgColor}>
              <Link className="" to="/about">
                about
              </Link>
            </span>
            <span>&nbsp;&nbsp; &nbsp;&nbsp;</span>
          </li>
        </ul>
      </div>
    </>
  );
}
