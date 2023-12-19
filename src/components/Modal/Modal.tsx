import React from 'react'
import styles from './Modal.module.css'

type Props = {
    children: React.ReactNode
    handleModalChange: () => void
}

const Modal = ({ handleModalChange, children }: Props) => {
    return (
        <div>
            <div className={styles.fade}>
                <div className={styles.modal}>
                    <div className={styles.close} onClick={handleModalChange}>
                        <i className='bi bi-x-square-fill'></i>
                    </div>

                    <h2>Texto do modal</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal