import Underline from "@/components/Underline";
import React from "react";

const page = () => {
  const getStarted = [
    {
      title: "Rules & Agreements",
      lists: [
        "These regulations concern the provision of investment services by the EPH LIMITED company to its customers.",
        "Please read these 'Terms and Conditions' carefully before using our Site.",
        "By using our Site, you are agreeing to be legally bound by these 'Terms and Conditions' and are committing fully and unconditionally to the obligations set out herein.Please note that these 'Terms and Conditions' shall form a binding contract between you and us.",
      ],
    },
    {
      title: "Registration Of The User On The SIite",
      lists: [
        "1.1. In order to use the services of the company, the User has to complete the registration procedure, as a result of which the account is created.",
        "1.2. By the fact of registration, the User confirms acceptance of all the provisions of Terms of Use and accepts all rights and obligations arising in this connection.",
        "1.3. To participate in the project allowed persons over the age of 18. By registering, the User confirms that he/she is of legal age. By registering, the User also agrees and confirms that he/she uses the site in its sole discretion, voluntarily and on his/her own initiative.",
        "1.4. The User undertakes to provide the Company only with only true and current personal information and e-mail address (Registration Data).",
        "1.5. The User agrees to the best of their abilities to maintain and update the Registration Data to keep it current and complete.",
        "1.6. The User undertakes to store all authorization data (password, login) in an environment where third parties are not admitted to them, and take all available actions to protect their personal data from unauthorized and malicious access.",
        "1.7. Each User can have only one account registered from one PC or IP address. Please note! If we find out you have multiple accounts, all of them will be blocked and the funds forfeited without any notice.",
        "1.8. After passing the registration procedure, the User who has expressed a desire to participate in the investment process of the Company becomes the 'Investor'.",
        "1.9. If you are not ready to accept the terms written herewith, please do not register for an account.",
      ],
    },
    {
      title: "Investment Policy",
      lists: [
        "2.1. Every deposit is considered as a private transaction between the Company and the Investor.",
        "2.2. A deposit is considered active if its term has not expired according to the relevant investment plan.",
        "2.3. All accruals in the Personal Account are made according to the chosen investment package.",
        "2.4. Accruals and payouts to the Investor are made only in the currency of the electronic payment system used by that Investor to make deposit.",
        "2.5. The Investor has the right to freely dispose of the funds that are on his personal account.",
        "2.6. Payment of referral commissions is made only in the currency of the electronic payment system used by a particular referral to make deposit. The Company does not pay referral commissions for deposits made by a referral from their account balance.",
        "2.7. The Investor acknowledges and agrees that he has been notified that he cannot unilaterally change their billing information submitted during registration.",
        "2.8. The Investor agrees that before creating a deposit, he carefully checked all the details about the deposit and fully agreed with all the terms and conditions of the selected investment plan.",
        "2.9. The Investor acknowledges and agrees that investment plan that he has chosen cannot be changed after a deposit has been created.",
        "2.10. The nominal value of all active deposits cannot be withdrawn from the system until the deposits expire.",
      ],
    },
    {
      title: "Confidentiality",
      lists: [
        "3.1. The company adheres to the principles of anonymity and confidentiality of personal data of its customers.",
        "3.2. The company does not divulge any data of its customers to third parties that contain their personal information, contact details, as well as the fact of participation. The only information that is displayed publicly is current deposit statistics, which includes the amount of the deposit, payment method and username of the investor.",
        "3.3. Investor's real name is never shown publicly and is never displayed. Investor is allowed to pick any username except for forbidden ones.",
        "2.4. Accruals and payouts to the Investor are made only in the currency of the electronic payment system used by that Investor to make deposit.",
        "3.4. The Company guarantees that customer's data is never, under any circumstances, will fall into the database used for spam by third parties",
        "3.5. All the data giving by customers will only be used to improve the service that we provide them.",
      ],
    },

    {
      title: "Disclaimer",
      lists: [
        "5.1. The Company is not a defendant for the accuracy or correctness of the Customer’s perception of the information content presented on the site. All information posted on the site is advisory and informational and should not be considered as a call for any action.",
        "5.2. The Company shall not be liable for any losses arising from delay in the transmission of the funds due to causes beyond its control. Delays may result from failures in the operation of electronic payment systems that the Investor uses to conduct the investment process or withdraw funds.",
        "5.3. The Company does not bear responsibility for mistakes made by the Investor when completing the payment details.",
        "5.4. The Company is not responsible for temporary interruptions of work or failures in the use of the site, including any failures that have been caused by the service provider.",
        "5.5. The Company shall not be liable for any losses arising from failure of the Investor to hold his PC systems free from malicious software used by third parties to get unauthorized access to Investor’s account. It is Investor’s sole responsibility to check his PC for trojans, key loggers and other malware.",
        "5.6. The Company cannot be a defendant for failures in the work of the site, if they were caused by force majeure circumstances.",
        "5.7. The website administration shall not be liable to User for termination of access to the Website if the User violates any provisions of these 'Terms and Conditions'",
      ],
    },
    {
      title: "Modifying The Website",
      lists: [
        "6.1. The site may develop and change over time. The site administration (https://eliteprofithub.com/) reserves the right to itself for information change on the given site without the prevention. We may amend, update, add to, replace or withdraw elements of the site at any time at our sole discretion.",
      ],
    },
    {
      title: "Changes To These Rules",
      lists: [
        "7.1. The Company is entitled to unilaterally change these 'Terms and Conditions' without notice. Changes shall take legal effect immediately on publication.",
      ],
    },
  ];

  return (
    <div className="pt-10">
      <div className="group w-fit mx-auto">
        <h2 className="text-4xl text-white font-semibold text-center pb-12 pt-7">
          <span className="text-[#00FFAF]">T</span>erms
          <Underline />
        </h2>
      </div>
      {getStarted?.map((item, ind) => (
        <div
          key={ind}
          className="w-[92%] mb-[5%] md:w-[70%] bg-[#000000] flex flex-col gap-5 md:gap-5 items-center mx-auto py-[1.5rem] px-4 rounded-2xl boxShadow"
        >
          <div key={ind} className="w-full">
            <div className="w-full">
              <div className="text-2xl md:text-3xl text-center pt-2.5 font-semibold">
                {item?.title}
              </div>
              <span className="inline-block w-[84%] h-[1px] bg-gradient-to-tr from-[#FFFFFF00] via-[#00FFAF] to-[#FFFFFF00] ml-[8%]"></span>
            </div>
            <div className="w-full px-7 pt-5 md:pt-12 pb-6 md:pb-10">
              <ul className="list-none space-y-7 text-lg md:text-xl tracking-wide">
                {item?.lists?.map((list, lind) => (
                  <li key={lind}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
