import React from 'react'
import './Header.css'
import Logo from '../../assets/images/LogoPortfolio.png'

export default function Header(): JSX.Element {
  return (
    <div className="header">
        <img src={Logo} alt="logo" />
        <p>Portfolio Rafael Salas</p>
        <div className='links'>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </div>
        
    </div>
  )
}
