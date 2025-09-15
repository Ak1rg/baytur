import styles from './styles.module.scss';

export const header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.name}></p>
            </div>
        </header>
    )
}
