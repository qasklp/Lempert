import PropTypes from 'prop-types';
import styles from "./PhotoSection.module.css";
import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

export const PhotoSection = ({ mediaList, title }) => {

    const [startX, setStartX] = useState(null);
    const [xDiff, setXDiff] = useState(0);
    let [isMouseDown, setIsMouseDown] = useState(false);
    let [bias, setBias] = useState(0);

    const handleMouseUp = () => {
        if (isMouseDown) {
            console.log("up")
            setIsMouseDown(false);
            setXDiff(0);
        }
    }

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }, [isMouseDown]);



    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.clientX);
    }

    const handleMouseMove = (e) => {

        if (isMouseDown) {
            setXDiff(e.clientX - startX);
            console.log(xDiff);
            if (xDiff > 5) {
                console.log(`${-Math.abs(xDiff / 2)} qqq `)
                if (bias <= -Math.abs(xDiff / 2)) {
                    console.log(`${-Math.abs(xDiff / 2)} qqq `)
                    setBias(bias + xDiff/2);
                } else {
                    setBias(0);
                }
                console.log(`left bias ${bias}`)
            } else if (xDiff < - 5) {
                setBias(bias + xDiff/2);
                console.log(`right bias ${bias}`)
            }
        }
    }

    return <section className={styles.carrousel}>
        <ul className={styles.contentList} style={{ '--bias': `${bias}px` }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
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