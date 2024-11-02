import styles from "./Partidos.module.css"
const Partidos = () => {
    return (
        <section className={styles.partidoContainer}>
            <p className={styles.partidoFecha}>Date</p>
            <h3 className={styles.partidoEquipos}>Equipe 1 vs Equipe 2</h3>
            <p className={styles.partidoEstadio}>Ville, complexe sportif</p>
        </section>
    )
}

export default Partidos