import styles from "./Clientes.module.css"
const Clientes = ({imagen}) => {
    return (
        <section>
            <img className={styles.clienteFoto} src={imagen} alt="" />
            <p className={styles.clienteNombre}>Client 1</p>
        </section>
    )
}

export default Clientes