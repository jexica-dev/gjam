import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" text-2xl p-5 mix-blend-color-burn text-white bg-indigo-800  w-80 font-gt-mono flex flex-row justify-around">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className=" inline-flex w-full justify-center px-4 py-2  "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            aria-controls="responsive-navbar-nav"
          >
            JAMS
            {/* <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg> */}
          </button>
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
            <a
              href="/jams"
              class="text-white block pl-5 pt-2 pb-1 text-base "
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Collection
            </a>
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
          <button
            type="button"
            className=" inline-flex w-full justify-center px-4 py-2  "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            aria-controls="responsive-navbar-nav"
          >
            LOGIN
            {/* <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg> */}
          </button>
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
            <a
              href="/signin"
              class="text-white block pl-5 pt-2 pb-1 text-base "
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account Info
            </a>
            <a
              href="/cart"
              class="text-white block  text-base pl-5 py-1"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Cart
            </a>
          </div>
        </div>
      </div>

      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className=" inline-flex w-full justify-center px-4 py-2  "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            aria-controls="responsive-navbar-nav"
          >
            ABOUT
            {/* <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg> */}
          </button>
        </div>

        {/* <a>
        <Link className=" text-white hover:brightness-200 hover:invert ">
          JAMS
        </Link>
      </a> */}
        {/* <a>
        <Link className=" text-white hover:brightness-200 hover:invert ">
          ABOUT
        </Link>
      </a> */}
        {/* <a>
        <Link className=" text-white hover:brightness-200 hover:invert ">
          ABOUT
        </Link>
      </a> */}
      </div>
    </div>
  );
}
