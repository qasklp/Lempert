import PropTypes from 'prop-types';
import styles from "./Credits.module.css";
import { nanoid } from 'nanoid';

export const Credits = ({ info }) => {
    const specialArray = info.special ? info.special.split(':') : []; 

    return <section className={styles.credits}>
        <ul className={styles.creditsList}>
            {info.map(line => {
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
    </section>;


};

Credits.propTypes = {
    info: PropTypes.array.isRequired,
};