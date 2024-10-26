import styles from "./Nosotros.module.css"

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
    </>
  )
}

export default Nosotros