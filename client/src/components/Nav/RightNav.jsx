import React from "react";
import gjamLogo from "../../images/logo-transparent.png";
import Navbar from "./Navbar";
import checker from "../../images/checker-bg.svg";
import checkersm from "../../images/checker-sm.svg";
import { Link, NavLink } from "react-router-dom";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import CartButton from "../CartButton/CartButton";

export default function RightNav(props) {
  return (
    <div className="relative lg:h-fit  mix-blend-difference opacity-0 h-0 lg:w-2/6 lg:fixed lg:top-0 lg:right-0 lg:text-center lg:opacity-100 md:opacity-0 md:h-0 sm:opacity-0 sm:h-0 ">
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
          <Navbar user={props.user} className="absolute" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-2/5">
        <div className=" ">
          {props.dashboard ? (
            <>
              <div className=" place-content-center  grid grid-col gap-5 w-full ">
                <NavLink to="/jams/new">
                  <button className="text-2xl p-5 mix-blend-hard-light hover:bg-red-600 text-white bg-indigo-800  w-80 font-gt-mono flex flex-row justify-around">
                    Create Jam
                  </button>
                </NavLink>
                <NavLink to="/signout">
                  <button className="text-2xl p-5 mix-blend-hard-light hover:bg-red-600 text-white bg-indigo-800  w-80 font-gt-mono flex flex-row justify-around">
                    Sign Out
                  </button>
                </NavLink>
              </div>
            </>
          ) : null}

          {props.search ? (
            <>
              <div className="place-content-center  grid grid-col gap-5 w-full ">
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

      <div className="absolute bottom-0 right-10 z-50">
        <CartButton />
      </div>
    </div>
  );
}
