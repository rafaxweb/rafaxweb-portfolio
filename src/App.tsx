import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import { OnPageLoad } from './services/OnPageLoad'

function App() {
  const [language, setLanguage] = useState("")
  
  useEffect(() => {
    OnPageLoad();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
