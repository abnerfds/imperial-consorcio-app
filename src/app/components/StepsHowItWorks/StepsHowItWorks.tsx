import './stepsHowItWorks.scss';
import StepCard from "./StepCard/StepCard"

const StepsHowItWorks = () => {
    return (
        <section id="howtodo" className="h-auto mt-40 w-full flex flex-col justify-center items-center">

            <section className="text-center w-[95%] mb-32">
                <h2 className="text-[#42B4EE] sm:text-5xl text-4xl font-bold mb-5">Entenda o consórcio em 4 passos</h2>
                <p className='text-[#6b7280] text-2xl'>Veja quais são as etapas de um consórcio desde o início até o fim.</p>
            </section>

            <section className="flex flex-wrap justify-center w-full gap-12 md:gap-6 lg:gap-12">
                <StepCard
                    stepTitle='Escolha do plano'
                    stepCount='1º passo'
                    stepDescription='Você fala com a Imperial e ela entende seus objetivos'
                />
                <StepCard
                    stepTitle='Acompanhamento'
                    stepCount='2º passo'
                    stepDescription="A Imperial orienta opções de parcelas ideais para você"
                />
                <StepCard
                    stepTitle='Contemplação'
                    stepCount='3º passo'
                    stepDescription="Você compra e gerencia tudo pelo celular em 3 minutos"
                />
                <StepCard
                    stepTitle='Compra do bem'
                    stepCount='4º passo'
                    stepDescription="Nosso time de humanos cuida sempre de você no que precisar"
                />
            </section>
        </section>
    )
}

export default StepsHowItWorks