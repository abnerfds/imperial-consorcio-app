import Image, { StaticImageData } from 'next/image'

type AdvantageProps = {
  title: string
  description: string
  src: StaticImageData
  alt: string
}

const AdvantageCard = ({ title, description, src, alt }: AdvantageProps) => {
  return (
    <li className="flex flex-row md:flex-col justify-center md:gap-0 gap-4 items-center md:items-start w-[90%] md:w-[22rem] md:h-[15rem] bg-[#F5F6FA] rounded-xl p-4 md:px-7 md:py-4">
      <section className='w-[20%] md:w-auto flex justify-center'>
        <Image
          src={src}
          alt={alt}
          width={45}
          className="mb-0 md:mb-4 text-[#42B4EE]"
        />
      </section>
      <section className='w-[80%] md:w-auto'>
        <h4 className="text-[#42B4EE] text-xl font-semibold mb-2">{title}</h4>
        <p className='text-[#6b7280]'>{description}</p>
      </section>
    </li>
  )
}

export default AdvantageCard