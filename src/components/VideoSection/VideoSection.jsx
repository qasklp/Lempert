import PropTypes from 'prop-types';
import styles from "./VideoSection.module.css";

export const VideoSection = ({ src }) => {
    
    return <section className={styles.videoSection}>
        <video className={styles.video} autoPlay loop muted playsInline >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </section>
}

VideoSection.propTypes = {
    src: PropTypes.string.isRequired,
}