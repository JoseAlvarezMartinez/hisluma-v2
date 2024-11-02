import styles from "./Temporada.module.css"

const Temporada = ({ posicion }) => {
    return (
        posicion == "portada" ? <article className={`${styles.temporadaCard} ${styles.temporadaCardDesktop}`}>
            <section className={styles.oscurecerFondo}>
                <div className={styles.temporadaEtiqueta}>
                    <p>Canoé-kayak</p>
                </div>
                <h3 className={styles.temporadaTitulo}>Bilan de la journée au canoé-kayak de cambra</h3>
                <p className={styles.temporadaParrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula, eget imperdiet  </p>
            </section>
        </article> : <article className={`${styles.temporadaCard}`}>
            <section className={styles.oscurecerFondo}>
                <div className={styles.temporadaEtiquetaSlider}>
                    <p>sport 1</p>
                </div>
                <h3 className={styles.temporadaTituloSlider}>Á la une</h3>
                <p className={styles.temporadaParrafoSlider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        </article>
    )
}

export default Temporada