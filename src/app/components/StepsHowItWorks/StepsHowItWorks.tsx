'use client'
import './stepsHowItWorks.scss';
import StepCard from "./StepCard/StepCard"
import { useEffect, useState } from 'react';


const StepsHowItWorks = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1040);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section id="howtodo" className="min-h-screen py-56 w-full flex flex-col justify-center items-center">

      <section className="text-center w-[95%] mb-10 md:mb-32">
        <h2 className="text-[#42B4EE] sm:text-5xl text-4xl font-bold mb-5">Entenda o consórcio em 4 passos</h2>
        <p className='text-[#6b7280] text-2xl'>Veja quais são as etapas de um consórcio desde o início até o fim.</p>
      </section>

      <section className={`${isSmallScreen ? 'w-[95%] h-[50vh] text-center carousel rounded-box flex items-center' : 'flex flex-wrap justify-center w-full gap-12 md:gap-6 lg:gap-12'}`}>
        <StepCard
          classStyle='indicator-p'
          stepTitle='Escolha do plano'
          stepCount='1º passo'
          stepDescription='Você fala com a Imperial e ela entende seus objetivos'
          isSmallScreen={isSmallScreen}
        />
        <StepCard
          classStyle='indicator-p'
          stepTitle='Acompanhamento'
          stepCount='2º passo'
          stepDescription="A Imperial orienta opções de parcelas ideais para você"
          isSmallScreen={isSmallScreen}
        />
        <StepCard
          classStyle='indicator-p'
          stepTitle='Contemplação'
          stepCount='3º passo'
          stepDescription="Você compra e gerencia tudo pelo celular em 3 minutos"
          isSmallScreen={isSmallScreen}
        />
        <StepCard
          stepTitle='Compra do bem'
          stepCount='4º passo'
          stepDescription="Nosso time de humanos cuida sempre de você no que precisar"
          isSmallScreen={isSmallScreen}
        />
      </section>
    </section>
  )
}

export default StepsHowItWorks