import React from "react";
import { ImageComponet } from "../Image";

export const Button = () => {
  return (
    <div>
      <button className="bg-primaryBlue py-3 px-5 flex text-white rounded-md">
        Book a Free Call
        <ImageComponet fileName="arrow_icon.svg" className="ml-2" />
      </button>

      <p className="text-[#4B5563] text-sm mt-2 font-extralight">
        Trusted by over 10,000 clients
      </p>
    </div>
  );
};
