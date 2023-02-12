import React from 'react'
import './Menu.css'
import Logo from '../../assets/images/LogoPortfolio.png'
import { Messages } from '../../data/Messages'
import { SettingsRepository } from '../../data/repository/SettingsRepository'

export default function Header(): JSX.Element {
  return (
    <div className="menu">
        <img src={Logo} alt="logo" />
        <p>Portfolio Rafael Salas</p>
        <div className='links'>
            <a href="/">{Messages.Menu.home.get(SettingsRepository.getLanguage())}</a>
            <a href="/projects">{Messages.Menu.projects.get(SettingsRepository.getLanguage())}</a>
            <a href="/contact">{Messages.Menu.contact.get(SettingsRepository.getLanguage())}</a>
        </div>
        
    </div>
  )
}
