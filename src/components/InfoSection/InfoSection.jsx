import AlexandraPhoto from "../../images/Alexandra.webp";
import styles from "./InfoSection.module.css";

export const InfoSection = () => {
    return <section className={styles.infoSection} id="hero">
            <div className={styles.infoBox}>
                <h1 className={styles.mainTitle}>Alexandra Lempert</h1>
                <h3 className={styles.title}>Creative/executive production, international communications</h3>
                <div className={styles.titleBox}>
                    <h3 className={styles.title}>Paris based</h3>
                    <h3 className={styles.title}>Worlwide available</h3>
                </div>
                <ul className={styles.contacts}>
                    <li className={styles.contactItem}>
                        <a href="mailto:allexandra.lempert@gmail.com" className={styles.email}>allexandra.lempert@gmail.com</a>
                    </li>
                </ul>
                <div className={styles.textBox}>
                    <div className={styles.column}>
                        <p className={styles.text}>Alexandra Lempert is a creative producer and international communication specialist based in Paris. She is known for her exceptional ability to develop visual content for luxury products and organize high-end events, such as fashion shows, red carpets, protocol occasions, etc. Alexandra has worked with A-list guests and governmental structures, demonstrating her ability to execute at the highest level.</p>
                        <p className={styles.text}>Today, Alexandra is focused on bringing a fresh perspective to the traditional fashion niche. She is passionate about merging her extensive knowledge of new fresh-blood talent scouting with traditional old-school fashion practices to create truly groundbreaking works. Her expertise in international communications and celebrity relations makes her qualified to help luxury brands establish themselves as leaders in the industry.</p>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.text}>Alexandra's previous work at Snapchat, where she pioneered the introduction of innovative AR and AI technologies into the luxury industry, cemented her status as a true innovator. Her collaboration with top-tier fashion brands, such as Cartier, Dior, and Gucci, is a testament to her exceptional creativity and strategic vision.</p>
                        <p className={styles.text}>Clients: Dior, Gucci, Prada, Maison Margiela, Axel Arigato, Ami, Burberry, Givenchy, Louis Vuitton, Cartier, Ralph Lauren, Balenciaga, Van Cleef & Arpels, Versace, Vogue, L’officiel, Harper’s Bazaar, L’oreal, Nike, Puma, Coca Cola, Samsung, Dyson, Disney, O2, Uber, Deutsche Bahn, etc.</p>
                    </div>
                </div>
            </div>            
            <img src={AlexandraPhoto} alt="Alexandra" className={styles.photo} />
    </section>
}