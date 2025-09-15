import styles from './styles.module.scss';

export const AboutUs = () => {
    return (
        <section className={styles.section}>
            <img className={styles.img} src="img/berries.png" alt="" />
            <div className={styles.box}>
                <p className={styles.title}>Коротко о нас</p>
                <div className={styles.wrapper}>
                    <p className={styles.text}>На странице "О нас" можно разместить  описание своего опыта работы, как важно и дорого вам то, чем вы знимаетесь. С кем вы сотрудничаете, каких успехов добились.Написать немного о своей команде. </p>
                    <p className={styles.text}>О том, какие они профессиональные и преданные своему делу люди. Ну или о себе - если в команде пока только один человек - ВЫ :)</p>
                    <p className={styles.text}>Так же тут можно повторить еще раз перечень ключевых товаров и услуг, продублировать акции и спецпредложения.</p>
                </div>
            </div>
        </section>
    )
}
