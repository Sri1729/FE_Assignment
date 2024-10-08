import React from "react";
import { ImageComponet } from "../Image";
import { Reviews } from "./Reviews";

export const Testimonials = () => {
  return (
    <div className="flex flex-col flex-1 align-center justify-center items-center mt-24">
      <div className="flex border-2 rounded-xl px-4 py-2 border-gold align-center justify-center">
        <ImageComponet fileName="star.svg" />
        <p className="pl-2 text-gold">Testimonials</p>
      </div>

      <p className="text-5xl mt-8 mx-96 text-center text-semibold">
        Success Stories:
      </p>
      <p className="text-5xl mx-48 text-center text-semibold">
        From Financial Stress to Fiscal Bliss
      </p>

      <p className="text-base font-medium text-grey mx-48 mt-4 text-center">
        Don't just take our word for it. Hear from clients who've transformed
        their financial future with The Financialist.
      </p>

      <Reviews />
    </div>
  );
};
