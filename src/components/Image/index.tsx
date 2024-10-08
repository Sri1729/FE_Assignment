interface ImageComponentProps {
  fileName: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ImageComponet: React.FC<ImageComponentProps> = ({
  fileName,
  className,
}) => {
  const imagePath = `/assets/images/${fileName}`;

  return <img src={imagePath} alt={fileName} className={className ?? ""} />;
};
