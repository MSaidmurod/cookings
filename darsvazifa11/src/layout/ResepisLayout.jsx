import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function ResepisLayout() {
  return (
    <div className='flex flex-col justify-between h-[100vh]'>
    <Header/>
    <main className='grow'>
        <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default ResepisLayout
