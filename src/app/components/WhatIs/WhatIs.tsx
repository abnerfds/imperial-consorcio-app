import Image from 'next/image'
import car from '../../../assets/images/young-man-choosing-car-car-showroom.jpg'

const WhatIs = () => {
  return (
    <section id='whatis' className="bg-[#42B4EE] h-[120vh] mt-40 flex items-center">
      <section className="flex justify-around items-center w-[90%] mx-auto">

        <article className="w-2/3 text-white">
          <h2 className=" text-5xl font-bold mb-10">
            O que é consórcio?
          </h2>
          <section className="w-[90%] text-lg leading-7">
            <p className="mb-8 border-l-4 border-white border-solid pl-3">
              O consórcio nada mais é do que uma modalidade de investimento segura e mais barata para
              programar a compra do seu automóvel de forma parcelada e sem juros.
            </p>
            <p className="mb-8 border-l-4 border-white border-solid pl-3">
              Trata-se de tipo de crédito em que pessoas (físicas ou jurídicas) se juntam colaborativamente
              em um grupo para comprar um bem de interesse comum (carro novo, seminovo, usado, caminhões),
              cujos prazos e valores são determinados de acordo com o plano e percentual.
            </p>
            <p className="mb-8 border-l-4 border-white border-solid pl-3">
              No consórcio, todos os participantes têm a mesma chance de adquirir seu bem por sorteio
              ou lance, uma vez que cada um se compromete a honrar suas parcelas, contribuindo para que
              todos realizem o sonho de um carro novo na garagem.
            </p>
          </section>
        </article>

        <section>
          <Image
            src={car}
            alt="carro"
            width={800}
            height={800}
          />
        </section>
      </section>
    </section>
  )
}

export default WhatIs