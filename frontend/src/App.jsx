 import { useState, useEffect } from 'react'
import './App.css'
import {getMedicos} from './api/getMedicos'
import Card from './Card'
import './Card.css'

function App() {
  const [medicos, setMedicos] = useState([])

  useEffect(() => {
    getMedicos()
    .then(res => res.json())
    .then(data => setMedicos(data))
  }, [])

  return (
    <>
      {
       medicos.map(medico => <Card medico ={medico} key={medico.id} />)
      }

    </>
  )
}

export default App
