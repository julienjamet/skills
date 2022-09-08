import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Menu from './components/Menu'
import Home from './pages/Home'
import TechnoAdd from './pages/TechnoAdd'
import TechnoList from './pages/TechnoList'
import useLocalStorage from './hooks/UseLocalStorage'

import './styles/app.css'

function App() {
  const [technos, setTechnos] = useState([])
  const STORAGE_KEY = 'technos'
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, [])

  useEffect(() => {
    setTechnos(storedTechnos)
  }, [])

  useEffect(() => {
    setStoredTechnos(technos)
  }, [technos])

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoId: uuidv4() }])
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((techno) => techno.technoId !== id))
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  )
}

export default App