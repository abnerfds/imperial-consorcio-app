import Link from 'next/link'
import React from 'react'

const OtherInfo = () => {
  return (
    <section className='flex flex-col justify-start gap-10'>
      <section className='flex flex-col justify-center text-center lg:text-left'>
        <h1 className='text-white text-2xl font-bold mb-2'>Fale conosco</h1>

        <section className='flex flex-wrap justify-center lg:justify-start gap-2'>
          <Link href='https://wa.me/85996667562' target='_blank' className="btn-p">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            WhatsApp
          </Link>
          <Link href='https://www.instagram.com/imperialconsorcio/?hl=en' target='_blank' className="btn-p">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            Instagram
          </Link>
          <Link href='https://www.facebook.com/imperialconsorcio/' target='_blank' className="btn-p">
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            Facebook
          </Link>
          {/* <Link href='mailto:admimperialpv@gmail.com' className="btn-p">
            <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" /></svg>
            Email
          </Link> */}
        </section>
      </section>

      {/* <section className='text-center lg:text-left'>
        <h4 className="text-white text-2xl font-bold mb-2">Horário de Funcionamento</h4>
        <p className='font-medium'>Segunda a Sexta de 08:00 às 18:00, exceto feriados.</p>
      </section>

      <section className='text-center lg:text-left'>
        <h4 className="text-white text-2xl font-bold mb-2">Endereço</h4>
        <p className='font-medium'>Rua Sátiro Dias, N° 387 - Montese - Fortaleza - CE.</p>
      </section> */}

      <section className='text-center lg:text-left leading-9'>
        <h4 className="text-white text-2xl font-bold mb-2">Serviços por WhatsApp</h4>
        <p className='font-medium'>Vendas: (85) 9.9666-7562</p>
        <p className='font-medium'>Pós-vendas: (85) 9.9264-6255</p>
        <p className='font-medium'>Recepção: (85) 9.8903-2906</p>
      </section>

      <section className='text-center lg:text-left leading-9'>
        <h4 className="text-white text-2xl font-bold mb-2">Serviços por telefone</h4>
        <p className='font-medium'>Fixo: (85) 3111-3371</p>
      </section>
    </section>
  )
}

export default OtherInfo