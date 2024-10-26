import styles from "./Servicios.module.css"
import { IoCameraOutline } from "react-icons/io5";

const Servicios = () => {
  return (

    <>
      <header className={styles.headerBackground}>
        <div className={styles.oscurecerFondo}>
          <section className={styles.headerContainer}>
            <h2 className={styles.tituloHeader}>Services</h2>
            <p className={styles.descripcionHeader}>Découvrez en détail nos services et profitez d'un aperçu de nos travaux les plus remarquables</p>
          </section>
        </div>
      </header>
      <main>
        <section className={styles.mainContainer}>
          <h2 className={styles.mainTitulo}>Vous souhaitez propulser la promotion de votre événement avec notre soutien audiovisuel et marketing?</h2>
          <p className={styles.mainParrafo}>Découvrez ci-dessous nos services, adaptables selon vos objectifs pour répondre à une ou plusieurs de vos demandes.</p>
        </section>
        <section className={styles.videoContainer}>
          <h3>Vidéo</h3>
          <ul className={styles.mainListaDesordenada}>
            <li><strong>Retransmission/Diffusion en direct d'événements:</strong>conférences, événements corporatifs, événements sportifs, forums, salons, et autres manifestations nécessitant ce service</li>
            <li><strong>Montage Vidéo</strong> professionnel pour des projets créatifs et promotionnels</li>
            <li><strong>Création de contenu dynamique:</strong> reels, TikTok, Shorts pour booster la présence sur les réseaux sociaux</li>
          </ul>
        </section>
      </main>

      <section className={styles.serviciosCardsContainer}>
        <article className={styles.servicioCard}>
          <h3 className={styles.servicioCardTitulo}>Photographie</h3>

          <div className={styles.servicioCardContainer}>
            <IoCameraOutline className={styles.camaraIcono} size={"4rem"} />
            <ul>
              <li>Photographie d'événements sportifs, compétitions, matchs, conférences, etc.
              </li>
              <li>Photographie promotionnelle</li>
            </ul>
          </div>
        </article >
        <article className={styles.servicioCard}>
          <h3 className={styles.servicioCardTitulo}>Photographie</h3>

          <div className={styles.servicioCardContainer}>
            <IoCameraOutline className={styles.camaraIcono} size={"4rem"} />
            <ul>
              <li>Photographie d'événements sportifs, compétitions, matchs, conférences, etc.
              </li>
              <li>Photographie promotionnelle</li>
            </ul>
          </div>
        </article >
        <article className={styles.servicioCard}>
          <h3 className={styles.servicioCardTitulo}>Photographie</h3>

          <div className={styles.servicioCardContainer}>
            <IoCameraOutline className={styles.camaraIcono} size={"4rem"} />
            <ul>
              <li>Photographie d'événements sportifs, compétitions, matchs, conférences, etc.
              </li>
              <li>Photographie promotionnelle</li>
            </ul>
          </div>
        </article >
        <article className={styles.servicioCard}>
          <h3 className={styles.servicioCardTitulo}>Photographie</h3>

          <div className={styles.servicioCardContainer}>
            <IoCameraOutline className={styles.camaraIcono} size={"4rem"} />
            <ul>
              <li>Photographie d'événements sportifs, compétitions, matchs, conférences, etc.
              </li>
              <li>Photographie promotionnelle</li>
            </ul>
          </div>
        </article >
      </section>


      <h2>Votre événement, nos solutions     </h2>
    </>
  )
}

export default Servicios