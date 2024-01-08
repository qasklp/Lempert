import { VideoSection } from "./VideoSection/VideoSection";
import { MainVideoSection } from "./MainVideoSection/MainVideoSection";
import { InfoSection } from "./InfoSection/InfoSection";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { Footer } from "./Footer/Footer";

import styles from "./App.module.css";

import { PerfectMan, titlePerfectMan } from "./MediaPathes/PerfectMan";
import { Margiela,titleMargiela } from "./MediaPathes/Margiela";
import { Apashe, titleApashe } from "./MediaPathes/Apashe";
import { McQueen, titleMcQueen } from "./MediaPathes/McQueen";
import { AxelArigatoAndre, titleAxelArigatoAndre } from "./MediaPathes/AxelArigatoAndre";
import { Lucien, titleLucien } from "./MediaPathes/Lucien";
import { MarkBuxton, titleMarkBuxton } from "./MediaPathes/MarkBuxton";
import { VoguePor, titleVoguePor } from "./MediaPathes/VoguePor";
import { Renan, titleRenan } from "./MediaPathes/Renan";
import { JacobLee, titleJacobLee } from "./MediaPathes/JacobLee";
import { AxelArigato, titleAxelArigato } from "./MediaPathes/AxelArigato";
import { Anej, titleAnej } from "./MediaPathes/Anej";
import { Archives, titleArchives } from "./MediaPathes/Archives";


import mainVideo from "../images/video/mainVideo.mp4";
import videoAxelAndre from "../images/video/videoAxelAndre.mp4";
import videoAnej from "../images/video/videoAnej.mp4";
import videoLucien from "../images/video/videoLucien.mov";

import { useState, useEffect } from 'react';


export const App = () => {
  let [isDragStart, setIsDragStart] = useState(false);
  let [prevPageX, setPrevPageX] = useState(null);
  let [prevScrollLeft, setPrevScrollLeft] = useState(null);
  let [carrousel, setCarruosel] = useState(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      console.error("IntersectionObserver is not supported");
      return;
    }
    document.querySelectorAll('video').forEach(function (video) {
      video.classList.add('lazy');
    })

    let lazyVideos = [...document.querySelectorAll("video.lazy")]

    let lazyVideoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          video.target.play();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
    document.dispatchEvent(new CustomEvent('scroll'));
  }, []);

  const handleDrag = (e) => {
    if (!isDragStart) return; 
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carrousel.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragStart = (e) => {
    e.preventDefault();
    setCarruosel(e.target.closest('ul[data-carrousel]'))
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(carrousel.scrollLeft)
  }

  const dragStop = (e) => {
    e.preventDefault();
    setIsDragStart(false);
  }
    
  return (<>
    <MainVideoSection src={mainVideo} />
    <InfoSection />
    <ul className={styles.carrouselList}>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={PerfectMan} title={titlePerfectMan} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Apashe} title={titleApashe} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={McQueen} title={titleMcQueen} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={AxelArigatoAndre} title={titleAxelArigatoAndre} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <VideoSection src={videoAxelAndre} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Margiela} title={titleMargiela} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={VoguePor} title={titleVoguePor} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Lucien} title={titleLucien} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <VideoSection src={videoLucien} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={MarkBuxton} title={titleMarkBuxton} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Renan} title={titleRenan} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={JacobLee} title={titleJacobLee} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Anej} title={titleAnej} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <VideoSection src={videoAnej} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={AxelArigato} title={titleAxelArigato} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
      <li className={styles.carrouselItem}>
        <PhotoSection mediaList={Archives} title={titleArchives} onMouseMove={handleDrag} onMouseDown={dragStart} onMouseUp={dragStop} />
      </li>
    </ul>
    <Footer />
  </>
  );
};
