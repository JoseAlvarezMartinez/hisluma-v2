import styles from "./Footer.module.css"

import HislumaLogo from "../../assets/hisluma-logo.png"

import { Link } from "react-router-dom"
import { CiInstagram, CiYoutube, CiTwitter, CiFacebook } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className={styles.footerBackground}>
      <div className={styles.footerContainer}>
        <img className={styles.hislumaLogo} src={HislumaLogo} alt="" />

        <div>
          <div className={styles.footerGrid}>
            <section>
              <h4 className={styles.hislumaTv}>Hisluma <span>tv</span></h4>
              <Link>Boutique</Link>
              <Link>Expériencies</Link>
              <Link>Vidéos et photos</Link>
              <Link>Engagement</Link>
            </section>
            <section>
              <h4 className={styles.terminos}>Termes et conditions</h4>
              <Link>Conditions d´utilisation</Link>
              <Link>Vie privée</Link>
              <Link>Mentions privées et réglementations</Link>
            </section>
          </div>
          <div className={styles.redesContainer}>
            <CiInstagram size={"2rem"} color="#fff" />
            <CiYoutube size={"2rem"} color="#fff" />
            <CiTwitter size={"2rem"} color="#fff" />
            <CiFacebook size={"2rem"} color="#fff" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer