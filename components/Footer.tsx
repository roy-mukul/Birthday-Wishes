import React from 'react';

interface FooterProps {
  senderName: string;
}

const Footer: React.FC<FooterProps> = ({ senderName }) => {
  return (
    <footer className="mt-8 text-center text-pink-100 opacity-0 animate-fade-in-up animation-delay-800">
      <p className="text-xl italic">With all my love,</p>
      <p className="text-5xl font-great-vibes text-white mt-2 text-shadow">{senderName}</p>
    </footer>
  );
};

export default Footer;