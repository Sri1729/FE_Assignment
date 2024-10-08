import React from "react";
import { ImageComponet } from "../Image";
import { FloatingIcon } from "./FloatingIcon";
import { FloatingTable } from "./FloatingTable";
import { Button } from "./Button";
import { Perks } from "./Perks";

export const Intro = () => {
  return (
    <div className="flex relative h-[658px] w-full bg-[linear-gradient(117deg,rgba(243,245,254,1)_0%,rgba(243,245,254,1)_97%)]">
      {/* Background */}
      <ImageComponet fileName="bg.svg" className="w-full absolute bottom-0" />

      {/* Floating icons */}

      <FloatingIcon fileName="chart_icon.png" className="top-24 left-48" />
      <FloatingIcon fileName="home_icon.png" className="top-24 right-48" />
      <FloatingIcon fileName="table_icon.png" className="bottom-36 left-32" />
      <FloatingTable className="bottom-40 right-12" />
      <ImageComponet
        fileName="arrow_down_icon.svg"
        className="absolute w-6 h-6 bottom-0 left-1/2 transform -translate-x-1/2"
      />

      <div className="flex flex-col w-full h-full bg-transparent items-center mt-[104px] z-10">
        <p className="text-6xl text-bold">Empower Your</p>
        <p className="text-6xl text-bold text-primaryBlue">Financial Future</p>

        <p className="mt-5 text-xl font-medium">
          Tailored solutions for managing, investing, and growing your wealth
        </p>

        <div className="mt-16">
          <Button />
        </div>

        <div className="mt-32">
          <Perks />
        </div>
      </div>
    </div>
  );
};
