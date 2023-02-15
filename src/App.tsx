import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import MainPage from './pages/MainPage'
import { OnPageLoad } from './services/OnPageLoad'

function App() {
  
  useEffect(() => {
    OnPageLoad();
  }, [])

  const [showMenu, setShowMenu] = useState(false)
  
  const clickMenuButton = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="App">
      <Header onClickMenu={clickMenuButton}/>

      { showMenu ? <Menu/> : "" }
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
