import React from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import MessageSection from './components/MessageSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const birthdayPersonName = "Mrunali"; // Replace with the actual name
  const senderName = "Mukul"; // Replace with your name

  const images = [
    "https://picsum.photos/id/1011/400/500",
    "https://picsum.photos/id/1025/400/500",
    "https://picsum.photos/id/103/400/500",
    "https://picsum.photos/id/219/400/500",
    "https://picsum.photos/id/30/400/500",
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 overflow-hidden font-poppins">
      {/* Decorative SVG Shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
        <div className="w-96 h-96 bg-pink-400 rounded-full opacity-60 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <div className="w-96 h-96 bg-red-400 rounded-full opacity-60 blur-3xl"></div>
      </div>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-lg mx-auto">
          <Header name={birthdayPersonName} />
          <ImageCard 
            imageUrls={images} 
            caption="A special day for a special person." 
          />
          <MessageSection />
          <Footer senderName={senderName} />
        </div>
      </main>
    </div>
  );
};

export default App;