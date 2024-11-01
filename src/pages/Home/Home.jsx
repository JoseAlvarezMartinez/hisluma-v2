import styles from "./Home.module.css"

import hislumaLogo from "../../assets/hisluma-logo.png"
import HomeCard from "../../components/HomeCard/HomeCard"
import imagenPrueba from "../../assets/nosotrosBackground.jpg"
import Temporada from "../../components/Temporada/Temporada"

import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  };

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

      <main className={styles.mainContainer}>
        <h2>Nos Services</h2>

        <div className={styles.camaraHomeBackground}>
          <div className={styles.oscurecerFondoCamara}>
            <p>Service le plus choisi</p>
          </div>
        </div>

        <h3 className={styles.videoTitulo}>VIDÉO</h3>
        <ul>
          <li className={styles.listItem}><span className={styles.spanFont}>Retransmission/Diffusion en direct d'événements:</span> conférences, événements corporatifs, événements sportifs, forums, salons, et autres manifestations nécessitant ce service</li>
          <li className={styles.listItem}><span className={styles.spanFont}>Montage Vidéo</span> professionnel pour des projets créatifs et promotionnels</li>
          <li className={styles.listItem}><span className={styles.spanFont}>Création de contenu dynamique:</span> reels, TikTok, Shorts pour booster la présence sur les réseaux sociaux</li>
        </ul>

        <article className={styles.homeCardContainer}>
          <HomeCard titulo={"Photographie"} imagen={imagenPrueba} />
          <HomeCard titulo={"Marketing digital"} imagen={imagenPrueba} />
          <HomeCard titulo={"Contenu publicitaire"} imagen={imagenPrueba} />
          <HomeCard titulo={"Support linguistique"} imagen={imagenPrueba} />
        </article>

        <div className={styles.btnContainer}>
          <button className={styles.btnVerMas}>lire plus</button>
        </div>
      </main>

      <section className={styles.temporadaContainer}>
        <h2>Actualités</h2>

        <Temporada />

        {/* <Slider {...settings} className={styles.sliderContainer}>
          <Temporada />
          <Temporada />
          <Temporada />
        </Slider> */}
      </section>
    </>
  )
}

export default Home