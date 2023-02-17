import React, { MouseEventHandler, useState } from 'react'
import './Header.css'
import Logo from '../../assets/images/LogoContrast.png'
import LanguageButtom from './LanguageButtom/LanguageButtom';

interface IHeader {
    onClickMenu: MouseEventHandler;
}

export default function Header({onClickMenu}: IHeader) : JSX.Element {

  const [hiddenLogo, setHiddenLogo] = useState(false);
  const [activeMenu, setActiveMenu] = useState("toggle")

  const onClickMenuButtom = (e: React.MouseEvent<Element, MouseEvent>) => {
    onClickMenu(e);
    setHiddenLogo(!hiddenLogo)
    let menuToggle = document.querySelector(".toggle");
    setActiveMenu(activeMenu === "toggle" ? "toggle active" : "toggle")
  }


  return (
    <div className='header'>

        <div onClick={onClickMenuButtom} className={activeMenu}  >
          <span></span>
          <span></span>
          <span></span>
        </div>
      <LanguageButtom hidden={hiddenLogo}/>

      <a href="/" hidden={hiddenLogo}><img src={Logo} alt="logo" /></a>

    </div>
  )
}
