import styles from "./ServicioAccion.module.css"

import imagenPrueba from "../../assets/experienciaBackground.png"

const ServicioAccion = () => {
    return (
        <section className={styles.servicioAccionContainer}>
            <img className={styles.imagenPrueba} src={imagenPrueba} alt="" />
            <h3 className={styles.servicioAccionTitulo}>Diffusion EN DIRECT réalisée pour CLIENT 1</h3>
            <p className={styles.servicioAccionParrafo}>Placer ici une description du projet réalisé pour le client, les aspects les plus pertinents et mentionner le service utilisé</p>
        </section>
    )
}

export default ServicioAccion