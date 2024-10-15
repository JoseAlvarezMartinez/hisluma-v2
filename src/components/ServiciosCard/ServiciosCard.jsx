import styles from "./ServiciosCard.module.css"

const ServiciosCard = ({titulo}) => {
  return (
    <article className={`${styles.serviciosBackground}`} >
      <section className={styles.oscurecerFondo}>
        <h3 className={styles.serviciosHeading}>{titulo}</h3>
      </section>
    </article>
  )
}

export default ServiciosCard