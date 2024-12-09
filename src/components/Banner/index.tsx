import React from "react";
import { ImageComponet } from "../Image";

export const Banner = () => {
  return (
    <div className="flex flex-1 relative h-96 bg-[#002082] overflow-hidden mx-8 mt-12 rounded-lg">
      <ImageComponet fileName="bg4.svg" className="absolute right-0" />
      <div className="flex flex-1 justify-center align-center items-center">
        <div className="w-5/6">
          <p className="text-5xl text-white">
            Ready to <span className="text-[#43CAFB] inline">Secure</span> Your
            Financial Future?
          </p>
          <p className="text-white text-base mt-2">
            {"Let's start your journey to financial success today."}
          </p>

          <button className="bg-white py-2 px-3 text-[#2858E9] rounded-lg mt-16">{`Book a Free call ->`}</button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center z-10">
        <div className="bg-[#43CAFB80] text-white flex flex-row rounded-lg w-1/2 p-5 items-center">
          <ImageComponet fileName="check_mark_white.svg" className="h-8 w-8" />
          <p className="ml-2">Free Consultation</p>
        </div>

        <div className="mt-3 bg-[#43CAFB80] text-white flex flex-row rounded-lg w-1/2 p-5 items-center">
          <ImageComponet fileName="check_mark_white.svg" className="h-8 w-8" />
          <p className="ml-2">Free Personalised Financial Plan</p>
        </div>
      </div>
    </div>
  );
};
