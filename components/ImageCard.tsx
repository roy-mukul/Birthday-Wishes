import React, { useState, useEffect } from 'react';

interface ImageCardProps {
  imageUrls: string[];
  caption: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrls, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (imageUrls.length <= 1) return;

    const timer = setInterval(() => {
      setIsFading(true);
      // Wait for the fade-out transition to complete before changing the image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setIsFading(false);
      }, 500); // This duration should match the fade-out transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [imageUrls.length]);
  
  return (
    <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-400">
      <div className="relative w-4/5 sm:w-3/4 max-w-sm mx-auto p-4 pb-12 bg-white rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300 animate-gentle-float">
        <div className="relative w-full overflow-hidden rounded-md aspect-[4/5] bg-gray-200">
           <img
            src={imageUrls[currentIndex]}
            alt="Birthday memory"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
        <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-poppins italic">{caption}</p>
        {/* Tape SVG */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-teal-200 bg-opacity-50 transform -rotate-6"></div>
      </div>
    </div>
  );
};

export default ImageCard;