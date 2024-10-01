"use client";
import React, { useEffect, useState } from "react";
import Cross from "./svg/Cross";

interface SignupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ open, setOpen }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="h-screen  w-full fixed inset-0 top-auto left-auto flex items-center justify-center bg-[#00000098] overflow-y-hidden ">
      <div className="relative w-[90%] mx-auto md:w-[70%] lg:w-[45%] bg-[#000000] flex flex-col gap-8 items-center  px-4 md:px-[3rem] animateopen py-[2rem] rounded-2xl boxShadow">
        <button
          className="absolute right-2 top-2 p-2 rounded-full border-[1px] border-[#00FFAF] h-[2rem] md:h-auto"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Cross />
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 py-4 w-full"
        >
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <div className="grid grid-cols-4">
            <label className="text-xl col-span-1">First Name:</label>
            <input
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              className="bg-transparent col-span-3 text-xl outline-none"
              placeholder="Enter Name"
            />
          </div>
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />

          <div className="grid grid-cols-4">
            <label className="text-xl col-span-1">Last Name:</label>
            <input
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              className="bg-transparent col-span-3 text-xl outline-none"
              placeholder="Enter Name"
            />
          </div>
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />

          <div className="grid grid-cols-4">
            <label className="text-xl col-span-1">Your Email:</label>
            <input
              name="email"
              onChange={handleChange}
              value={data.email}
              className="bg-transparent col-span-3 text-xl outline-none"
              placeholder="Enter Name"
            />
          </div>
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />

          <div className="grid grid-cols-4">
            <label className="text-xl col-span-1">Password:</label>
            <input
              name="password"
              onChange={handleChange}
              value={data.password}
              className="bg-transparent col-span-3 text-xl outline-none"
              placeholder="Enter Name"
            />
          </div>
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <button
            type="submit"
            className="text-black px-3 py-1 text-xl border-[1px] border-black rounded-lg bg-[#00FFAF] w-fit mx-auto"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
