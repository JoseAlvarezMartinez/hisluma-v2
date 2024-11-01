import styles from "./Temporada.module.css"

const Temporada = () => {
    return (
        <article className={styles.temporadaCard}>
            <section className={styles.oscurecerFondo}>
                <div className={styles.temporadaEtiqueta}>
                    <p>Canoé-kayak</p>
                </div>
                <h3>Bilan de la journée au canoé-kayak de cambra</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula, eget imperdiet  </p>
            </section>
        </article>
    )
}

export default Temporada