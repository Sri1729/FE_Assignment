import React from "react";
import { ImageComponet } from "../Image";

const clients = [
  "zerodha",
  "wint",
  "ditto",
  "quicko",
  "smallcase",
  "bombayShavingCompany",
  "flatheads",
];
export const Clients = () => {
  return (
    <div className="flex flex-1 my-10 items-center justify-center">
      {clients.map((item) => (
        <ImageComponet
          className="mx-10 h-5"
          fileName={`${item}.png`}
          key={item}
        />
      ))}
    </div>
  );
};
