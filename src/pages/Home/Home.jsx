import styles from "./Home.module.css"
import hislumaLogo from "../../assets/hisluma-logo.png"
import ServiciosCard from "../../components/ServiciosCard/ServiciosCard"

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

 
    </>
  )
}

export default Home