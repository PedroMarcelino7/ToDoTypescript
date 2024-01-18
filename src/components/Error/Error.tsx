import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.error_container}>
            <div className={styles.error}>
                <h1>Nenhuma atividade registrada</h1>
            </div>
        </div>
    )
}

export default Error