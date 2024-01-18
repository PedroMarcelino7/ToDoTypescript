import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <span>To Do list with <span className={styles.highlight}>React</span> / <span className={styles.highlight}>Typescript</span></span>
            </p>
        </footer>
    )
}

export default Footer