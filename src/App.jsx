import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios"


function App() {
  const [count, setCount] = useState()



  useEffect(()=>{
    const testFetch = async()=>{
        let data = await axios.get("https://testdeploy-f55g.onrender.com/")
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
