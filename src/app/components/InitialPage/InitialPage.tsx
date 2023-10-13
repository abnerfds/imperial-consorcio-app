import './initialPage.scss';
import Image from "next/image";
import guyPointing from "../../../assets/images/guy-pointing.png";

const InitialPage = () => {
  return (
    <section className="home__bg-purple h-[100vh] flex justify-center items-center overflow-hidden">
        
        <section className="z-10 lg:w-[32%] md:w-[35%] w-[90%] text-white">
          <p className="lg:text-[3.5rem] text-[3rem] leading-tight mb-7">
            Realize seus <span className="font-semibold">planos</span> com a <span className="font-semibold">Imperial</span>!
          </p>
          <p className="mb-7 text-lg">Tem dúvidas sobre o consórcio?</p>
          <button className="bg-[#42B4EE] font-semibold md:text-sm lg:py-3 lg:px-7 py-3 px-3 rounded-[5px] uppercase">
            Saiba mais
          </button>
        </section>

        {/* <section className="xl:w-[50%] w-[60%] md:block hidden"> */}
        <section className="xl:w-[50%] w-[60%] md:block hidden">
          <Image
            src={guyPointing}
            alt='Cara apontando para uma frase à esquerda.'
            className="min-h-[20rem] min-w-[24rem]"
          />
        </section>

        <div className="custom-shape-divider-bottom-1696870364">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
      </section>
  )
}

export default InitialPage