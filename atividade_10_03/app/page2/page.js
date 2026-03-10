import styles from "./page2.module.css";

export default function home() {
    return (
        <main>
        <div className={styles.container1}>
            content
        </div>

        <div className={styles.container2}>
            content
        </div>
        </main>

        //as duas divs nao ficam alinhadas por causa do padding da segunda div ou .container2 ele pede um "preenchimento" maior na questao.
    );
}