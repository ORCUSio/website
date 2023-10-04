import React from "react";

const Card = ({ heading, para }) => {
  return (
    <div className="w-[40ch]">
      <h1 className="font-bold text-sm mb-3 ">{heading}</h1>
      <p className="text-xs font-normal tracking-widest">{para}</p>
    </div>
  );
};

const BuildSecurity = () => {
  return (
    <div className="px-32 my-16">
      <section className="">
        <div className="border-[1px] px-10 py-16 flex gap-10 rounded-lg">
          <div className="flex flex-col gap-5 mt-4">
            <h1 className="font-bold text-3xl">Built with Security in Mind</h1>
            <Card
              heading={"PCI DSS, RBI PSS, ISO 27001 audited Infra"}
              para={
                "Enjoy best-in-class security with the greatest degree of compliance and the latest regulatory framework."
              }
            />
            <Card
              heading={"256-bit SSL secured data transmission"}
              para={
                "Transact securely with data encryption using 256-bit SSL, which is one of the most secure encryption methods ensuring privacy, authentication & integrity."
              }
            />

            <Card
              heading={"2FA secured transactions"}
              para={
                "Safe and secure access to your online account with Two-Factor Authentication (PIN, OTP & Biometrics), adding an extra layer of security."
              }
            />
            <Card
              heading={"Privacy and Consent protected"}
              para={
                "In accordance with strict security standards, we protect the confidentiality of data, and do not disclose any sensitive information."
              }
            />
          </div>
          <img
            src="https://static.instantpay.in/assets/web/security/security_illus.svg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default BuildSecurity;
