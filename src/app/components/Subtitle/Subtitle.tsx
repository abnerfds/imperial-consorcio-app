import React, { PropsWithChildren } from 'react'

const Subtitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-[#42B4EE] text-center sm:text-5xl text-4xl font-bold mb-5">{children}</h2>
  )
}

export default Subtitle