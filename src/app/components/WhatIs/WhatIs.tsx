import './whatIs.scss'

const WhatIs = () => {
  return (
    <section id='whatis' className="bg-purple-p min-h-[70vh] lg:min-h-screen flex justify-center items-center py-20">
      <section className="flex flex-col lg:flex-row justify-around items-center md:w-[90%] w-[95%] text-white">

        <h3 className="text-left sm:text-5xl text-4xl font-bold lg:mb-0 mb-12">
          O que é consórcio?
        </h3>
        
        <section className="w-full text-lg md:text-2xl lg:text-xl leading-7 flex flex-col justify-between gap-10">
          <p className="border-l-4 border-white border-solid pl-3">
            O consórcio nada mais é do que uma modalidade de investimento segura e mais barata para
            programar a compra do seu automóvel de forma parcelada e sem juros.
          </p>
          <p className="border-l-4 border-white border-solid pl-3">
            Trata-se de tipo de crédito em que pessoas (físicas ou jurídicas) se juntam colaborativamente
            em um grupo para comprar um bem de interesse comum (carro novo, seminovo, usado, caminhões),
            cujos prazos e valores são determinados de acordo com o plano e percentual.
          </p>
          <p className="border-l-4 border-white border-solid pl-3">
            No consórcio, todos os participantes têm a mesma chance de adquirir seu bem por sorteio
            ou lance, uma vez que cada um se compromete a honrar suas parcelas, contribuindo para que
            todos realizem o sonho de um carro novo na garagem.
          </p>
        </section>
      </section>
    </section>
  )
}

export default WhatIs