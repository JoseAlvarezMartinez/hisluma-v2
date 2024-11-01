import styles from "./Clientes.module.css"
const Clientes = () => {
    return (
        <section>
            <img className={styles.clienteFoto} src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
            <p className={styles.clienteNombre}>Client 1</p>
        </section>
    )
}

export default Clientes