import styles from './styles.module.scss';

export const Specifics = () => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>Особенности</p>
            <div className={styles.box}>
                <div className={styles.card}>
                    <div className={styles.circle}>
                        <img className={styles.icon} src="img/gear.svg" alt="" />
                    </div>
                    <p className={styles.cardTitle}>Лидерство</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.circle}>
                        <img className={styles.icon} src="img/bomb.svg" alt="" />
                    </div>
                    <p className={styles.cardTitle}>Опыт</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.circle}>
                        <img className={styles.icon} src="img/gift.svg" alt="" />
                    </div>
                    <p className={styles.cardTitle}>Надежность</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.circle}>
                        <img className={styles.icon} src="img/bug.svg" alt="" />
                    </div>
                    <p className={styles.cardTitle}>Экологичность</p>
                    <p className={styles.text}>Разместите тут небольшое, но заманчивое, описание особого предложения.</p>
                </div>
            </div>
        </section>
    )
}
