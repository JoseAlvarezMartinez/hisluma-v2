import styles from "./HomeCard.module.css";

const HomeCard = ({ titulo, imagen }) => {
    return (
        <div style={{
            backgroundImage: `url(${imagen})`,
            backgroundSize: "cover",
            width: "10rem",
            aspectRatio: 1,
            position:"relative"
        }}>
            <section className={styles.oscurecerFondo}>
                <h3>{titulo}</h3>
            </section>
        </div>
    )
}

export default HomeCard