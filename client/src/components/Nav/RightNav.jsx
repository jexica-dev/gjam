import React from "react";
import gjamLogo from "../../images/logo-transparent.png";
import Navbar from "./Navbar";
import checker from "../../images/checker-bg.svg";
import checkersm from "../../images/checker-sm.svg";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";

export default function RightNav(props) {
  if (props.search) {
    console.log("SEARCH BAR ON PAGE");
  } else {
    console.log("FIX IT");
  }

  return (
    <div className="  mix-blend-difference opacity-0 w-0 lg:w-2/6 lg:fixed lg:top-0 lg:right-0 lg:text-center lg:opacity-100 md:opacity-0 sm:opacity-0  ">
      <div className=" top-0 right-0 z-50">
        <img className="absolute z-0 opacity-60" src={checker} alt="" />
        <div className="absolute p-10 z-50">
          <Link to="/" exact>
            <img className=" mix-blend-color-dodge" src={gjamLogo} alt="" />
          </Link>
        </div>
      </div>
      <div className=" justify-center h-screen flex flex-col">
        <div className=" flex justify-around">
          <Navbar className="absolute" />
          {/* <img className="absolute z-0" src={checkersm} alt="" /> */}
        </div>
        {props.search ? (
          <>
            <div className=" flex flex-row ">
              <Search
                onSubmit={props.handleSubmit}
                handleSearch={props.handleSearch}
              />
              <Sort
                onSubmit={props.handleSubmit}
                handleSort={props.handleSort}
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
