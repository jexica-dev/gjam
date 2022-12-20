import { useMediaQuery } from "react-responsive";
import React from "react";
import "./Footer.css";

export default function Footer(props) {
  const smScreen = useMediaQuery({ query: "(max-width: 640px)" });

  let full;
  let space;

  props.banner ? (full = "w-full") : (full = "w-2/3");
  props.banner ? (space = " pb-24") : (space = "");

  let footerContainer = ` font-gt-america lg:text-lg text-base  tracking-widest hover:font-normal
opacity-60 fixed bottom-5 z-0"`;

  let media = "w-screen";

  let nameStyles = "font-thin text-md lg:text-lg md:text-lg sm:text-sm";
  return (
    <div className={space + ` w-screen`}>
      <footer
        className={smScreen ? footerContainer + media : full + footerContainer}
      >
        &copy; <span className="font-bold opacity-50 ">GJAM</span>&nbsp;
        <span className="font-thin">:</span>&nbsp;
        <a
          className="hover:opacity-100 "
          href="https://www.linkedin.com/in/garrettfoster24/"
        >
          <span className="font-thin text-lg">Garrett</span>
        </a>
        &nbsp;·&nbsp;
        <a className="hover:opacity-100 " href="http://jexica.design">
          <span className="font-thin text-lg">Jexica</span>
        </a>
        &nbsp;·&nbsp;
        <a
          className="hover:opacity-100 "
          href="https://www.linkedin.com/in/casey-mcclenathan/"
        >
          <span className="font-thin text-lg">Casey</span>
        </a>
        &nbsp;·&nbsp;
        <a
          className="hover:opacity-100 "
          href="https://www.linkedin.com/in/joshua-ramnanan/"
        >
          <span className={nameStyles}>Josh</span>
        </a>
      </footer>
    </div>
  );
}
