import PropTypes from 'prop-types';
import styles from "./VideoSection.module.css";
import React from 'react';

export const VideoSection = ({ src }) => {
    const isVimeoSource = src.includes('vimeo.com');;

    if (isVimeoSource) {
        const videoId = src.split('/').pop(); // Extract video ID from the Vimeo URL

        const vimeoSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&controls=0`;


        return (
            <section className={styles.videoSection} >
                <iframe
                    className={styles.video}
                    title="Vimeo"
                    src={vimeoSrc}
                    width="100%"
                    loading="lazy"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    
                />

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
};