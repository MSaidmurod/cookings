import { useEffect } from 'react'
import { useState } from 'react'
import {GiRaiseZombie, GiAngelOutfit} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function getLocalStoreg () {
  return localStorage.getItem('theme') || 'light'
}

function Header() {
  const [dark, setDark] = useState(getLocalStoreg())

  
 useEffect(() => {
      document.documentElement.dataset.theme = dark
      localStorage.setItem('theme', dark)
    }, [dark])
  const setMode = () => {

    setDark((prev) => {
      return prev == "light" ? "halloween" : "light" 
    })
  }

  return (
    <div  className='bg-sky-800'>
      <div className=' max-w-5xl justify-between   select-none text-stone-900   py-3 mx-auto flex items-center '>
      <h1 className='text-3xl cursor-pointer flex items-center gap-4 font-bold'><NavLink>COOKING</NavLink>
      <button onClick={setMode}>{dark === "light" ? <GiRaiseZombie/>   :<GiAngelOutfit/>}</button>
       </h1>
      <NavLink to='/create'><button className="btn glass font-bold">Create</button></NavLink>
    </div>
    </div>
  )
}

export default Header