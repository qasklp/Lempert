import { VideoSection } from "./VideoSection/VideoSection";
import { MainVideoSection } from "./MainVideoSection/MainVideoSection";
import { InfoSection } from "./InfoSection/InfoSection";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { Footer } from "./Footer/Footer";

import styles from "./App.module.css";

import { PerfectMan, title1 } from "./MediaPathes/PerfectMan";
import { Margiela,title2 } from "./MediaPathes/Margiela";
import { Apashe, title3 } from "./MediaPathes/Apashe";
import { AxelArigatoAndre, title4 } from "./MediaPathes/AxelArigatoAndre";
import { Lucien, title5 } from "./MediaPathes/Lucien";
import { MarkBuxton, title6 } from "./MediaPathes/MarkBuxton";
import { VoguePor, title7 } from "./MediaPathes/VoguePor";
import { Renan, title8 } from "./MediaPathes/Renan";
import { JacobLee, title9 } from "./MediaPathes/JacobLee";
import { AxelArigato, title10 } from "./MediaPathes/AxelArigato";
import { Anej, title11 } from "./MediaPathes/Anej";
import { VogueUkr, title12 } from "./MediaPathes/VogueUkr";
import { Archives, title13 } from "./MediaPathes/Archives";


import mainVideo from "../images/video/mainVideo.mp4";
import videoAxelAndre from "../images/video/videoAxelAndre.mp4";
// import videoLucien from "../images/video/videoLucien.mp4";
import videoAnej from "../images/video/videoAnej.mp4";

import { useState } from 'react';

export const App = () => {
  let [isDragStart, setIsDragStart] = useState(false);
  let [prevPageX, setPrevPageX] = useState(null);
  let [prevScrollLeft, setPrevScrollLeft] = useState(null);
  let [carrousel, setCarruosel] = useState(null);

  const handleDrag = (e) => {
    if (!isDragStart) return; 
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carrousel.scrollLeft = prevScrollLeft - positionDiff;
    console.log(e.pageX);
  }

  const dragStart = (e) => {
    console.log("start");
    setCarruosel(e.target.closest('ul[data-carrousel]'))
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(carrousel.scrollLeft)
  }

  const dragStop = () => {
    setIsDragStart(false);
  }
    
  return (<>
    <MainVideoSection src={mainVideo} />
    <InfoSection />
    <ul className={styles.carrouselList}>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={PerfectMan} title={title1} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Margiela} title={title2} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Apashe} title={title3} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={AxelArigatoAndre} title={title4} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <VideoSection src={videoAxelAndre} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Lucien} title={title5} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      {/* <li className={styles.carrouselItem}>
        <VideoSection src={videoLucien} />
      </li> */}
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={MarkBuxton} title={title6} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={VoguePor} title={title7} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Renan} title={title8} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={JacobLee} title={title9} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={AxelArigato} title={title10} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Anej} title={title11} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <VideoSection src={videoAnej} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={VogueUkr} title={title12} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Archives} title={title13} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
    </ul>
    <Footer />
  </>
  );
};
