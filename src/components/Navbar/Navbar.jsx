import styles from "./Navbar.module.css"
import { useState, useEffect } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { CiUser } from "react-icons/ci";
import HislumaLogo from "../../assets/hisluma-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className={styles.navbarContainer}>
      {isMobile ? (
        <>
          <CiUser className={styles.userLogo} color="#fff" size={"2.5rem"} strokeWidth={"0.5px"} />
          <Link to={"home"}>
            <img className={styles.hislumaLogo} src={HislumaLogo} alt="Hisluma Logo" />
          </Link>
          <div className={styles.menuHamburguesa} >
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>

        </>
      ) : (
        <>
          <Link to={"home"}>
            <img className={styles.hislumaLogo} src={HislumaLogo} alt="Hisluma Logo" />
          </Link>
          <div className={styles.rightIcons}>
            <CiUser className={styles.userLogo} color="#fff" size={"2rem"} strokeWidth={"0.5px"} />
            <div className={styles.menuHamburguesa} >
              <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
            </div>

            <ul className={isMobile > 800 ? "" : styles.navBarActivacion}>
              <li><Link>Accueil</Link></li>
              <li><Link>Services</Link></li>
              <li><Link>Actualités</Link></li>
              <li><Link>Calendrier</Link></li>
              <li><Link>à propos de nous </Link></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar