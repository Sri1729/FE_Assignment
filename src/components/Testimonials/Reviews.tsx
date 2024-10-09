import React from "react";
import { ImageComponet } from "../Image";

const reviewsArray = [
  {
    image: "person1.png",
    job: "Co-founder at Wintwealth",
    name: "Abhik Patel",
    text: "As a client, my primary criteria for selecting a financial advisor was not maximizing returns but finding someone I can trust and who is unbiased. The Financialist met these criteria and has exceeded my expectations",
  },
  {
    image: "person1.png",
    job: "Business and Product, Zomato",
    name: "Sahil Kaul",
    text: "The one thing that really stands out is the unbiased advice to maximize the probability of achieving your goals and the financial discipline that the team helps you set.",
  },
  {
    image: "person1.png",
    job: "Cofounder - Flat heads",
    name: "Ganesh Balakrishnan",
    text: "I was impressed by their candid and no- nonsense approach to investing. The plan that they created for us was custom- tailored based solely on what we wanted to accomplish as a family we.",
  },
  {
    image: "person1.png",
    job: "SVP, head of growth",
    name: "Varun Gupta",
    text: "Young dynamic knowledgeable helpful planners. Good inputs and overall ownership! I would recommend them to people who are looking to sort out their financial mess and then plan for a better future.",
  },
  {
    image: "person1.png",
    job: "Data scientists",
    name: "Abhi/Deepak",
    text: "Before marriage, managing finances was simple; however, we needed guidance as a couple. The Financialist team helped us merge our finances with a clear, concise plan.",
  },
  {
    image: "person1.png",
    job: "Salesforce architect",
    name: "Sheshank",
    text: "The Financialist helped the significance of goal-based investing considering the time horizon. Their expert guidance and well- structured plan enabled me to achieve my housing goal systematically.",
  },
];

export const Reviews = () => {
  return (
    <div className="relative mx-48 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {reviewsArray.map((item) => (
        <ReviewCard
          image={item.image}
          job={item.job}
          name={item.name}
          text={item.text}
          key={item.name}
        />
      ))}

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

interface ReviewCardProps {
  text: string;
  image: string;
  name: string;
  job: string;
}

const ReviewCard = ({ image, job, name, text }: ReviewCardProps) => {
  return (
    <div className="flex flex-col border-2 rounded-xl border-[#E1E8FF] px-7 py-3">
      <p className="text-base flex flex-1">{text}</p>

      <div className="flex flex-row mt-4">
        <ImageComponet fileName={image} className="rounded-full h-10 w-10" />

        <div className="flex flex-col ml-2">
          <p className="text-sm">{name}</p>
          <p className="text-xs text-[#7B8088]">{job}</p>
        </div>
      </div>
    </div>
  );
};
