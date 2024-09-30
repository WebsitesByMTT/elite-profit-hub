"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Signup from "./Signup";

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
        <div>
          <div className="flex gap-6 text-lg">
            <div className="flex gap-5 items-center">
              {header.map((item, ind) => (
                <Link key={ind} href={item.link} className="text-white ">
                  <button className="uppercase font-semibold">
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex gap-2 text-lg">
              <Link
                className="text-white px-3 py-1 border-[1px] rounded-lg"
                href="/login"
              >
                Login
              </Link>
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="text-black px-3 py-1 border-[1px] border-black rounded-lg bg-[#00FFAF]"
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
