import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="z-50 text-2xl p-5 mix-blend-hard-light text-white bg-indigo-800  w-80 font-gt-mono flex flex-row justify-around">
      <div className="relative inline-block text-left">
        <div>
          <NavLink to="/jams">
            <button
              type="button"
              className=" inline-flex w-full justify-center px-4 py-2  "
            >
              JAMS
            </button>
          </NavLink>
        </div>

        <div
          className="absolute right-0 z-10 mt-2 origin-top-right divide-y hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
          aria-controls="responsive-navbar-nav"
          collapseOnSelect
        >
          <div className="py-1" role="none">
            {/* ADDING CREATE BUTTON TO DASHBOARD */}
            <a
              href="#"
              class="text-white block  text-base pl-5 py-1"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Create
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="relative inline-block text-left">
        <div>
          <NavLink to="/dashboard">
            <button
              type="button"
              className=" inline-flex w-full justify-center px-4 py-2  "
            >
              LOGIN
            </button>
          </NavLink>
        </div>
      </div>

      <div className="relative inline-block text-left">
        <NavLink to="/about">
          <button
            type="button"
            className=" inline-flex w-full justify-center px-4 py-2  "
          >
            ABOUT
          </button>
        </NavLink>
      </div>
    </div>
  );
}
