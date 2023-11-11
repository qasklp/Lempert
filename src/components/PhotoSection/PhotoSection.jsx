import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { memo } from 'react';

import styles from "./PhotoSection.module.css";

const ContentWrapper = memo(({mediaList}) => mediaList.map(item => {
  if (item.type === 'photo') {
    return <li className={styles.contentItem} key={nanoid()}>
      <img className={styles.photo} src={item.src} alt="work example" loading='auto'/>
    </li>;
  } else if (item.type === 'video') {
    return (
      <li className={styles.contentItem} key={nanoid()}>
        <video className={styles.video} autoPlay loop muted playsInline loading='auto'>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </li>
    );
  }
  return null;
}))

export const PhotoSection = ({ mediaList, title, onMouseMove, onMouseDown, onMouseUp }) => {
    return <section className={styles.carrousel} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseLeave={onMouseUp} onMouseUp={onMouseUp} >
        <ul className={styles.contentList} data-carrousel >
          <ContentWrapper mediaList={mediaList}/>
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
    onMouseMove: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
}