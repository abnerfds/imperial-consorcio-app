import React from 'react'

const ContactUsForm = () => {
  return (
    <form action="" className='text-black rounded-lg flex flex-col gap-5 pb-24 md:pb-0'>
        <h1 className='text-white text-2xl text-center max-w-md lg:max-w-sm font-bold mb-4'>Preencha seus dados e entraremos em contato</h1>
        <input type="text" placeholder="Nome e Sobrenome" className="input max-w-md lg:max-w-sm bg-white w-full" />
        <input type="text" placeholder="E-mail" className="input max-w-md lg:max-w-sm bg-white w-full" />
        <input type="text" placeholder="Telefone" className="input max-w-md lg:max-w-sm bg-white w-full" />
        <button className='btn bg-btn-reverse max-w-md lg:max-w-sm border-none text-lg text-white'>Enviar</button>
    </form>
  )
}

export default ContactUsForm