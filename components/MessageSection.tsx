import React from 'react';

const HeartIcon = () => (
  <svg className="w-5 h-5 inline-block text-rose-400 mx-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const MessageSection: React.FC = () => {
  return (
    <section className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg text-center text-gray-900 space-y-4 opacity-0 animate-fade-in-up animation-delay-600">
      <p className="text-lg leading-relaxed">
        To the most amazing girl in the world, happy birthday!
      </p>
      <p className="leading-relaxed">
        Another year older, another year of shining brighter than ever. I hope your day is as wonderful and beautiful as you are. May it be filled with laughter, joy, and everything you've been dreaming of.
      </p>
      <p className="font-semibold text-lg leading-relaxed">
        Cheers to you and all the incredible moments to come!
        <HeartIcon />
      </p>
    </section>
  );
};

export default MessageSection;