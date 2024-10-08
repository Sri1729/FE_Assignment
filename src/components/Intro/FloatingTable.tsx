import React from "react";
import { ImageComponet } from "../Image";

export const FloatingTable = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute flex flex-col px-4 py-2 bg-white border-2 border-gray-100 rounded-lg drop-shadow-2xl ${
        className ?? ""
      }`}
    >
      <p className="text-xs font-semibold">Action Plan for You</p>

      <Point text="Invest in NPS" />
      <Point text="Increase Insurance Coverage" />
      <Point text="Invest in Fixed Income" />
    </div>
  );
};

const Point = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row items-center mt-2">
      <ImageComponet fileName="check_mark_icon.svg" />
      <p className="text-[10px] font-thin ml-1">{text}</p>
    </div>
  );
};
