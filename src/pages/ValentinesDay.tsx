import { useState } from 'react';
import { Heart } from 'lucide-react';

const ValentineProposal = () => {
  const [noCount, setNoCount] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '60%' });
  
  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Generate random position
    const newTop = Math.random() * 80 + 10; // Between 10% and 90%
    const newLeft = Math.random() * 80 + 10; // Between 10% and 90%
    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const getYesButtonText = () => {
    const phrases = ['Yes', 'Please?', 'Pretty please?', 'Really please?', '100% Yes!'];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center space-y-6">
        <div className="flex justify-center">
          <Heart className="w-24 h-24 text-red-500 animate-pulse" />
        </div>
        
        {/* <img 
          src="/api/placeholder/300/200"
          alt="Cute Valentine"
          className="rounded-lg mx-auto shadow-md"
        /> */}
        
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          Will you be my Valentine?
        </h1>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => alert("Yay! 💖")}
            className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-110 transition duration-200 font-semibold cursor-pointer"
          >
            {getYesButtonText()}
          </button>
          
          <button
            onClick={handleNoClick}
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transform hover:scale-110 transition duration-200 absolute cursor-pointer"
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              transition: 'all 0.3s ease'
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentineProposal;