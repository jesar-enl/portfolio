import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/Jesse (2).jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div className='container header__container'>
      <h5>Hello, I'm</h5>
      <h1>Jesse Kyambadde</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={me} alt='me'/>
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  )
}

export default Header