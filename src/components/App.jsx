import { VideoSection } from "./VideoSection/VideoSection";
import { InfoSection } from "./InfoSection/InfoSection";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { Footer } from "./Footer/Footer";


import { PerfectMan } from "./MediaPathes/PerfectMan";
import { title1 } from "./MediaPathes/PerfectMan";
import mainVideo from "../images/video/mainVideo.mp4";

import { useEffect, useState } from 'react';
import Hammer from 'hammerjs';

export const App = () => {
  const [startX, setStartX] = useState(null);

  const handlePan = (event) => {
    if (startX !== null) {
      const carrousel = event.target.closest('ul[data-carrousel]');

      if (carrousel) {
        console.log(`${startX} w ${event.changedPointers[0].clientX}`)
        let deltaX = event.changedPointers[0].clientX - startX;
        console.log(`${deltaX} c ${carrousel.scrollLeft}`)

        if ((deltaX > 0 && carrousel.scrollLeft === 0) || 
          (deltaX < 0 && carrousel.scrollLeft + carrousel.offsetWidth >= carrousel.scrollWidth)) {
          deltaX = 0; 
      }

      if (Math.abs(deltaX) >= 10) { 
        carrousel.scrollLeft -= deltaX;
      }
      }
    }
  }

  const handlePanStart = (event) => {
    setStartX(event.center.x);
  }

  const handlePanEnd = () => {
    setStartX(null);
  }

  useEffect(() => {
    const elements = document.querySelectorAll('ul[data-carrousel]');
    document.querySelectorAll('img').forEach(function(img) {
      img.addEventListener('mousedown', function(event) {
        event.preventDefault();
      });
    });

    elements.forEach(element => {
      const hammer = new Hammer(element);

      hammer.on('pan', handlePan);
      hammer.on('panstart', handlePanStart);
      hammer.on('panend', handlePanEnd);

      return () => {
        hammer.destroy();
      };
    });
  });
    
  return (<>
    <VideoSection src={mainVideo} first={true} />
    <InfoSection />
    <PhotoSection mediaList={PerfectMan} title={title1} />
    <Footer/>
  </>
  );
};
