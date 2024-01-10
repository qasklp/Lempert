import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styles from "./MainVideoSection.module.css";

export const MainVideoSection = ({ src, onLoad }) => {
    const [showTitle, setShowTitle] = useState(window.innerWidth < 768);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowTitle(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
        onLoad();
    };

    return (
        <section className={styles.videoSection}>
            {!videoLoaded && (
                <div className={styles.loader}>
                    <p className={styles.loaderText}>Alexandra Lempert</p>
                </div>
            )}

            <video
                title="Your Video"
                autoPlay
                loop
                muted
                controls={false}
                className={styles.video}
                onLoadedData={handleVideoLoad}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {videoLoaded && showTitle && (
                <h2 className={styles.title}>
                    Smart
                    <br />
                    <span className={styles.bold}>bold</span>
                    <br />
                    <span className={styles.italic}>chic</span>
                </h2>
            )}

            {videoLoaded && (
                <svg className={styles.arrow} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>fluent_ios-arrow-24-regular</title>
                    <path fill="#7e7e7e" d="M16.008 20.273l-11.636-11.323c-0.094-0.093-0.205-0.167-0.328-0.217s-0.254-0.075-0.386-0.074c-0.132 0.001-0.263 0.028-0.385 0.080s-0.232 0.127-0.324 0.222c-0.092 0.095-0.165 0.207-0.213 0.33s-0.072 0.254-0.070 0.387 0.031 0.263 0.084 0.384c0.053 0.121 0.13 0.23 0.226 0.321l12.333 12c0.187 0.182 0.437 0.283 0.697 0.283s0.511-0.102 0.697-0.283l12.333-12c0.096-0.091 0.172-0.2 0.226-0.321s0.082-0.251 0.084-0.384c0.003-0.132-0.021-0.264-0.070-0.387s-0.121-0.235-0.213-0.33c-0.092-0.095-0.202-0.17-0.324-0.222s-0.252-0.079-0.385-0.080c-0.132-0.001-0.263 0.024-0.386 0.074s-0.234 0.124-0.328 0.217l-11.636 11.323z"></path>
                </svg>
            )}
        </section>
    );
};

MainVideoSection.propTypes = {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
};