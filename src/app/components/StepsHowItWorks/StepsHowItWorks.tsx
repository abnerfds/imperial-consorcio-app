import StepCard from "../StepCard/StepCard"

const StepsHowItWorks = () => {
  return (
    <section id="howtodo" className="h-[100vh] mt-40 flex flex-col justify-center">
      <section>
        
        <section className="text-center mb-20">
          <h2 className="text-[#42B4EE] text-5xl font-bold mb-5">Como funciona?</h2>
        </section>
        
        <section className="flex justify-center">
          <ul className="steps steps-vertical md:steps-horizontal lg:w-[80%] w-[98%] flex flex-col md:flex-row justify-center items-center">
            <StepCard stepDescription="Você fala com a Imperial e ela entende seus objetivos" />
            <StepCard stepDescription="A Imperial orienta opções de parcelas ideais para você" />
            <StepCard stepDescription="Você compra e gerencia tudo pelo celular em 3 minutos" />
            <StepCard stepDescription="Nosso time de humanos cuida sempre de você" />
          </ul>
        </section>
      </section>
    </section>
  )
}

export default StepsHowItWorks