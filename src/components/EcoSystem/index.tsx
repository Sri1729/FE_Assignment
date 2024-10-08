import React from "react";
import { ImageComponet } from "../Image";
import { System } from "./System";

export const EcoSystem = () => {
  return (
    <div className="flex flex-col flex-1 align-center justify-center items-center mt-24">
      <div className="flex border-2 rounded-xl px-4 py-2 border-gold align-center justify-center">
        <ImageComponet fileName="ecosystem.svg" />
        <p className="pl-2 text-gold">The Eco System</p>
      </div>
      <p className="text-5xl my-8 mx-96 text-center text-semibold">
        Our Wealth Management Ecosystem
      </p>
      <p className="text-base font-medium text-grey mx-[460px] text-center">
        Integrate all aspects of your finances—investments, risk, taxes, and
        estate planning—into one comprehensive platform for informed decisions
        and secure growth.
      </p>

      <div className="flex flex-1 mx-24 self-stretch">
        <System />
      </div>
    </div>
  );
};
