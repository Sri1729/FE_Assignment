import React from "react";
import { ImageComponet } from "../Image";

const founders = [
  {
    image: "priyank.png",
    name: "Priyank Shah",
    role: "Co-Founder and CEO, CA | CFA",
  },
  {
    image: "vatsal.png",
    name: "Vatsal Majithia",
    role: "Co-Founder and CIO, CA | CFA",
  },
];

export const AboutUs = () => {
  return (
    <div className="flex flex-col flex-1 align-center justify-center items-center mt-24">
      <div className="flex border-2 rounded-xl px-4 py-2 border-gold align-center justify-center">
        <ImageComponet fileName="team.svg" />
        <p className="pl-2 text-gold">The Team</p>
      </div>

      <p className="text-5xl my-8 mx-96 text-center text-semibold">About Us</p>

      <p className="text-base font-medium text-grey mx-72 text-center">
        At The Financialist, we believe that financial success is a journey, not
        a destination. Our team of seasoned experts is dedicated to helping you
        navigate the complex world of finance with confidence and clarity. With
        a personalized approach and cutting-edge strategies, we empower you to
        make informed decisions that align with your unique goals and
        aspirations.
      </p>

      <div className="flex flex-1 mx-28 w-5/6">
        {founders.map((item) => (
          <Founder
            image={item.image}
            name={item.name}
            role={item.role}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};

const Founder = ({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex flex-1 w-full flex-col align-center justify-center items-center bg-[#F7F9FF] border border-[#E1E8FF] rounded-xl mx-4 py-3">
      <ImageComponet fileName={image} className="rounded-full h-20 w-20" />
      <p className="text-lg mt-3">{name}</p>
      <p className=" text-base text-primaryBlue">{role}</p>

      <ImageComponet fileName="social_icons.svg" className="mt-2" />
    </div>
  );
};
