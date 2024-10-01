import React from "react";

const page = () => {
  const faq = [
    {
      title: "General Questions",
      info: [
        {
          ques: "What is the business of the EPH Company, and does it have official registration?",
          ans: "EPH Company is a UK investment company that has an office in London. We conduct fully legal activities and are engaged in stock and crypto markets.",
        },
        {
          ques: "Why doesn't open https://eliteprofithub.com/ no access to my account?",
          ans: "Most likely you are using a Proxy IP or VPN IP. We recommend logging in from your IP address, which is provided to you by your Internet provider.",
        },
        {
          ques: "What are the advantages of working with the EPH company?",
          ans: "The main advantages of the EPH project are its profitability, reliability and convenience for clients. Due to the experience of our team and the developed investment strategies, we can guarantee significant increase in your capital within a short time frame.",
        },
        {
          ques: "Do I need to visit the company's office in order to become an investor?",
          ans: "There is no need to visit our office, because cooperation with investors is carried out through a modern investment resource. You just need to register on our site, and after this you will be able to perform investment actions through your personal account.",
        },
        {
          ques: "How may I earn on the EPH Company platform?",
          ans: "You are entitled either to invest and get a regular income from your assets or become partner of the company and earn by involving new investors. Be sure to combine investment with friends in order to get the largest profit while cooperating with the EPH company.",
        },
        {
          ques: "What information should I provide to create an account?",
          ans: "We require our clients to specify the minimum amount of information. We understand the desire of investors to preserve the personal anonymity and confidentiality of their data, so when registering you will need to specify only the information that is necessary to identify you in the system.",
        },
        {
          ques: "How many accounts in the project can I create?",
          ans: "Using multiple accounts is prohibited by the company, each participant can create only one account in the project. If we find out you have multiple accounts, all your accounts will be blocked, and the funds in these accounts will be frozen.",
        },
        {
          ques: "Why is it profitable to cooperate with your company?",
          ans: "Our investment offers are distinguished by the stability and balance as well as high yield. To become familiar with our investment offers and clarify the yield on each investment offer, please visit the 'Investment Plans' section of our website.",
        },
      ],
    },
    {
      title: "Investment Questions",
      info: [
        {
          ques: "What are the risks for EPH company's investors?",
          ans: "The risks for our investors are minimized due to the professional team and our experience. Each investor will receive a profit according to the terms of the investment plan that was chosen.",
        },
        {
          ques: "How to open a deposit in EPH Company?",
          ans: "You can open a deposit in the corresponding menu in your personal account. Please note, we have the right to reverse back any deposit you just created to your account balance without explaining the reasons. In this case, you need to withdraw your funds from the account balance to your wallet.",
        },
        {
          ques: "Which payment methods do you accept?",
          ans: "We accept a majority of payment methods including Tether, Bitcoin, Ethereum, Litecoin, Tron, BNB",
        },
        {
          ques: "My deposit was not added instantly, what's wrong?",
          ans: "The reason for this can be that you deposited via Cryptocurrency which require confirmations before getting added.",
        },
        {
          ques: "How many confirmations required for deposit via cryptocurrency before deposit gets added?",
          ans: "Three confirmations are required for cryptocurrency deposits.",
        },
        {
          ques: "Am I able to create several deposits at a time and make profit from them simultaneously?",
          ans: "Yes, you can place money on any number of deposits from a single account and make profit from multiple investment plans",
        },
        {
          ques: "Can I add extra deposit to the current deposit?",
          ans: "No, you cannot do this. You can make another deposit.",
        },
        {
          ques: "Is there any charge for a deposit transaction?",
          ans: "We do not charge for making deposits or withdrawals. Please, consider a charge from payment systems.",
        },
      ],
    },
    {
      title: "Payouts Questions",
      info: [
        {
          ques: "How often can I request a withdrawal?",
          ans: "You have no limits. You can withdraw when you have no zero-balance.",
        },
        {
          ques: "What is the minimum withdrawal amount?",
          ans: "Minimum withdrawal is 3 USD for Tether, Bitcoin, Ethereum, Litecoin, Tron, BNB.",
        },
        {
          ques: "I made two deposits, using two different electronic payment systems. Can I combine the profits from the two deposits into a single withdrawal request?",
          ans: "Regulation of payments does not permit to withdraw funds to electronic payment system, different than the one, deposit was made from. Thus, you cannot combine the profits accrued on your account balance from the two deposits into a single withdrawal request.",
        },
        {
          ques: "How can I reinvest my profits?",
          ans: "You may reinvest your profits in order to earn more instead withdrawing funds. Just specify, that you are going to make a payment from the balance by clicking on the 'Balance' button before choosing a payment system while investing.",
        },
        {
          ques: "I did not receive the funds to my wallet, although the withdrawal request has been made more than 2 days ago (48 hours). What should I do?",
          ans: "Please check carefully the details on your account, most likely, the reason for the delay was that at registration you provided the incorrect wallet number of the electronic payment system to which you have created a request a payment of funds. It is also possible that you have created multiple accounts in our system.",
        },
        {
          ques: "Am I able to request the deposit withdrawal before the end of investment period?",
          ans: "No. The deposit will be included in the total return.",
        },
        {
          ques: "How long does it take for the withdrawals to complete?",
          ans: "Withdrawals are not instantly processed. To ensure maximum protection of your account and funds, we carefully check all requests for withdrawals and process them manually. This process might take up to 48 hours.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-[4rem]">
      <h2 className="text-4xl text-white font-semibold text-center">
        <span className="text-[#00FFAF]">F</span>AQ
      </h2>
      {faq.map((item, ind) => (
        <div
          key={ind}
          className="w-[92%] md:w-[80%] bg-[#000000] flex flex-col gap-8 items-center mx-auto py-[3rem] px-6 rounded-2xl boxShadow"
        >
          <p className="font-semibold text-3xl">{item.title}</p>
          <hr className="w-[70%] md:w-[50%] h-[2px] bg-gradient-to-r from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] mx-auto" />
          <div className="flex flex-col gap-5 py-4">
            {item.info.map((data, ind) => (
              <div key={ind} className="flex gap-4">
                <p className="text-xl text-[#00FFAF]">{ind + 1}.</p>
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-[#00FFAF]">{data.ques}</p>
                  <p>{data.ans}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default page;
