import styles from "./Services.module.css"

const Services = () => {
  return (
    <section>

      <div className={styles.backgroundContainer}>
        <h2 className={styles.titulo}>Nos Services</h2>

        <div className={styles.containerResponsive}>
          <div className={styles.backgroundCamara}>
            <div className={styles.oscurecerFondo}>
              <p className={styles.descripcionFondo}>Service le plus choisi</p>
            </div>
          </div>

          <section className={styles.videoContainer}>
            <h3 className={styles.videoTitulo}>VIDÉO</h3>

            <ul className={styles.videoLista}>
              <li><strong>Retransmission/Diffusion en direct d'événements:</strong> conférences, événements corporatifs, événements sportifs, forums, salons, et autres manifestations nécessitant ce service</li>
              <li><strong>Montage Vidéo</strong> professionnel pour des projets créatifs et promotionnels</li>
              <li><strong>Création de contenu dynamique:</strong> reels, TikTok, Shorts pour booster la présence sur les réseaux sociaux</li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  )
}

export default Services