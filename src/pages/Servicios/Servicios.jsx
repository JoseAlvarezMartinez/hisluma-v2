import styles from "./Servicios.module.css"
import "./customDots.css"

import Footer from "../../components/Footer/Footer"
import Formulario from "../../components/Formulario/Formulario"
import ServicioAccion from "../../components/ServicioAccion/ServicioAccion";
import Resenia from "../../components/Resenias/Resenia"
import videoImagen from "../../assets/VideoImg.jpg"

import { IoCameraOutline, IoLanguage } from "react-icons/io5";
import { MdScreenshotMonitor } from "react-icons/md";
import { TfiNotepad } from "react-icons/tfi";
import { FaRegHandshake } from "react-icons/fa6";
import { PiSwapThin } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosTrendingUp } from "react-icons/io";
import Slider from "react-slick";

const Servicios = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div>
        <span>{i + 1}</span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots servicios-dots"
  };
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

      <section className={styles.introduccionContainer}>
        <h2 className={styles.introduccionTitulo}>
          Vous souhaitez propulser la promotion de votre événement avec notre soutien audiovisuel et marketing?
        </h2>

        <p className={styles.introduccionParrafo}>Découvrez ci-dessous nos services, adaptables selon vos objectifs pour répondre à une ou plusieurs de vos demandes.</p>
      </section>

      <section className={styles.videoContainerBackground}>
        <section className={styles.videoContainerImagen}>
          <section className={styles.videoContainer}>
            <h2>vidéo</h2>

            <ul className={styles.listaDesordenada}>
              <li><span>Retransmission/Diffusion en direct d'événements:</span> conférences, événements corporatifs, événements sportifs, forums, salons, et autres manifestations nécessitant ce service</li>
              <li><span>Montage Vidéo</span> professionnel pour des projets créatifs et promotionnels</li>
              <li><span>Création de contenu dynamique: </span>reels, TikTok, Shorts pour booster la présence sur les réseaux sociaux</li>
            </ul>
          </section>

          <img className={styles.videoImagen} src={videoImagen} alt="" />
        </section>
      </section>

      <main className={styles.serviciosContainer}>

        <section className={styles.servicioContainer}>
          <div className={styles.icon}>
            <IoCameraOutline size={"3rem"} />
          </div>
          <section className={styles.serviciosContainerInferior}>
            <h3 className={styles.serviciosTitulo}>Photographie</h3>
            <ul className={styles.serviciosLista}>
              <li>Photographie d'événements sportifs, compétitions, matchs, conférences, etc.</li>
              <li>Photographie promotionnelle</li>
            </ul>
          </section>
        </section>

        <section className={styles.servicioContainer}>
          <div className={styles.icon}>
            <MdScreenshotMonitor size={"3rem"} />
          </div>
          <section className={styles.serviciosContainerInferior}>
            <h3 className={styles.serviciosTitulo}>Marketing Digital</h3>
            <ul className={styles.serviciosLista}>
              <li>Veille Concurrentielle</li>
              <li>Veille stratégique</li>
              <li>Community Management</li>
              <li>Rédaction de projets digitaux</li>
            </ul>
          </section>
        </section>

        <section className={styles.servicioContainer}>
          <div className={styles.icon}>
            <TfiNotepad size={"3rem"} />
          </div>
          <section className={styles.serviciosContainerInferior}>
            <h3 className={styles.serviciosTitulo}>Contenu publicitaire ou Informatif</h3>
            <ul className={styles.serviciosLista}>
              <li>Affiches</li>
              <li>Infographie</li>
            </ul>
          </section>
        </section>

        <section className={styles.servicioContainer}>
          <div className={styles.icon}>
            <IoLanguage size={"3rem"} />


          </div>
          <section className={styles.serviciosContainerInferior}>
            <h3 className={styles.serviciosTitulo}>Support linguistique ECRIT ET ORAL</h3>
            <ul className={styles.serviciosLista}>
              <li>Français</li>
              <li>Espagnol</li>
              <li>Anglais</li>
              <li>Allemand</li>
            </ul>
          </section>
        </section>
      </main>

      <section className={styles.caracteristicasContainer}>
        <h2 className={styles.caracteristicasTitulo}>Votre événement, nos solutions</h2>

        <section className={styles.caracteristicaContainerResponsive}>
          <article className={styles.caracteristicaContainer}>
            <FaRegHandshake size={"2.4rem"} />
            <h3 className={styles.caracteristicaTitulo}>Engagement</h3>
            <p className={styles.caracteristicaParrafo}>Nous nous investissons avec énergie dans chaque projet</p>
          </article>
          <article className={styles.caracteristicaContainer}>
            <PiSwapThin size={"2.4rem"} />
            <h3 className={styles.caracteristicaTitulo}>Adaptabilité</h3>
            <p className={styles.caracteristicaParrafo}>Nous nous adaptons efficacement à tout défi ou environnement</p>
          </article>

          <article className={styles.caracteristicaContainer}>
            <LiaCertificateSolid size={"2.4rem"} />
            <h3 className={styles.caracteristicaTitulo}>Qualité optimale</h3>
            <p className={styles.caracteristicaParrafo}>Nous nous concentrons sur la livraison de résultats impeccables</p>
          </article>

          <article className={styles.caracteristicaContainer}>
            <IoIosTrendingUp size={"2.4rem"} />
            <h3 className={styles.caracteristicaTitulo}>Promotion élargie</h3>
            <p className={styles.caracteristicaParrafo}>Nous assurons que l'événement atteigne un public plus large</p>
          </article>
        </section>
      </section>

      <section className={styles.accionContainerBackground}>

        <section className={styles.accionContainer}>
          <section className={styles.accionContainerSuperior}>
            <h2 className={styles.accionTitulo}>Nos services en action</h2>
            <p className={styles.accionParrafo}>Découvrez certains des projets que nous avons réalisés pour nos clients</p>
          </section>
          <Slider {...settings}>
            <ServicioAccion />
            <ServicioAccion />
            <ServicioAccion />
            <ServicioAccion />
            <ServicioAccion />
          </Slider>
        </section>
      </section >


      <section className={styles.reseniasContainer}>
        <section className={styles.reseniasContainerSuperior}>
          <h2 className={styles.reseniaTitulo}>écoutez nos clients</h2>
          <p className={styles.reseniaDescrip}>Rencontrez ceux qui ont fait appel à nos services et ont fait confiance à Hisluma</p>
        </section>

        <article className={styles.containerResenias}>
          <Resenia />
          <Resenia />
        </article>
      </section>

      <Formulario />
      <Footer />
    </>
  )
}

export default Servicios