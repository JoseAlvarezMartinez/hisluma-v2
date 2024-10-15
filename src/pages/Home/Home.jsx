import styles from "./Home.module.css"
import hislumaLogo from "../../assets/hisluma-logo.png"

const Home = () => {
  return (
    <>
      <header className={styles.background}>
        <div className={styles.oscurecerFondo}>
          <div className={styles.container}>
            <img className={styles.hislumaLogo} src={hislumaLogo} alt="Hisluma Logo" />

            <h2 className={styles.heading2}>Service de création audio visuelle pour vos evénements sur internet</h2>

            <p className={styles.info}>Diffusion en direct, photographie et marketing pour mettre en valeur chaque instant et vous connecter avec votre public</p>
            <p className={styles.frase}>“Le sport fait l'histoire, nous la racontons au monde”</p>

            <button className={styles.button}>à propos de nous <span className={styles.arrow}></span></button>
          </div>
        </div>
      </header>

      <section className={styles.serviciosContainer}>
        <h2 className={styles.nuestrosServicios}>Nos Services</h2>

        <div className={styles.camaraBackground}>
          <p>Service le plus choisi</p>
        </div>

        <h3 className={styles.videoTitulo}>Vidéo</h3>
        <ul>
          <li className={styles.listItem}><span className={styles.listaSpan}>Retransmission/Diffusion en direct d'événements:</span>conférences, événements corporatifs, événements sportifs, forums, salons, et autres manifestations nécessitant ce service</li>
          <li className={styles.listItem}><span className={styles.listaSpan}>Montage Vidéo</span> professionnel pour des projets créatifs et promotionnels</li>
          <li className={styles.listItem}> <span className={styles.listaSpan}>Création de contenu dynamique: </span>reels, TikTok, Shorts pour booster la présence sur les réseaux sociaux</li>
        </ul>
      </section>
    </>
  )
}

export default Home