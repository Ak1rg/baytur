import styles from './styles.module.scss';

export const Discount = () => {
    return (
        <section className={styles.section}>
            <div className={styles.box}>
                <p className={styles.title}>Спецпредложение!   Принимайте участие в акции! </p>
                <p className={styles.text}>Люди могут обещать тебе золотые горы, но пока они не поставят подпись на договоре, это ничего не значит.</p>
            </div>
        </section>
    )
}
