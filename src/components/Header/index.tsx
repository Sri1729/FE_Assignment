import React from "react";
import { ImageComponet } from "../Image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-12 py-6 flex flex-1">
      <div className="flex flex-1 flex-row align-center justify-between">
        <div>
          <ImageComponet fileName="logo.png" />
        </div>
        <div>
          <Link
            className="mr-8 text-primaryBlue text-base font-medium"
            href={"#services"}
          >
            Services
          </Link>
          <Link
            className="mr-8 text-primaryBlue text-base font-medium"
            href={"#about-us"}
          >
            About
          </Link>
          <Link
            href={"/"}
            className="bg-primaryBlue p-2 text-white rounded-md text-base font-medium"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </div>
  );
};
