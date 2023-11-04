import PropTypes from 'prop-types';
import styles from "./PhotoSection.module.css";

import { nanoid } from 'nanoid';

export const PhotoSection = ({ mediaList, title }) => {

    return <section className={styles.carrousel}>
        <ul className={styles.contentList} data-carrousel>
            {mediaList.map(item => {
                if (item.type === 'photo') {
                return <li className={styles.contentItem} key={nanoid()}><img className={styles.photo} src={item.src} alt="work example" /></li>;
                } else if (item.type === 'video') {
                    return (
                    <li className={styles.contentItem} key={nanoid()}>
                        <video className={styles.video} controls>
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>     
                    </li>
                );
                }
                return null;
            })}
        </ul>
        <div className={styles.titleBox}>
            {title.map(line => {
                return <h2 className={styles.title} key={nanoid()}>{line}</h2>;
                })
            }
        </div>
    </section>
}

PhotoSection.propTypes = {
    mediaList: PropTypes.array.isRequired,
    title: PropTypes.array.isRequired,
}