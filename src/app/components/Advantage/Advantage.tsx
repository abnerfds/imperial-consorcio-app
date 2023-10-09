import AdvantageCard from "../AdvantageCard/AdvantageCard";

import piggyBank from "../../../assets/images/piggy-bank.png";
import offer from "../../../assets/images/offer.png";
import checked from "../../../assets/images/checked.png";
import unlock from "../../../assets/images/unlock.png";
import people from "../../../assets/images/people.png";
import key from "../../../assets/images/key.png";

const Advantage = () => {
  return (
    <section className="h-[100vh] mt-40">
      <section className="text-center mb-20">
        <h2 className="text-[#42B4EE] text-5xl font-bold mb-5">As vantagens de escolher o consórcio Imperial</h2>
        <h3 className="text-[#6b7280] text-2xl font-extralight">Isso e muito mais.</h3>
      </section>

      <ul className="flex flex-wrap justify-center gap-8">
        <AdvantageCard
          title="50% mais barato"
          description="Nossa taxa é a partir de 9,99%. Metade que outros consórcios."
          src={piggyBank}
          alt="Porquinho de guardar dinheiro."
        />
        <AdvantageCard
          title="Melhor taxa de contemplação."
          description="Aqui a contemplação é 2x maior do que a dos concorrentes."
          src={checked}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Descontos na sua parcela"
          description="Com o MyCoins você indica amigos e ganha descontos na sua parcela."
          src={offer}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="50% mais barato"
          description="Nossa taxa é a partir de 9,99%. Metade que outros consórcios."
          src={key}
          alt="Porquinho de guardar dinheiro."
        />
        <AdvantageCard
          title="Melhor taxa de contemplação."
          description="Aqui a contemplação é 2x maior do que a dos concorrentes."
          src={people}
          alt="Sinal de check."
        />
        <AdvantageCard
          title="Descontos na sua parcela"
          description="Com o MyCoins você indica amigos e ganha descontos na sua parcela."
          src={unlock}
          alt="Sinal de check."
        />
      </ul>
    </section>
  )
}

export default Advantage