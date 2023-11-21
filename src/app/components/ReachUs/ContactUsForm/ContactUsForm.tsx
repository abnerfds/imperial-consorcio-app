import React from 'react'

const ContactUsForm = () => {
  return (
    <form
      method='POST'
      action="https://formsubmit.co/71b184f38ac16435b2f32633df3a9f4e"
      className='text-black rounded-lg flex flex-col gap-5 pb-24 md:pb-0'
    >
        <h1 className='text-white text-2xl text-center max-w-md lg:max-w-sm font-bold mb-4'>
          Preencha seus dados e entraremos em contato
        </h1>
        <input
          type="text"
          name='Nome'
          placeholder="Nome e Sobrenome"
          className="input max-w-md lg:max-w-sm bg-white w-full" />
        <input
          type="email"
          name='Email'
          placeholder="E-mail"
          className="input max-w-md lg:max-w-sm bg-white w-full" />
        <input
          type="tel"
          name='Telefone'
          placeholder="(85) 98585-8585"
          className="input max-w-md lg:max-w-sm bg-white w-full" />
        <input
          type="hidden"
          name="_next"
          value="https://imperialconsorcio.vercel.app/" />
        <button type='submit' className='btn-p  max-w-md lg:max-w-sm border-none text-lg'>
          Enviar
        </button>
    </form>
  )
}

export default ContactUsForm