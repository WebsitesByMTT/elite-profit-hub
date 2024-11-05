import React, { useEffect, useState } from "react";
import Cross from "./svg/Cross";
import Calculator from "./svg/Calculator";
import toast from "react-hot-toast";
interface SignupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface Plan {
  percentage: number;
  DepositAmount: number;
  MaxDiposit: number;
  MinDeposit: number;
}

const CalculatorPopup: React.FC<SignupProps> = ({ open, setOpen }) => {
  const [profits, setProfits] = useState({ profitsAmount: 0, profitPercantage: 0 })
  const [plan, setPlan] = useState<Plan>({ percentage: 0.8, DepositAmount: 5,MaxDiposit:50,MinDeposit:5});
  const [diposit, setDeposit] = useState(0)

  const options = [
    { percentage: 0.8, DepositAmount: 5 ,MaxDiposit:50,MinDeposit:5},
    { percentage: 1.1, DepositAmount: 51, MaxDiposit:200,MinDeposit:51},
    { percentage: 1.6, DepositAmount: 200,MinDeposit:200 },
  ];

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlan = JSON.parse(e.target.value) as Plan;
    setPlan(selectedPlan);
  };

  useEffect(() => {
    setProfits({ profitsAmount: ((plan?.DepositAmount) * (plan?.percentage * 30)) / 100, profitPercantage: plan?.percentage * 30})
    setDeposit(plan?.DepositAmount)
  }, [plan?.DepositAmount, plan])


  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(Number(e.target.value))
  }

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (plan?.percentage===plan?.percentage&&(diposit<plan?.MinDeposit)) {
      toast.error(`Min Deposit ${plan?.MinDeposit}`)
    } else if(plan?.percentage===plan?.percentage&&(diposit>plan?.MaxDiposit)){
      toast.error(`Max Deposit ${plan?.MaxDiposit}`)
    } else {
    setPlan({ percentage: plan?.percentage, DepositAmount: diposit,MaxDiposit:plan?.MaxDiposit,MinDeposit:plan?.MinDeposit})
    toast.success("Profit Calculated successfully")
    }
  }

  if (!open) return null;
  return (
    <div className="h-screen  w-full fixed inset-0 top-auto left-auto flex items-center justify-center bg-[#00000098] overflow-y-hidden ">
      <div className="relative w-[98%] mx-auto md:w-[50%] lg:w-[45%] bg-[#000000] flex flex-col gap-8 px-2 md:px-[3rem] animateopen py-[2rem] rounded-2xl boxShadow">
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
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-5 py-4 w-[95%] 2xl:w-[80%] mx-auto"
        >
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <div>
            <select onChange={(e) => handlePlanChange(e)} className="bg-transparent w-full text-opacity-65 text-white text-xl outline-none text-center">
              {options?.map((option, index) => (
                <option
                  key={index}
                  value={JSON.stringify({ percentage: option?.percentage, DepositAmount: option?.DepositAmount,MaxDiposit:option?.MaxDiposit,MinDeposit:option?.MinDeposit })}
                >
                  {`${option?.percentage}% daily for 30 days`}
                </option>
              ))}
            </select>
          </div>
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <input
            className="bg-transparent col-span-3 text-xl outline-none text-center"
            onChange={(e) => handleDepositChange(e)}
            value={diposit}
            placeholder="Deposit Amount"
          />
          <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-4 flex-1">
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
              <div className="bg-transparent text-xl outline-none text-center w-full text-white text-opacity-65">Total Profit $</div>
              <div className="text-center text-xl">{profits?.profitsAmount + (plan?.DepositAmount)}</div>
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
              <div className="bg-transparent text-xl outline-none text-center w-full text-white text-opacity-65">Profit Rate %</div>
              <div className="text-center text-xl">{profits?.profitPercantage + 100}%</div>
              <hr className="w-full opacity-40 h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
            </div>
          </div>
          <button
            type="submit"
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
