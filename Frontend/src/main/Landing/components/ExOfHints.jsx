import React from 'react';
import shape from '../assets/shape.png';
// import img1 from '../assets/img1.png';
import pick1 from '../assets/pick1.png';
import pick2 from '../assets/pick2.png';
import pick3 from '../assets/pick3.png';
import pick4 from '../assets/pick4.png';
import pick5 from '../assets/pick5.png';
import img6 from '../assets/img6.png';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ExOfHints = () => {
  const images = [pick1, pick2, pick3, pick4, pick5, img6];

  return (
    <div className="relative pt-6 md:pt-12 pb-8 md:pb-16 px-4 md:px-12 overflow-hidden">
      
      {/* Background shape image */}
      <img
        src={shape}
        alt="Background Shape"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10 px-2">
          <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-10">
            Examples <span className="text-red-500">of Hints</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg 2xl:text-2xl max-w-2xl mx-auto">
            Every Hint is practical and easy to use. Explore categories across health, focus, and wellness.
          </p>
        </div>

        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
          <Masonry
            gutter="0px"
            style={{
              lineHeight: 0, // removes white space between inline elements
              margin: 0,
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Hint Example ${idx + 1}`}
                style={{
                  width: '100%',
                  display: 'block',
                  margin: 0,
                  padding: 0,
                  borderRadius: '12px',
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ExOfHints;
