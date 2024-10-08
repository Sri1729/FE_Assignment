import React from "react";
import { ImageComponet } from "../Image";
import { Information } from "./Information";

export const Services = () => {
  return (
    <div className="flex flex-col flex-1 align-center justify-center items-center mt-24">
      <div className="flex border-2 rounded-xl px-4 py-2 border-gold align-center justify-center">
        <ImageComponet fileName="services.svg" />
        <p className="pl-2 text-gold">Services</p>
      </div>

      <p className="text-5xl my-8 mx-96 text-center text-semibold">
        Comprehensive Financial Solutions for Every Stage of Your Journey
      </p>

      <p className="text-base font-medium text-grey mx-[460px] text-center">
        Your Financial goals, our expertise. We transform complex challenges
        into clear, actionable plans for lasting prosperity.
      </p>

      <Information />
    </div>
  );
};
