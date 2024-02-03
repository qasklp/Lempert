import PropTypes from 'prop-types';
import styles from "./VideoSection.module.css";
import React, { useState} from 'react';

export const VideoSection = ({ src, unmuted }) => {
    const isVimeoSource = src.includes('vimeo.com');
    const [isMuted, setIsMuted] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    if (isVimeoSource) {
        const videoId = src.split('/').pop(); // Extract video ID from the Vimeo URL

        const vimeoSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=${isMuted ? 1 : 0}&controls=0`;

        const toggleMute = () => {
            setIsMuted(!isMuted);
            if (!isPressed) {
                setIsPressed(true);
            }  
        };

        return (
            <section className={styles.videoSection} >
                <iframe
                    className={styles.video}
                    title="Vimeo Video"
                    src={vimeoSrc}
                    width="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    onClick={toggleMute}
                    
                />
                {unmuted && !isPressed && (
                    <button type='button' className={styles.unmuteButton} onClick={toggleMute}>
                        {isMuted ?
                            <svg className={styles.svg} fill='#ffffff' width="22px" height="22px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M159.99414,31.99707v192a7.99386,7.99386,0,0,1-12.90625,6.3125l-69.84375-54.3125h-45.25a16.01583,16.01583,0,0,1-16-16v-64a16.01583,16.01583,0,0,1,16-16h45.25l69.84375-54.3125a7.99451,7.99451,0,0,1,12.90625,6.3125Zm67.3125,96,18.34375-18.34375a7.99915,7.99915,0,0,0-11.3125-11.3125l-18.34375,18.34375L197.65039,98.34082a7.99915,7.99915,0,0,0-11.3125,11.3125l18.34375,18.34375-18.34375,18.34375a7.99915,7.99915,0,1,0,11.3125,11.3125l18.34375-18.34375,18.34375,18.34375a7.99915,7.99915,0,0,0,11.3125-11.3125Z"/>
                            </svg> :
                            <svg className={styles.svg} fill='#ffffff' width="22px" height="22px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M159.99414,31.9971v192a7.99386,7.99386,0,0,1-12.90625,6.3125L77.24414,175.9971h-45.25a16.01582,16.01582,0,0,1-16-16v-64a16.01583,16.01583,0,0,1,16-16h45.25l69.84375-54.3125a7.99451,7.99451,0,0,1,12.90625,6.3125Z"/>
                            </svg>}
                        {isMuted ? 'Click to unmute' : 'Click to mute'}
                    </button>
                )}

                {unmuted && (
                    <button type='button' className={styles.invisibleButton} onClick={toggleMute}> </button>
                )}

            </section>
        );
    }

    return (
        <section className={styles.videoSection}>
            <video className={styles.video} autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

VideoSection.propTypes = {
    src: PropTypes.string.isRequired,
    unmuted: PropTypes.bool,
};