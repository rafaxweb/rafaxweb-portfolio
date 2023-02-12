import React, { useState } from 'react'
import Header from '../components/Menu/Menu'
import Introduction from '../components/Introduction/Introduction'

export default function MainPage() : JSX.Element {
  
  const [showMenu, setShowMenu] = useState(false)
  
  const clickMenuButton = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <button onClick={clickMenuButton}>X</button>
      { showMenu ? <Header/> : "" }
      <Introduction/>
    </>
  )
}
