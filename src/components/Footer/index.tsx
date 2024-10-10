import React from "react";
import { ImageComponet } from "../Image";

export const Footer = () => {
  return (
    <div className="flex flex-1 flex-col mx-8 mt-12">
      <div className="flex flex-1 flex-row">
        <div className="flex flex-col basis-2/3">
          <ImageComponet fileName="logo.png" className="h-10 w-64" />
          <ImageComponet
            fileName="social_icons_footer.svg"
            className="h-6 w-32 my-6"
          />

          <p className="text-base w-1/2 mb-3">
            2,Vimala Bhavan, Sharma Industrial Estate, Goregaon East, Mumbai,
            Maharashtra 400063, IN
          </p>

          <p>© 2024 Finfam Investment Advisors Private Limited</p>
        </div>
        <div className="basis-1/3 flex-row flex flex-row">
          <div className="basis-1/3">
            <p className="text-[#2858E9] my-1">Company</p>
            <p className="text-base my-1">About Us</p>
            <p className="text-base my-1">Get in Touch</p>
            <p className="text-base my-1">FAQ</p>
            <p className="text-base my-1">Privacy policy</p>
            <p className="text-base my-1">Terms of Use</p>
          </div>
          <div className="basis-2/3">
            <p className="text-[#2858E9]">Quick Links</p>
            <p className="text-base my-1">How it Works</p>
            <p className="text-base my-1">Brochure</p>
            <p className="text-base my-1">Investor Charter</p>
            <p className="text-base my-1">Regulatory Disclosures</p>
            <p className="text-base my-1">Complaint Redressal Mechanism</p>
          </div>
        </div>
      </div>

      <div className="mt-6 mb-3">
        <p className="font-semibold text-xs">
          Finfam Investment Advisors Private Limited
        </p>
        <p className="text-xs mt-1 w-3/4">
          Registered Name: Finfam Investment Advisors Private Limited | SEBI RIA
          Registration No: INA000018036 | BASL Membership ID: BASL2001 | CIN:
          U67190MH2021PTC373220 | Type of Registration: Non-Individual |
          Validity of registration: June 06, 2023 – Perpetual | Address: 1201,
          Cts, 137/B, Silver Leaf Wing A, Akurli Road, Opp. Gaushala, Kandivali
          East, 400101
        </p>
      </div>

      <div className="mb-6 mt-3">
        <p className="font-semibold text-xs">Disclosure:</p>
        <p className="text-xs mt-1 ">
          Investment in securities market are subject to market risks. Read all
          the related documents carefully before investing. Registration granted
          by SEBI, membership of BASL and certification from NISM in no way
          guarantee performance of the intermediary or provide any assurance of
          returns to investors
        </p>
      </div>
    </div>
  );
};
