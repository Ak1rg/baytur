import styles from './styles.module.scss';

export const Offers = () => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>Горячие предложения</p>
            <div className={styles.box}>
                <div className={styles.card}>
                    <img className={styles.img} src="img/cow.png" alt="" />
                    <p className={styles.cardTitle}>ПРЕДЛОЖЕНИЕ ДНЯ</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                    <button className={styles.btn}>Подробнее</button>
                </div>
                <div className={styles.card}>
                    <img className={styles.img} src="img/pig.png" alt="" />
                    <p className={styles.cardTitle}>ПРЕДЛОЖЕНИЕ ДНЯ</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                    <button className={styles.btn}>Подробнее</button>
                </div>
                <div className={styles.card}>
                    <img className={styles.img} src="img/goat.png" alt="" />
                    <p className={styles.cardTitle}>ПРЕДЛОЖЕНИЕ ДНЯ</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                    <button className={styles.btn}>Подробнее</button>
                </div>
            </div>
        </section>
    )
}
