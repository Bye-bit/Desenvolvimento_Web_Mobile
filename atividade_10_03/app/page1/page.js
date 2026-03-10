import styles from "./page1.module.css";


export default function Home() {
    return (
        <main className={`${styles.container} ${styles.background}`}>
            <h1 className={styles.h1}>
                primeiro exercicio em css
            </h1>
        </main>
    );
}