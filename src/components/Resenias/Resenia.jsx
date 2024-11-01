import styles from "./Resenia.module.css"

const Resenia = () => {
    return (
        <div className={styles.reseniaContainer}>
            <div className={styles.reseniaSuperior}>
                <img className={styles.reseniaFoto} src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
                <section>
                    <h3>Client 1</h3>
                    <p>Position ou description du client</p>
                </section>
            </div>
            <p className={styles.reseniaDescripcion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis obcaecati enim quis est odit ipsum error illum praesentium maiores.</p>
        </div>
    )
}

export default Resenia