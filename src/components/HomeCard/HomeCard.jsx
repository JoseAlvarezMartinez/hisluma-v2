import styles from "./HomeCard.module.css";

const HomeCard = ({ titulo, imagen }) => {
    return (
        <div 
        className={styles.homeCardContainer}
        style={{
            backgroundImage: `url(${imagen})`,
            backgroundPosition:"center 20%",
            backgroundSize: "cover",
            maxWidth:"25rem",
            aspectRatio: 1,
            position:"relative"
        }}>
            <section className={styles.oscurecerFondo}>
                <h3 className={styles.homeCardTitulo}>{titulo}</h3>
            </section>
        </div>
    )
}

export default HomeCard