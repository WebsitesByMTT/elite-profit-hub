"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Signup from "./Signup";
import Sidebar from "./svg/Sidebar";
import Cross from "./svg/Cross";

const Header = () => {
  const header = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "get started",
      link: "/start",
    },
    {
      name: "faq",
      link: "/faq",
    },
    {
      name: "terms",
      link: "/terms",
    },
    {
      name: "support",
      link: "/support",
    },
  ];
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleLinkClick = () => {
    setNavbar(false);
  };
  return (
    <>
      <div className="px-8 py-6 flex justify-between items-center">
        <Link href="/" className="flex gap-4">
          <div className="relative w-[2.5rem] h-[3.5rem]">
            <Image src="/logo.png" alt="logo" fill />
          </div>
          <div className="flex flex-col justify-center text-white">
            <p className="text-2xl font-semibold">ELITE PROFIT HUB</p>
            <p className="text-sm">SHORT TERM INVESTMENT</p>
          </div>
        </Link>
        <button className="block lg:hidden w-6" onClick={() => setNavbar(true)}>
          <Sidebar />
        </button>
        <div
          className={`lg:static transition-all duration-300 fixed top-0 right-0 z-[100] bg-[#282727] w-[60%] md:w-[40%] h-full lg:bg-transparent lg:h-auto lg:w-auto lg:p-0 px-5 lg:translate-x-0 py-8 ${
            navbar ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <div
            className={`flex-col lg:flex lg:flex-row gap-6 text-md ${
              navbar ? "flex" : "hidden"
            }`}
          >
            <div className={navbar ? "lg:hidden flex justify-end" : "hidden"}>
              <button onClick={handleLinkClick} className="w-4">
                <Cross />
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              {header.map((item, ind) => (
                <Link
                  key={ind}
                  href={item.link}
                  onClick={handleLinkClick}
                  className="text-white "
                >
                  <button className="uppercase font-semibold">
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex flex-row justify-center gap-2 text-md">
              <Link
                className="text-white px-3 w-fit py-1 border-[1px] rounded-lg hover:bg-[#00FFAF] transition-all duration-500 hover:text-black hover:border-[#000]"
                href="/"
                onClick={handleLinkClick}
              >
                Login
              </Link>
              <button
                onClick={() => {
                  setOpen(!open);
                  handleLinkClick();
                }}
                className="text-black px-3 py-1 border-[1px] border-black rounded-lg bg-[#00FFAF] transition-all duration-500 hover:bg-[#000] hover:text-white hover:border-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && <Signup open={open} setOpen={setOpen} />}
    </>
  );
};

export default Header;
