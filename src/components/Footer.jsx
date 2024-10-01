import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
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

  const icons = [
    "/SDA1.png",
    "/SDA2.png",
    "/SDA3.png",
    "/SDA4.png",
    "/SDA5.png",
    "/SDA6.png",
  ];

  return (
    <div className="py-4 flex flex-col gap-8">
      <hr className="w-[95%] h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto mt-[5rem] mb-[1rem]" />
      <div className="px-[3rem] py-6 flex justify-between items-center flex-col lg:flex-row">
        <div className="flex lg:flex-row flex-col gap-4 items-center flex-wrap">
          <div className="flex flex-row  gap-4">
            <div className="relative w-[2.5rem] h-[3.5rem]">
              <Image src="/logo.png" alt="logo" fill />
            </div>
            <div className="flex flex-col justify-center text-white">
              <p className="text-2xl font-semibold">ELITE PROFIT HUB</p>
              <p className="text-sm">SHORT TERM INVESTMENT</p>
            </div>
          </div>
          <div className="flex whitespace-nowrap md:flex-nowrap flex-wrap gap-5 items-center justify-center">
            {header.map((item, ind) => (
              <Link key={ind} href={item.link} className="text-white ">
                <button className="uppercase font-light hover:opacity-80 transition-all">{item.name}</button>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 text-white font-semibold items-center mt-6">
          <p className="text-xl whitespace-nowrap">
            <span className="text-[#00FFAF]">We</span> Accept
          </p>
          <div className="flex md:flex-nowrap flex-wrap justify-center gap-3">
            {icons.map((item, ind) => (
              <div key={ind} className="h-[3rem] w-[3rem] relative">
                <Image
                  src={item}
                  alt="icon"
                  fill
                  className="p-2 border-[1px] rounded-full border-[#00FFAF] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-white text-center">
        Copyright © 2022-2025 All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
