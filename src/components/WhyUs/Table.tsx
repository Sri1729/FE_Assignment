import React from "react";
import { ImageComponet } from "../Image";
const items: CardProp[] = [
  {
    icon: "expertise.svg",
    title: "Expertise",
    description:
      "Our team brings decades of experience in finance and wealth management.",
  },
  {
    icon: "personalise.svg",
    title: "Personalization",
    description:
      "We tailor our strategies to your unique financial situation and goals.",
  },
  {
    icon: "holistic_icon.svg",
    title: "Holistic Approach",
    description:
      "We consider all aspects of your financial life for comprehensive solutions.",
  },
  {
    icon: "transparency.svg",
    title: "Transparency",
    description:
      "Clear communication and full disclosure are the cornerstones of our service.",
  },
  {
    icon: "innovation.svg",
    title: "Innovation",
    description:
      "We leverage cutting-edge technologies to give you a competitive edge.",
  },
  {
    icon: "accessibility.svg",
    title: "Accessibility",
    description: "Expert advice at your fingertips, whenever you need it.",
  },
];

interface CardProp {
  icon: string;
  title: string;
  description: string;
}
export const Table = () => {
  return (
    <div className="mx-48 mt-10 overflow-hidden rounded-lg border border-[#E1E8FF]">
      <table className="min-w-full border-collapse">
        <tbody>
          {items.map((item, index) => {
            // Start a new row for every 3rd item
            if (index % 3 === 0) {
              return (
                <tr key={index}>
                  {/* Render 3 cells in each row */}
                  {items.slice(index, index + 3).map((subItem, subIndex) => (
                    <td
                      key={subIndex}
                      className="px-4 py-2 border border-[#E1E8FF]"
                    >
                      <Card
                        icon={subItem.icon}
                        title={subItem.title}
                        description={subItem.description}
                      />
                    </td>
                  ))}
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

const Card = ({ description, icon, title }: CardProp) => {
  return (
    <div className="p-5">
      <ImageComponet fileName={icon} />

      <p className="mt-4 text-base">{title}</p>
      <p className="mt-2 text-[#5C5C5C] text-sm">{description}</p>
    </div>
  );
};
