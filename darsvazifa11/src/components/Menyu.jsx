import React from 'react'
import { NavLink } from 'react-router-dom'

function Menyu({resep}) {
   const {img, id, title, method} = resep
  return (
    <div >
        <div className=" card max-w-[300px] max-sm:max-w-full bg-base-100 shadow-xl image-full">
            <figure className='max-h-[250px]'><img width='400px'  src={img} alt=""  /></figure>
             <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{`${method.substring(0,100)}...`}</p>
            <div className="card-actions justify-end">
              <NavLink to={`/readmore/${id}`}><button className="btn btn-primary">Read More</button></NavLink>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Menyu