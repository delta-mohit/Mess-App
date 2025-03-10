import React from "react";
import Link from "next/link";

const navItems = [
  {
    href: "/today-menu",
    name: "Today Menu",
  },
  {
    href: "/notice-board",
    name: "Notice Board",
  },
  {
    href: "/full-menu",
    name: "Full Menu",
  },
  {
    href: "/feedback",
    name: "Feedback",
  },
  {
    href: "/boarder-info",
    name: "Student's Info",
  },
  {
    href: "/staff",
    name: "Mess Staff",
  },
  {
    href: "/suggestion",
    name: "Food Item Suggestion",
  },
  {
    href: "/profile",
    name: "My Profile",
  },
];

const Navbar = ({ details }) => {
  const pageTitle = `${details.message} ${details.name} `;
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl border-2 z-[1] mt-3 w-72 p-2 shadow space-y-4"
            >
              {" "}
              {navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="text-xl font-semibold lg:block hidden">{pageTitle}</a>
        </div>
        <div className="navbar-center lg:hidden flex">
          <a className="text-xl font-semibold">{pageTitle}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar h-10 w-10">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
