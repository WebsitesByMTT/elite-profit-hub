"use client";
import Signup from "@/components/Signup";
import Underline from "@/components/Underline";
import React, { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const getStarted = [
    {
      title: "Open an account on EPH",
      lists: [
        "Fill in all the required fields of the application form on the Sign up page.",
        "Submit your registration by clicking on 'Sign Up'.",
        "After that you will be able to log into your account and make your first investment.",
      ],
    },
    {
      title: "Make deposit",
      lists: [
        "Go to Make deposit page.",
        "Choose the investment plan, fill in desired amount of deposit, choose Tether(TRC20),(BEP20), Bitcoin, TRON, Litecoin, BNB and click on 'Make deposit' button.",
        "If you want to make a deposit using your account balance choose Tether(TRC20),(BEP20), Bitcoin, TRON, Litecoin, BNB from 'Funding from the account balance'.",
        "On the next page you need to confirm your deposit by clicking 'Process'.",
        "After that you will be redirected to desired Payment processor. Then follow the instructions of Payment processor.",
      ],
    },
    {
      title: "Withdraw your funds",
      lists: [
        "Go to Withdraw page.",
        "Then choose payment processor and fill in the amount that you want to withdraw and click 'Withdraw'.",
      ],
    },
  ];
  return (
    <div className="py-10">
      <div className="w-fit mx-auto group">
        <h2 className="text-4xl text-white font-semibold text-center pb-12 pt-7">
          <span className="text-[#00FFAF]">Get</span> Started
          <Underline />
        </h2>
      </div>

      <div className="w-[92%] md:w-[70%] bg-[#000000] flex flex-col gap-5 md:gap-8 items-center mx-auto py-[1.5rem] px-4 rounded-2xl boxShadow">
        {getStarted?.map((item, ind) => (
          <div key={ind} className="w-full">
            <div className="w-full">
              {ind !== 0 && (
                <span className="inline-block w-[84%] h-[1px] bg-gradient-to-tr from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] ml-[8%]"></span>
              )}
              <div className="text-2xl md:text-3xl text-center pt-2.5 font-semibold">
                {item?.title}
              </div>
              <span className="inline-block w-[84%] h-[1px] bg-gradient-to-tr from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] ml-[8%]"></span>
            </div>
            <div className="w-full px-7 pt-5 md:pt-12 pb-6 md:pb-10">
              <ul className="list-decimal space-y-5 text-lg md:text-xl tracking-wide">
                {item?.lists?.map((list, lind) => (
                  <li key={lind}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-16">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="text-black px-8 font-semibold py-2 border-[1px] border-black rounded-lg bg-[#00FFAF]"
        >
          Sign Up
        </button>
      </div>
      {open && <Signup open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Page;
