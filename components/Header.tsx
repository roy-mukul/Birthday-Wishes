import React from 'react';

interface HeaderProps {
  name: string;
}

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="text-center mb-8 animate-fade-in-up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight text-shadow">
        Happy Birthday,{' '}
        <span className="font-great-vibes text-5xl sm:text-6xl md:text-7xl">{name}!</span>
         <SparkleIcon className="absolute top-0 -right-4 sm:-right-8 w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 opacity-0 animate-fade-in-up animation-delay-400" />
         <SparkleIcon className="absolute bottom-0 -left-2 sm:-left-6 w-4 h-4 sm:w-5 sm:h-5 text-yellow-200 opacity-0 animate-fade-in-up animation-delay-600" />
      </h1>
      <p className="mt-4 text-lg text-pink-100 opacity-0 animate-fade-in-up animation-delay-200">Wishing you the best day ever.</p>
    </header>
  );
};

export default Header;