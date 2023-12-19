import React from 'react'
import styles from './Error.module.css'

type Props = {}

const Error = (props: Props) => {
    return (
        <div className={styles.error_container}>
            <div className={styles.error}>
                <h1>Nenhuma atividade registrada</h1>
            </div>
        </div>
    )
}

export default Error