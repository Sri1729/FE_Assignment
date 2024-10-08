import React from "react";
import { ImageComponet } from "../Image";

export const Information = () => {
  return (
    <div className="flex flex-1 flex-col mx-48 mt-10">
      <div className="flex flex-1">
        <InformationCard
          filePath="service_image_1.png"
          title="Goal-Based Financial Management"
          description="Transform your dreams into achievable Financial milestones. Our tailored strategies ensure your money works as hard as you do."
        />
        <InformationCard
          filePath="service_image_2.png"
          title="Risk Mitigation & Insurance Planning"
          description="Protect what matters most. We develop comprehensive risk management solutions to safeguard your wealth and secure your family's future."
        />
      </div>

      <div className="flex flex-1">
        <InformationCard
          filePath="service_image_3.svg"
          title="Fixed Income Investment Advisory"
          description="Stability meets growth. Our expert guidance helps you navigate the fixed income market for consistent, reliable returns."
        />
        <InformationCard
          filePath="service_image_4.png"
          title="Tax Planning & Filing"
          description="Keep more of what you earn. Our strategies ensure you're tax-efficient while staying fully compliant with all legal requirements."
        />
        <InformationCard
          filePath="service_image_5.png"
          title="Estate & Legacy Planning"
          description="Your legacy, secured. We help you design robust plans to preserve and transfer your wealth seamlessly to future generations."
        />
      </div>
    </div>
  );
};

const InformationCard = ({
  filePath,
  title,
  description,
}: {
  filePath: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-1 flex-col text-center items-center align-center justify-center m-1 border-2 border-[#E1E8FF] rounded-xl px-10 pt-6 pb-2">
      <div className="relative">
        <ImageComponet fileName={filePath} className="rounded-xl" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <p className="mt-1 text-sm">{title}</p>
      <p className="mx-auto mt-2 text-[#6B7280] text-xs">{description}</p>
    </div>
  );
};
