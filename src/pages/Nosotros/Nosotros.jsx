import styles from "./Nosotros.module.css"

import { FaLinkedin } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";


import Clientes from "../../components/Clientes/Clientes";
import Resenia from "../../components/Resenias/Resenia";
import HislumaLogo from "../../assets/hisluma-logo.png";
import Formulario from "../../components/Formulario/Formulario";


const Nosotros = () => {
  return (
    <>
      <header className={styles.headerBackground}>
        <div className={styles.oscurecerFondo}>
          <section className={styles.headerContainer}>
            <h2 className={styles.tituloHeader}>à propos de nous</h2>
            <p className={styles.parrafoHeader}>Découvrez plus sur Hisluma, notre équipe et les clients qui nous font confiance</p>
          </section>
        </div>
      </header>

      <article className={styles.introduccionContainer}>
        <h2 className={styles.introduccionTitulo}>Vous avez un projet de diffusion de votre événement sur internet et vous ne savez par OÙ commencer?</h2>
        <p className={styles.introduccionParrafo}>Hisluma est une start-up spécialisée en marketing digital et audiovisuel. Nous vous aidons à diffuser vos événements en ligne, avec promotion ciblée et création de contenu pour réseaux sociaux ou reportages. Hisluma vous accompagne pour maximiser votre visibilité sur internet.</p>
      </article>

      <main className={styles.mainContainer}>
        <h1 className={styles.mainTitulo}>À propos de Hisluma</h1>
        <p className={styles.mainDescripcion}>
          Hisluma est une start-up spécialisée dans le marketing sportif et les opérations audio visuelles dans ce domaine.
          <span>Hisluma focalise son travail dans la contribution de la visibilité du sport en faisant des retransmissions d’événements sportifs soutenues par une promotion de l’événement et un suivi avec des reportages écrits et des interviews.</span>
          <span>
            En intérieur, ou en extérieur, une compétition locale, régionale ou nationale, vous pouvez compter sur la présence d’Hisluma dans vos événements.
          </span>
        </p>
      </main>

      <section className={styles.containerInferior}>
        <h2 className={styles.containerInferiorTitulo}>Pourquoi « Hisluma » ?</h2>
        <p className={styles.containerInferiorParrafo}>Le terme «macondiano» fait référence au roman Cent ans de solitude de Gabriel García Márquez. C'est de là que vient le nom «Hisluma», un diminutif de «Historias de un Luchador Macondiano», qui signifie «Histoires d’un lutteur macondiano».</p>

        <img className={styles.hislumaLogo} src={HislumaLogo} alt="" />
      </section>

      <section className={styles.equipoContainer}>
        <h2 className={styles.equipoTitulo}>rencontrez notre équipe</h2>
        <h3 className={styles.equipoSubtitulo}>Rencontrez l'équipe Hisluma</h3>


        <div className={styles.miembrosContainer}>

          <article className={styles.miembroInfo}>
            <div className={styles.userFoto}></div>
            <h2 className={styles.nombre}>Camilo Daza</h2>
            <h3 className={styles.rol}>Fondateur</h3>
            <p className={styles.descripcion}>Master en administration Sportive <span>
              Master en Marketing Digital</span></p>
            <FaLinkedin size={"2rem"} />
          </article>

          <article className={styles.miembroInfo}>
            <div className={styles.userFoto}></div>
            <h2 className={styles.nombre}>Camilo Daza</h2>
            <h3 className={styles.rol}>Fondateur</h3>
            <p className={styles.descripcion}>Master en administration Sportive <span>
              Master en Marketing Digital</span></p>
            <FaLinkedin size={"2rem"} />
          </article>
        </div>
      </section>


      <section className={styles.lema}>
        <FaQuoteLeft color="#FFCC00" size={"4rem"} />
        <p className={styles.duenioLema}>Notre objectif est de propulser votre événement en ligne grâce à un accompagnement sur mesure, spécialement conçu pour captiver votre audience et maximiser votre impact</p>
        <p className={styles.duenioFirma}>- Camilo Daza, Fondateur</p>
      </section>

      <section className={styles.nuestrosClientes}>

        <h2 className={styles.tituloCliente}>Nos clients</h2>
        <p className={styles.descripcionCliente}>Rencontrez ceux qui ont fait appel à nos services et ont fait confiance à Hisluma</p>

        <article className={styles.clientesContainer}>
          <Clientes />
          <Clientes />
          <Clientes />
          <Clientes />
          <Clientes />
        </article>
      </section>

      <article className={styles.reseniasContainer}>
        <Resenia />
        <Resenia />
      </article>

      <Formulario />

    </>
  )
}

export default Nosotros