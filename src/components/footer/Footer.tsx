import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.col}>
                <h4 className={styles.title}>Контакты</h4>
                <p className={styles.text}>
                    <img className={styles.img} src="img/phone.svg" alt="" />
                    +996(555)55-55-55
                </p>
                <p className={styles.text}>
                    <img className={styles.img} src="img/geo.svg" alt="" />
                    г.Бишкек ул.Советская 176
                </p>
                <p className={styles.text}>
                    <img className={styles.img} src="img/mail.svg" alt="" />
                    abcd@gmail.com
                </p>
            </div>
        </footer>
    )
}
