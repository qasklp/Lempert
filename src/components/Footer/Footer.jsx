import styles from "./Footer.module.css";

export const Footer = () => {

    const handleClick = () => {
        document.querySelector('#hero').scrollIntoView({
                behavior: 'smooth'
            });
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox} onClick={handleClick}>
                <p className={styles.footerText}>Go to the contacts</p>
            </div>
        </footer>
    );
}