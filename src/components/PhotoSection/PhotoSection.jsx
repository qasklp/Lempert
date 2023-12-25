import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { memo } from 'react';

import styles from "./PhotoSection.module.css";

const ContentWrapper = memo(({mediaList}) => mediaList.map(item => {
  if (item.type === 'photo') {
    return <li className={styles.contentItem} key={nanoid()}>
      <img className={styles.photo} src={item.src} alt="work example" />
    </li>;
  } else if (item.type === 'video') {
    return (
      <li className={styles.contentItem} key={nanoid()}>
        <video className={styles.video} autoPlay loop muted playsInline >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </li>
    );
  } else if (item.type === 'credits') {
    const specialArray = item.special ? item.special.split(':') : []; 

    return <li className={styles.contentItem} key={nanoid()}>
      <div className={styles.credits}>
        <ul className={styles.creditsList}>
          {item.text.map(line => {
            const [role, name] = line.split(':');
            return <li className={styles.creditsItem} key={nanoid()}>
              <p className={styles.creditsText}>
                <span className={styles.creditsRole}>{role}:</span>
                {name}
              </p>
            </li>;
          })}
          {specialArray.length === 1 && (
              <li className={`${styles.creditsItem} ${styles.creditsSpecial}`} key={nanoid()}>
                <p className={styles.creditsText}>
                  {specialArray[0]}
                </p>
              </li>
            )}
            {specialArray.length === 2 && (
              <li className={`${styles.creditsItem} ${styles.creditsSpecial}`} key={nanoid()}>
                <p className={styles.creditsText}>
                  <span className={styles.creditsRole}>{specialArray[0]}:</span>
                  {specialArray[1]}
                </p>
              </li>
            )}
        </ul>
      </div>
    </li>
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