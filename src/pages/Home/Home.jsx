import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import styles from "./Home.module.css"

import hislumaLogo from "../../assets/hisluma-logo.png"
import imagenPrueba from "../../assets/nosotrosBackground.jpg"
import destacadoBackground from "../../assets/destacadoBackground.png"

import HomeCard from "../../components/HomeCard/HomeCard"
import Temporada from "../../components/Temporada/Temporada"
import Footer from "../../components/Footer/Footer"

import Slider from "react-slick";
import Partidos from "../../components/Partidos/Partidos"


const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  };
  const [vistaDesktop, setVistaDesktop] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setVistaDesktop(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
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


        <div className={styles.camaraHomeBackgroundContainer}>
          <div className={styles.camaraHomeBackground}>
            <div className={styles.oscurecerFondoCamara}>
              <p>Service le plus choisi</p>
            </div>
          </div>

          <section>
            <h3 className={styles.videoTitulo}>VIDÉO</h3>
            <ul className={styles.listaDesordenada}>
              <li className={styles.listItem}><span className={styles.spanFont}>Retransmission/Diffusion en direct d'événements:</span> conférences, événements corporatifs, événements sportifs, forums, salons, et autres manifestations nécessitant ce service</li>
              <li className={styles.listItem}><span className={styles.spanFont}>Montage Vidéo</span> professionnel pour des projets créatifs et promotionnels</li>
              <li className={styles.listItem}><span className={styles.spanFont}>Création de contenu dynamique:</span> reels, TikTok, Shorts pour booster la présence sur les réseaux sociaux</li>
            </ul>
          </section>
        </div>
        <article className={styles.homeCardContainer}>
          <HomeCard titulo={"Photographie"} imagen={imagenPrueba} />
          <HomeCard titulo={"Marketing digital"} imagen={imagenPrueba} />
          <HomeCard titulo={"Contenu publicitaire"} imagen={imagenPrueba} />
          <HomeCard titulo={"Support linguistique"} imagen={imagenPrueba} />
        </article>

        <div className={styles.btnContainer}>
          <button className={styles.btnVerMas}>lire plus</button>
        </div>
      </main >




      <section className={styles.temporadaContainer}>
        <h2>Actualités</h2>

        {
          vistaDesktop ? (
            <>
              <Temporada posicion={"portada"} />

              <Slider {...settings} className={styles.sliderContainer}>
                <Temporada posicion={"slider"} />
                <Temporada posicion={"slider"} />
                <Temporada posicion={"slider"} />
              </Slider>
              <div className={styles.btnContainerVisiter}>
                <button className={styles.btnVerMas}>Visiter Les actus</button>
              </div>
            </>
          ) : (
            <>
              <section className={styles.actualitesContainer}>
                <Temporada posicion={"portada"} />

                <div className={styles.temporadaGridDerecha}>
                  <Temporada posicion={"slider"} />
                  <Temporada posicion={"slider"} />
                </div>

              </section>
              <div className={styles.btnContainerVisiter}>
                <button className={styles.btnVerMas}>Visiter Les actus</button>
              </div>
            </>
          )
        }


      </section>






      <section className={styles.responsiveDestacadoPartidos}>
        <article className={styles.destacadoContainer}>
          <img className={styles.destacadoImagen} src={destacadoBackground} alt="" />

          <section>
            <h2 className={styles.destacadoTitulo}>Á LA UNE / DESTACADO</h2>
            <p className={styles.destacadoDescripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula</p>
          </section>
          <section>
            <h2 className={styles.destacadoTitulo}>Á LA UNE / DESTACADO</h2>
            <p className={styles.destacadoDescripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula</p>
          </section>
          <section>
            <h2 className={styles.destacadoTitulo}>Á LA UNE / DESTACADO</h2>
            <p className={styles.destacadoDescripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula</p>
          </section>
          <section>
            <h2 className={styles.destacadoTitulo}>Á LA UNE / DESTACADO</h2>
            <p className={styles.destacadoDescripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula</p>
          </section>
          <section>
            <h2 className={styles.destacadoTitulo}>Á LA UNE / DESTACADO</h2>
            <p className={styles.destacadoDescripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula</p>
          </section>
          <section>
            <h2 className={styles.destacadoTitulo}>Á LA UNE / DESTACADO</h2>
            <p className={styles.destacadoDescripcion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisl quis ornare eleifend, dui leo viverra ligula</p>
          </section>
        </article>



        <section className={styles.partidosContainer}>
          <h2 className={styles.partidosContainerTitulo}>Prochains matchs</h2>
          <section className={styles.partidosGrid}>
            <Partidos />
            <Partidos />
            <Partidos />
            <Partidos />
          </section>
          <div className={styles.botonesContainer}>
            <button className={styles.visitarCalendario}>Visiter Le Calendrier</button>
            <button className={styles.sincronizarCalendario}>Synchroniser calendrier</button>
          </div>
        </section>
      </section>
      <section>
        <section className={styles.experienciaContainer}>
          <section className={styles.experienciaBackground}>
            <section className={styles.oscurecerFondoExperiencia}>
              <h2 className={styles.experienciaTitulo}>Experimente l´ action du sport avec <span>hisluma</span></h2>

              <Link>Abonne-toi</Link>
            </section>
          </section>
        </section>
        <section className={styles.experienciaContainer}>
          <section className={styles.experienciaBackground}>
            <section className={styles.oscurecerFondoExperiencia}>
              <h2 className={styles.experienciaTitulo}>Experimente l´ action du sport avec <span>hisluma</span></h2>

              <Link>Abonne-toi</Link>
            </section>
          </section>
        </section>
        <section className={styles.experienciaContainer}>
          <section className={styles.experienciaBackground}>
            <section className={styles.oscurecerFondoExperiencia}>
              <h2 className={styles.experienciaTitulo}>Experimente l´ action du sport avec <span>hisluma</span></h2>

              <Link>Abonne-toi</Link>
            </section>
          </section>
        </section>
      </section>
      <section className={styles.explorarContainer}>
        <h2 className={styles.explorarTitulo}>Explorer d´ autres sujets</h2>


        <section className={styles.explorarContainerFlex}>
          <section className={styles.explorarBackground}>
            <section className={`${styles.oscurecerFondo} ${styles.explorarBackgroundContainer}`}>
              <h3>Podcast</h3>
            </section>
          </section>

          <section className={styles.explorarBackground}>
            <section className={`${styles.oscurecerFondo} ${styles.explorarBackgroundContainer}`}>
              <h3>Podcast</h3>
            </section>
          </section>
        </section>

      </section>



      <Footer />
    </>
  )
}

export default Home