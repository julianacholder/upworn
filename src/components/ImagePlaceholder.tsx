// Image Placeholder Component
// This component creates a standardized placeholder for images with clear instructions
// for the user to replace with their actual images

import React from 'react';

interface ImagePlaceholderProps {
  width: string;
  height: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width,
  height,
  text,
  bgColor = 'bg-gray-200',
  textColor = 'text-gray-600',
  className = '',
}) => {
  return (
    <div 
      className={`flex items-center justify-center ${bgColor} ${className}`}
      style={{ width, height }}
    >
      <div className="text-center p-4">
        <p className={`font-medium ${textColor}`}>{text}</p>
        <p className="text-xs text-gray-500 mt-2">Replace with your image</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
