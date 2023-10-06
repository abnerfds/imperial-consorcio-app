import React from 'react';

const Navbar = () => {

  // usar CSS BEM
  return (
    <header className='header'>
      <a className='logo' href='#'>Imperial Consórcio</a>

      <input type="checkbox" id='check' />
      <label htmlFor="check" className="icons">
        <i className='bx bx-menu-alt-right' id='menu-icon'></i>
        <i className='bx bx-x' id='close-icon'></i>
      </label>

      <nav className='navbar'>
        <a title='Home' href='/'>Home</a>
        <a title='Como fazer' href='/HowToDo'>Como fazer</a>
        <a title='Produtos' href='/Product'>Produtos</a>
        <a title='Quem somos' href='/WhoWeAre'>Quem somos</a>
        <a title='Quem somos' href='/WhoWeAre'>Fale Conosco</a>
      </nav>
    </header>
  )
}

export default Navbar