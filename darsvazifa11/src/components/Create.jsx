import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function Create() {
  const [ingrident, setIngrident] = useState('')
  const [ingridents, setIngridents] = useState([])
  const [value, setValue] = useState([{
    ingridents: '',
    cookingTime: null ,
    title: '',
    method: '',
    img: ''
  }])
  const {data, isPending, error, getPostData} = useFetch('http://localhost:3000/recipes','POST')
  
  const hendelSubmit = (e) => {
    e.preventDefault()
    if (value.length !== 0) {
      setValue((prev) => {
        return {...prev, ingridents: ingridents}
      })
    }
    getPostData(value)
console.log(value);
   
  }
   

  const addIngridents = (e) => {
    e.preventDefault()
      setIngrident(() => {
        return [ingrident]
      })
     if(ingrident.length !== 0) {
      setIngridents((prev) => {
        return [...prev, ingrident]
      })
     }
     setIngrident('')

  
  }
  
  return (
    <div>
      <div className=''>
        <h1 className='text-center pb-5 font-bold text-3xl pt-6'>Create New Recipie</h1>
          <form className='flex flex-col gap-3  items-center'> 
            <label className='flex flex-col'>
              <span className='text-xl font-bold' >Title:</span>
            <input
            onChange={(e) => {setValue((prev) => {
              return {...prev, title: e.target.value}
            })}}
            type="text" placeholder="Title" required className="input input-bordered input-info w-[400px]" />
            </label>
            <label className='flex flex-col'>
              <span className='text-xl font-bold' >CookingTime:</span>
            <input 
            onChange={(e) => {setValue((prev)=> {
              return {...prev, cookingTime: e.target.value}
            }) }}
            type="number" placeholder="cookinTime" required className="input input-bordered input-info w-[400px]" />
            </label>

            <div>
            <label
            className='flex  flex-col'>
              <span  className='text-xl font-bold' >Ingredients:</span>
            </label>
            <div className='flex gap-5'>
            <input
             
            onChange={(e) => {
              setIngrident(e.target.value)
            }}
            name='Ingredients'
            type="text" placeholder="Ingredients" required 
            className="input input-bordered input-info w-[320px]"
            autoComplete="off"
            value={ingrident} />
            <button onClick={addIngridents} className="btn btn-outline btn-info">Add</button> 
            </div>
            <span className='flex gap-2 max-w-[320px] overflow-x-scroll'><p>Ingredients:</p>{ingridents.map((ing) => {
              return (
                <div key={ing}>
                 {ing}, 
                </div>
              )
            })}</span>
            </div>


            <label className='flex flex-col'>
              <span className='text-xl font-bold' >Method:</span>
            <input
            onChange={(e) => {setValue((prev) => {
              return {...prev, method: e.target.value}
            })}}
            type="textarea" placeholder="Method" required className="input input-bordered input-info w-[400px]"
            />
            </label>
            <label className='flex flex-col'>
              <span className='text-xl font-bold' >IMG URL:</span>
            <input
            onChange={(e) => {setValue((prev) => {
              return {...prev, img: e.target.value}
            })}}
            type="url" placeholder="url" required className="input input-bordered input-info w-[400px]" />
            </label>
            <button
            onClick={hendelSubmit}
            className="btn btn-outline btn-info">create</button>
          </form>
      </div>
    </div>
  )
}

export default Create