import "./Banner.css";
import gjamLogo from "../../images/logo-transparent.png";
import lineGradient from "../../images/line-gradient.svg";
import jamVideo from "../../images/jam.mp4";
import { Link } from "react-router-dom";
import banner from "../../images/banner-01.png";
import Navbar from "../Nav/Navbar";
import { useState, useEffect, useRef } from "react";

export default function Banner() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const hideNav = () => {
  //   window.scrollY > 50 ? setShow(false) : setShow(true);
  // };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navBar = " ";

  return (
    <div className="featured-jams-banner mb-3">
      <div className="">
        <div
          className={`navBar ${
            show
              ? " w-4/5 fixed top-3 flex flex-col items-center z-50 mix-blend-color-burn"
              : " hidden"
          }`}
        >
          <Navbar />
        </div>
        <div
          // style={show ? { marginTop: lastScrollY } : {}}
          className="relative"
        >
          <img src={banner} alt="" />
        </div>

        <div className="w-2/5 lg:w-2/5 md:w-2/5 sm:w-screen absolute top-0 right-0  ">
          <img
            className="p-4 absolute top-0 right-0 filter  mix-blend-hard-light hue-rotate-15 brightness-105 "
            src={gjamLogo}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
