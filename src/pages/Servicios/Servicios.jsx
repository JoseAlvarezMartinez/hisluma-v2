import styles from "./Servicios.module.css"
const Servicios = () => {
  return (
    <header className={styles.headerBackground}>
      <div className={styles.oscurecerFondo}>
        <section className={styles.headerContainer}>
          <h2 className={styles.tituloHeader}>Services</h2>
          <p className={styles.descripcionHeader}>Découvrez en détail nos services et profitez d'un aperçu de nos travaux les plus remarquables</p>
        </section>
      </div>
    </header>
  )
}

export default Servicios