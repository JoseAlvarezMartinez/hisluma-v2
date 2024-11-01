import styles from "./Formulario.module.css"

import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Formulario = () => {
  return (
    <section className={styles.formularioContainerBackground}>
      <section className={styles.formularioContainer}>
        <section>
          <h2 className={styles.formularioTitulo}>Demander un devis</h2>
          <p className={styles.formularioDescripcion}>Contactez-nous pour un devis gratuit et découvrez comment chez Hisluma nous pouvons améliorer votre projet en ligne</p>

          <div className={styles.informacionContainer}>
            <IoLocationSharp />
            <p>Adresse 123, Ville, France</p>
          </div>

          <div className={styles.informacionContainer}>
            <IoMail />
            <p>Adresse email</p>
          </div>

          <div className={styles.informacionContainer}>
            <FaPhoneAlt />
            <p>Numéro de téléphone</p>
          </div>
        </section>
        <form className={styles.formulario}>
          <div className={styles.formularioGrid}>
            <input className={styles.nombreForm} type="text" placeholder="Prénom" />
            <input className={styles.nom} type="text" placeholder="Nom de famille" />
            <input className={styles.correo} type="email" placeholder="Adresse email" />

            <input className={styles.informacion} type="text" placeholder="Consultation" />
          </div>
          <div className={styles.botonContainer}>
            <button className={styles.boton}>Demander un devis</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Formulario