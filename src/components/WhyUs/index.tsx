import React from "react";
import { ImageComponet } from "../Image";
import { Table } from "./Table";

export const WhyUs = () => {
  return (
    <div className="flex flex-col flex-1 align-center justify-center items-center mt-24">
      <div className="flex border-2 rounded-xl px-4 py-2 border-gold align-center justify-center">
        <ImageComponet fileName="whyus.svg" />

        <p className="pl-2 text-gold">Why Us</p>
      </div>

      <p className="text-5xl my-8 mx-96 text-center text-semibold">
        Why Choose The Financialist?
      </p>

      <p className="text-base font-medium text-grey mx-[460px] text-center">
        Experience meets innovation in your financial journey. We're not just
        advisors; we're your partners in building lasting wealth.
      </p>

      <Table />
    </div>
  );
};
