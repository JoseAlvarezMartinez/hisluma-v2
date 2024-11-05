import styles from "./Navbar.module.css"

import { useState, useEffect } from "react"

import { Squash as Hamburger } from 'hamburger-react'
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

import HislumaLogo from "../../assets/hisluma-logo.png"


const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <nav className={styles.navbarContainer}>
      {isMobile ? (
        <>
          <CiUser className={styles.userLogo} color="#fff" size={"2rem"} strokeWidth={"0.5px"} />
          <Link to={"home"}>
            <img className={styles.hislumaLogo} src={HislumaLogo} alt="Hisluma Logo" />
          </Link>
          <div className={styles.menuHamburguesa} >
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>

          <ul className={isOpen ? styles.navBarActivacion : styles.navBarInactiva}>
          <li><Link to={"home"}>Accueil</Link></li>
              <li><Link to={"services"}>Services</Link></li>
              <li><Link to={"nous"}>Actualités</Link></li>
            <li><Link>Calendrier</Link></li>
            <li><Link>À propos de nous</Link></li>
          </ul>
        </>
      ) : (
        <>
          <Link to={"home"}>
            <img className={styles.hislumaLogo} src={HislumaLogo} alt="Hisluma Logo" />
          </Link>
          <div className={styles.rightIcons}>
            <CiUser className={styles.userLogo} color="#fff" size={"2rem"} strokeWidth={"0.5px"} />

            <ul className={isOpen ? styles.navBarActivacion : styles.navBarInactiva}>
              <li><Link to={"home"}>Accueil</Link></li>
              <li><Link to={"services"}>Services</Link></li>
              <li><Link to={"nous"}>Actualités</Link></li>
              <li><Link>Calendrier</Link></li>
              <li><Link>À propos de nous</Link></li>
            </ul>
          </div>
        </>
      )}

    </nav>
  )
}

export default Navbar