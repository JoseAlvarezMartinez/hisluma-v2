import styles from "./Navbar.module.css"
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { CiUser } from "react-icons/ci";
import HislumaLogo from "../../assets/hisluma-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  return (
    <nav className={styles.navbarContainer}>
      <CiUser className={styles.userLogo} color="#fff" size={"2.5rem"} strokeWidth={"0.5px"} />
      <Link to={"home"}>
        <img className={styles.hislumaLogo} src={HislumaLogo} alt="Hisluma Logo" />
      </Link>

      <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
    </nav>
  )
}

export default Navbar