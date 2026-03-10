import styles from "./page4.module.css"

export default function home() {
    return (
        <main>
            <div className={styles.produto}>
                <div className={styles.card}>
                    <img src= "/sapato1.png"></img>
                    <p>sapato importante</p>
                    <p>(esse e estiloso)</p>
                    <p>1 dinheiros</p>
                </div>

                <div className={styles.card}>
                    <img src="/sapato2.png"></img>
                    <p>sapato de praia</p>
                    <p>(enche de areia)</p>
                    <p>10 dinheiros</p>
                </div>

                   <div className={styles.card}>
                    <img src="/sapato3.png"></img>
                    <p>sapato de banana</p>
                    <p>esse e top</p>
                    <p>100 dinheiros</p>
                </div>

                   <div className={styles.card}>
                    <img src="/sapato4.png"></img>
                    <p>sapato comum</p>
                    <p>todo mundo ja viu um</p>
                    <p>10000 dinheiros</p>
                </div>

                   <div className={styles.card}>
                    <img src="/sapato5.png"></img>
                    <p>sapato da cruella</p>
                    <p>(raro)</p>
                    <p>100000 dinheiros</p>
                </div>    
            </div>


               <div className={styles.footer}>
                SAPATOS PRIME SETUBAL
            </div>


        </main>
    );
}