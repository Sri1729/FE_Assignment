import React from "react";
import { ImageComponet } from "../Image";

export const FloatingIcon = ({
  className,
  fileName,
}: {
  className?: string;
  fileName: string;
}) => {
  return (
    <div
      className={`absolute flex w-12 h-12 items-center justify-center bg-white border-2 border-gray-100 rounded-lg drop-shadow-2xl ${
        className ?? ""
      }`}
    >
      <ImageComponet fileName={fileName} />
    </div>
  );
};
