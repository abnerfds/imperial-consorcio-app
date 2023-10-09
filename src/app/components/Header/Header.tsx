'use client'
import './header.scss';
import React, { useState } from 'react';
import RouterLink from '../RouterLink';
import Link from 'next/link';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className='header xl:px-[10%] px-[2%] text-white h-[15vh] flex items-center'>
      <Link href='#' className='lg:text-[2rem] text-[1.5rem] text-[#42B4EE] font-bold'>
        Imperial Consórcio
      </Link>

      <nav className={`${isToggle && 'header__nav--open-menu'} header__navbar`}>
        <ul className='flex md:flex-row flex-col items-center lg:gap-8 gap-7'>
          <RouterLink title='Home' route='/' />
          <RouterLink title='Como fazer' route='/HowToDo' />
          <RouterLink title='Produtos' route='/Product' />
          <RouterLink title='Sobre nós' route='/WhoWeAre' />
          <RouterLink title='Fale Conosco' route='/TalkToUs' classStyle='bg-[#42B4EE] md:text-xs text-sm lg:py-3 lg:px-7 py-3 px-3 rounded-[5px] uppercase' />
        </ul>
      </nav>

      <div className="text-[2.8rem] absolute top-[18%] right-[5%] md:hidden block">
        {isToggle
          ? <i className='bx bx-x' onClick={() => setIsToggle(!isToggle)} />
          : <i className='bx bx-menu-alt-right' onClick={() => setIsToggle(!isToggle)} />}
      </div>
    </header>
  )
}

export default Header