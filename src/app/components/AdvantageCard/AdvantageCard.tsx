import Image, { StaticImageData } from 'next/image'
import React from 'react'

type AdvantageProps = {
  title: string
  description: string
  src: StaticImageData
  alt: string
}

const AdvantageCard = ({ title, description, src, alt }: AdvantageProps) => {
  return (
    <li className="flex flex-col justify-center w-[350px] h-[250px] bg-[#F5F6FA] rounded-xl px-8 py-6">
      <Image
        src={src}
        alt={alt}
        width={50}
        className="mb-4"
      />
      <h4 className="text-[#42B4EE] text-xl font-black mb-2">{title}</h4>
      <p className='text-[#6b7280]'>{description}</p>
    </li>
  )
}

export default AdvantageCard