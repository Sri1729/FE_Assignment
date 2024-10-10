import React from "react";
import { ImageComponet } from "../Image";

const Faqs = [
  "What services does The Financialist provide?",
  "What does financial planning involve and why is it important?",
  "Can I select specific services I'm interested in?",
];

export const Faq = () => {
  return (
    <div className="flex flex-col flex-1 align-center justify-center items-center mt-24">
      <div className="flex border-2 rounded-xl px-4 py-2 border-gold align-center justify-center">
        <ImageComponet fileName="faq.svg" />
        <p className="pl-2 text-gold">FAQ</p>
      </div>

      <p className="text-5xl my-8 mx-96 text-center text-semibold">
        Frequently Asked Questions
      </p>

      <div className="flex flex-1 flex-col w-2/3">
        {Faqs.map((item, index) => (
          <FaqCard question={item} key={`faq-${index}`} />
        ))}
      </div>

      <div className="mt-2">
        <p className="text-sm">{`See All Faqs >`}</p>
      </div>
    </div>
  );
};

const FaqCard = ({ question }: { question: string }) => {
  return (
    <div
      className="bg-gradient-to-b flex flex-1 flex-row justify-between py-2 px-5 w-full my-2"
      style={{
        background:
          "linear-gradient(180deg, rgba(134, 121, 255, 0) 0%, rgba(46, 47, 96, 0.05) 100%)",
      }}
    >
      <p className="text-base">{question}</p>
      <p className="text-base">+</p>
    </div>
  );
};
