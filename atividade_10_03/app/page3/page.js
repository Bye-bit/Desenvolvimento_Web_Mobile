import styles from './page3.module.css'


export default function home() {
    return (
        <main>
        <div className= {styles.container1}>
            A tecnologia continua transformando a forma como as pessoas vivem, trabalham e se comunicam no dia a dia.<br>
            </br> Com o avanço constante da internet e das ferramentas digitais, muitas atividades que antes exigiam presença física agora podem ser realizadas de qualquer lugar do mundo.<br>
            </br> Isso abriu novas oportunidades de aprendizado, colaboração e inovação, permitindo que indivíduos e empresas se conectem de maneira mais rápida e eficiente.<br>
            </br> Ao mesmo tempo, esse crescimento traz desafios importantes, como a necessidade de segurança digital, privacidade de dados e adaptação constante às novas ferramentas e métodos de trabalho.
        </div>
        <div className= {styles.container2}>
            <a href="https://google.com">Ir para o Google</a> <br></br>
            <a href="https://youtube.com">Ir para o Youtube</a>
        </div>
    </main>
    );
}