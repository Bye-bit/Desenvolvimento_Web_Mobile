import Image from "next/image";

export default function Home() {
  return (
    <main style={{display : "flex" , justifyContent: "center", alignItems: "center", height: '100vh'}}>
      <div className="w-150 h-200 bg-[#A6A6A6] rounded-xl shadow-xl flex flex-col items-center justify-top pt-6 outline outline-2 outline-black" >
        <Image src = "/assets/eu.jpeg" width={120}height={120} alt = "foto do GOAT" className="rounded-full outline outline-2 outline-black"/>

         <p className="font-bold text-black text-2xl mt-4 text-center" >
          Lucas Fernandes
        </p>

        <p className="text-black text-sm mt-1 text-center">
          Eu me chamo Lucas Fernandes, atualmente sou um estudante de <br/>
          Ciência da Computação. Tenho 20 anos e estou gostando cada vez mais deste curso. <br/>
          Gosto muito de jogos, de computadores e de Anna ;)
        </p>

        <a
          href="https://github.com/Bye-bit"
          className= "text-black mt-4 underline"
          >
            Meu GitHub
        </a>

          
      </div>
    </main>

  );
}
