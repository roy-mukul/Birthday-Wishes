import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  caption: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, caption }) => {
  return (
    <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-400">
      <div className="relative w-4/5 sm:w-3/4 max-w-sm mx-auto p-4 pb-12 bg-white rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300 animate-gentle-float">
        <img
          src={imageUrl}
          alt="Birthday memory"
          className="w-full h-auto object-cover rounded-md"
        />
        <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-poppins italic">{caption}</p>
        {/* Tape SVG */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-teal-200 bg-opacity-50 transform -rotate-6"></div>
      </div>
    </div>
  );
};

export default ImageCard;