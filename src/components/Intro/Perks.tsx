import React from "react";
import { ImageComponet } from "../Image";

export const Perks = () => {
  return (
    <div className="flex">
      <Perk filename="expert_icon.svg" text="Expert Advisors" />
      <Perk filename="personal_icon.svg" text="Personalised Strategies" />
      <Perk filename="holistic_icon.svg" text="Holistic Approach" />
    </div>
  );
};

interface PerkProps {
  filename: string;
  text: string;
}
const Perk = ({ filename, text }: PerkProps) => {
  return (
    <div className="flex flex-row items-center mx-5 py-2 px-10 rounded-md border-2 border-[#2858E921] bg-[#2858E908]">
      <ImageComponet fileName={filename} />
      <p className="text-xs ml-2">{text}</p>
    </div>
  );
};
