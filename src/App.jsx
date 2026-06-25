import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios"


function App() {
  const [count, setCount] = useState()
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log(apiUrl)


  useEffect(()=>{
    const testFetch = async()=>{
      console.log(apiUrl)
        let data = await axios.get(`${apiUrl}`)
        console.log(data)
        setCount(data.data.message)
        return data
    }
  testFetch()
    
  },[])

  return (
    <>
      
      <section id="spacer">{count}</section>
    </>
  )
}

export default App
