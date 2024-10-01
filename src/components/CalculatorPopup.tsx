import React, { useEffect } from "react";
import Cross from "./svg/Cross";
import Calculator from "./svg/Calculator";
interface SignupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CalculatorPopup: React.FC<SignupProps> = ({ open, setOpen }) => {
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
      <div className="relative w-[80%] mx-auto md:w-[50%] lg:w-[35%] bg-[#000000] flex flex-col gap-8 px-4 md:px-[3rem] animateopen py-[2rem] rounded-2xl boxShadow">
        <button
          className="absolute right-2 top-2 p-2 rounded-full border-[1px] border-[#00FFAF] h-[2rem] md:h-auto"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Cross />
        </button>
        <p className="text-white text-3xl text-left">Calculator</p>
        <form
          // onSubmit={handleSubmit}
          className="flex flex-col gap-5 py-4 w-[80%] mx-auto"
        >
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <input
            className="bg-transparent col-span-3 text-xl outline-none text-center"
            placeholder="Choose plan"
          />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <input
            className="bg-transparent col-span-3 text-xl outline-none text-center"
            placeholder="Deposit Amount"
          />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-4 flex-1">
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
              <input
                className="bg-transparent text-xl outline-none text-center w-full"
                placeholder="Total Profit %"
              />
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
              <input
                className="bg-transparent text-xl outline-none text-center w-full"
                placeholder="Total Profit $"
              />
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => {
              setOpen(false);
            }}
            className="flex gap-3 px-4 py-2 bg-[#00FFAF] w-fit rounded-lg mx-auto"
          >
            <Calculator />
            <span className="text-black font-semibold">Calculate</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CalculatorPopup;
