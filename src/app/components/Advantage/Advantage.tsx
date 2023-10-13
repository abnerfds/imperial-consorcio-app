import AdvantageCard from "./AdvantageCard/AdvantageCard";

import rh from "../../../assets/images/rh.svg";
import handshake from "../../../assets/images/handshake.svg";
import checked from "../../../assets/images/check.svg";
import unlock from "../../../assets/images/unlock.svg";
import chat from "../../../assets/images/chat.svg";
import money from "../../../assets/images/money.svg";

const Advantage = () => {
  return (
    <section id="advantages" className="flex flex-col justify-center py-40">
      <section className="text-center mb-20">
        <h2 className="text-[#42B4EE] sm:text-5xl text-4xl font-bold mb-5">As vantagens de escolher o consórcio Imperial</h2>
        <h3 className="text-[#6b7280] text-2xl">Isso e muito mais.</h3>
      </section>
      <ul className="flex flex-wrap justify-center gap-8">
        <AdvantageCard
          title="Descontos na sua parcela"
          description="Com o MyCoins você indica amigos e ganha descontos na sua parcela."
          src={unlock}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Melhores taxas."
          description="Aqui a contemplação é 2x maior do que a dos concorrentes."
          src={checked}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Melhor taxa de saúde."
          description="Aqui a contemplação é 2x maior do que a dos concorrentes."
          src={chat}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Descontos na sua parcela"
          description="Com o MyCoins você indica amigos e ganha descontos na sua parcela."
          src={handshake}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="50% mais barato"
          description="Nossa taxa é a partir de 9,99%. Metade que outros consórcios."
          src={money}
          alt="Porquinho de guardar dinheiro."
        />
        <AdvantageCard
          title="50% mais barato"
          description="Nossa taxa é a partir de 9,99%. Metade que outros consórcios."
          src={rh}
          alt="Porquinho de guardar dinheiro."
        />
      </ul>
    </section>
  )
}

export default Advantage