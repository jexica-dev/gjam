import "./Banner.css";
import gjamLogo from "../../images/logo-transparent.png";
import lineGradient from "../../images/line-gradient.svg";
import { Link } from "react-router-dom";
import banner from "../../images/banner-02.png";
import Navbar from "../Nav/Navbar";
import { useState, useEffect, useRef } from "react";

export default function Banner(props) {
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
              ? " w-4/5 fixed top-10 flex flex-col items-center z-50 mix-blend-color-burn  opacity-0 lg:opacity-100 md:opacity-0 sm:opacity-0"
              : " hidden"
          }`}
        >
          <Navbar user={props.user} />
        </div>
        <div
        // style={show ? { marginTop: lastScrollY } : {}}
        >
          <img
            className="relative mix-blend-color-difference opacity-0 lg:opacity-60 md:opacity-0 sm:opacity-0"
            src={banner}
            alt=""
          />
        </div>

        <div className="w- lg:w-2/5 md:w-5/6 sm:w-screen absolute sm:block top-0 right-0 ">
          <img
            className="sm:h-fit   p-7 lg:p-7 md:p-16 sm:p-24 absolute top-0 right-0 filter  mix-blend-hard-light hue-rotate-15 brightness-105 "
            src={gjamLogo}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
