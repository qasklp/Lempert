import { VideoSection } from "./VideoSection/VideoSection";
import { InfoSection } from "./InfoSection/InfoSection";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { Footer } from "./Footer/Footer";


import { PerfectMan } from "./MediaPathes/PerfectMan";
import { title1 } from "./MediaPathes/PerfectMan";
import mainVideo from "../images/video/mainVideo.mp4"

export const App = () => {
    
  return (<>
    <VideoSection src={mainVideo} first={true} />
    <InfoSection />
    <PhotoSection mediaList={PerfectMan} title={title1} />
    <Footer/>
  </>
  );
};
