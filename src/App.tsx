import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'

function App() {
  const [language, setLanguage] = useState("")
  
  useEffect(() => {
    
  })

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
