import './footer.scss'
import Link from 'next/link'
import React, { ReactElement, ReactPortal } from 'react'
import { PropsWithChildren } from 'react'

type LinkProps = {
  href: string 
  classStyle?: string
}

export const PLink = ({children, href, classStyle}: PropsWithChildren<LinkProps>) => {
  return (
    <Link href={href} className={`${classStyle} text-slate-300`}>{children}</Link>
  )
}

const PHeader = ({children}: PropsWithChildren) => {
  return (
    <header className="font-bold uppercase text-white mb-4">{children}</header>
  )
}

const Footer = () => {
  return (
    <footer className='bg-purple-clear'>
      <footer className="footer bg-purple-clear min-h-screen md:min-h-full text-lg md:text-base text-white py-20 md:py-10 pl-10 md:px-10 flex flex-col md:flex-row justify-around md:gap-0">
        <nav>
          <PHeader>Mais Informações</PHeader>
          <PLink href='l'>De segunda a sexta, das 9h às 18h,<br/> exceto feriados.</PLink>
          <PLink href='l'>Rua Lourenço Marques, 315 - <br/>Vila Olímpia - São Paulo - SP.</PLink>
        </nav>
        <nav>
          <PHeader>Empresa</PHeader>
          <PLink href='/'>Home</PLink>
          <PLink href='/#whatis'>O que é</PLink>
          <PLink href='/#advantages'>Vantagens</PLink>
          <PLink href='/#howtodo'>Como funciona</PLink>
        </nav>
        <nav id='contact'>
          <PHeader>Fale Conosco</PHeader>
          <PLink href='https://wa.me/11981063924'>WhatsApp: (22) 22222-2222</PLink>
          <PLink href='/mailto:imperial@gmail.com'>imperial@gmail.com</PLink>
          <PLink href='/#advantages'>Telefone: (11) 1111-1111</PLink>
        </nav>
      </footer>
      <footer className="footer px-10 bg-purple-clear h-[25vh] md:h-auto text-lg md:text-base text-white flex flex-col-reverse justify-center items-center md:flex-row md:justify-center gap-6 md:gap-28 py-8">
        <aside className='flex flex-col items-center justify-end'>
          <p className='font-bold text-center'>Imperial Consórcios LOGO</p>
        </aside>
        <nav className='flex gap-5'>
          <a href="https://www.instagram.com/imperialconsorcio/?hl=en">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill='white' viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
          </a>
          <a href="https://www.facebook.com/imperialconsorcio/">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
          </a>
          <a href="https://wa.me/11981063924">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="36" height="36" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>
          </a>
        </nav>
      </footer>
    </footer>
  )
}

export default Footer