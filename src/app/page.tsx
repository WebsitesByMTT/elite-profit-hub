"use client";
import CalculatorPopup from "@/components/CalculatorPopup";
import Calculator from "@/components/svg/Calculator";
import FileWithdrawals from "@/components/svg/FileWithdrawals";
import GeniuneIncestment from "@/components/svg/GeniuneIncestment";
import ProManagement from "@/components/svg/ProManagement";
import RealRegistered from "@/components/svg/RealRegistered";
import ReliableInvestment from "@/components/svg/ReliableInvestment";
import StrongDDOS from "@/components/svg/StrongDDOS";
import Underline from "@/components/Underline";
import Link from "next/link";
import { useState } from "react";

interface InvestmentPlansProps {
  setOpen: (open: boolean) => void;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <InvestmentPlans setOpen={setOpen} />
      <Features />
      <AboutUs />
      <div className="flex items-center justify-center py-[5rem] gap-8 flex-col text-2xl font-semibold">
        <p className="text-white">How To Get Started?</p>
        <Link
          className="text-white px-5 py-3 border-[2px] border-[#00FFAF] rounded-lg relative overflow-hidden hover hover:text-black hover:after:z-[-1] after:translate-y-[100%] hover:after:translate-y-0 hover:after:transition-all hover:after:duration-500 hover:after:top-0 hover:after:left-0 hover:after:absolute hover:after:w-full hover:after:h-full hover:after:bg-[#00FFAF]"
          href="/start"
        >
          Get Started
        </Link>
      </div>
      {open && <CalculatorPopup open={open} setOpen={setOpen} />}
    </div>
  );
}

const InvestmentPlans: React.FC<InvestmentPlansProps> = ({ setOpen }) => {
  const data = [
    {
      percent: "0.8",
      min: "5",
      max: "50",
    },
    {
      percent: "1.1",
      min: "51",
      max: "200",
    },
    {
      percent: "1.6",
      min: "200",
      max: "No Limit",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-center py-4 pt-7">
      <div className="group w-fit mx-auto">
        <h2 className="text-4xl text-white font-semibold">
          Investment <span className="text-[#00FFAF]">Plans</span>
        </h2>
        <Underline />
      </div>
      <div className="flex flex-wrap gap-8 md:px-10 justify-center md:justify-evenly">
        {data.map((item, ind) => (
          <InverstmentCard
            key={ind}
            percent={item.percent}
            max={item.max}
            min={item.min}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
};

const InverstmentCard = ({
  percent,
  max,
  min,
  setOpen,
}: {
  percent: string;
  max: string;
  min: string;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className="bg-gradient-to-b items-stretch from-[#00FFAF] to-[#2FA70080] p-[2px] rounded-xl w-[26%] min-w-[300px]">
      <div className="px-4 py-6 bg-[#010101] rounded-xl flex flex-col gap-5 h-full items-center">
        <div className="flex justify-between gap-10">
          <div className="h-[6rem] w-[6rem] rounded-full flex flex-col items-center justify-center border-[2px] text-white border-[#00FFAF]">
            <p>{percent} %</p>
            <p>Daily</p>
          </div>
          <div className="flex flex-col text-white text-left ">
            <span>Minimum - {min}$</span>
            <span>
              {" "}
              Maximum - {max}
              {max !== "No Limit" && "$"}
            </span>
            <span>Prinicipal - Included</span>
          </div>{" "}
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="flex gap-3 px-4 py-2 bg-[#00FFAF] w-fit rounded-lg"
        >
          <Calculator />
          <span className="text-black font-semibold">Calculate</span>
        </button>
        <p className="text-white">After 30 Days - Return Principal</p>
      </div>
    </div>
  );
};

const Features = () => {
  const data = [
    {
      icon: <GeniuneIncestment />,
      text: "Geniune Investment Platform",
    },
    {
      icon: <RealRegistered />,
      text: "Real Registered Company",
    },
    {
      icon: <ProManagement />,
      text: "Pro Management Team",
    },
    {
      icon: <StrongDDOS />,
      text: "Strong DDoS Protection",
    },
    {
      icon: <FileWithdrawals />,
      text: "Fast Withdrawals",
    },
    {
      icon: <ReliableInvestment />,
      text: "Reliable Investment Plans",
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-center py-[4rem]">
      <div className="w-fit mx-auto group">
        <h2 className="text-4xl text-white font-semibold">
          <span className="text-[#00FFAF]">Our</span> Features
        </h2>
        <Underline />
      </div>
      <div className="grid lg:grid-cols-3 gap-10 py-10 w-fit md:w-[80%] mx-auto md:grid-cols-2 grid-cols-1">
        {data.map((item, ind) => (
          <div key={ind}>
            <div className="flex justify-between items-center gap-6 md:gap-4">
              <div className="h-[3.5rem]">{item.icon}</div>
              <p className="text-white text-2xl w-[80%] text-left">
                {item.text}
              </p>
            </div>
            <hr className="w-full h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto my-6 md:hidden" />
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <div className="w-[95%] md:w-[80%] bg-[#000000] flex flex-col gap-8 items-center mx-auto  py-4 md:py-[5rem] px-4 rounded-2xl boxShadow">
        <div className="w-fit mx-auto group">
          <h2 className="text-4xl text-white font-semibold">
            About <span className="text-[#00FFAF]">Us</span>
          </h2>
          <Underline />
        </div>
        <p className="text-white text-center w-[95%] md:w-[80%]">
          EPH Limited, a privately-held UK-registered investment firm, launched
          an online platform on August 26, 2024, under the leadership of [Name].
          The company&apos;s goal is to optimize resource utilization, mitigate
          risks, and ensure economic stability and sustainability. With a team
          of seasoned experts, EPH Limited aims to empower clients to achieve
          financial freedom through modern investment tools, including stock
          trading, securities, and cryptocurrency markets. By employing a
          cutting-edge trading strategy, the company consistently generates
          maximum returns with minimal risk. With professionalism and
          accountability as its core strengths, EPH Limited offers a diverse
          range of investment options, enabling both novice and experienced
          investors to achieve impressive returns and double their investments
          in a short span.
        </p>
        <Link
          className="text-white px-3 w-fit py-1 border-[1px] rounded-lg hover:bg-[#00FFAF] transition-all duration-500 hover:text-black hover:border-[#000]"
          href="/"
        >
          Join Now
        </Link>
      </div>
      <hr className="w-[70%] h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto mt-[5rem] mb-[1rem]" />
    </>
  );
};
