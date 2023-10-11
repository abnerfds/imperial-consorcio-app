import Image, { StaticImageData } from 'next/image'

type AdvantageProps = {
  title: string
  description: string
  src: StaticImageData
  alt: string
}

const AdvantageCard = ({ title, description, src, alt }: AdvantageProps) => {
  return (
    <li className="flex flex-col justify-center w-[350px] h-[240px] bg-[#F5F6FA] rounded-xl px-8 py-6">
      <Image
        src={src}
        alt={alt}
        width={45}
        className="mb-4 text-[#42B4EE]"
      />
      <h4 className="text-[#42B4EE] text-xl font-black mb-2">{title}</h4>
      <p className='text-[#6b7280]'>{description}</p>
    </li>
  )
}

export default AdvantageCard