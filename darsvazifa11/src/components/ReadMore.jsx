import { NavLink, useParams } from "react-router-dom" 
import { useFetch } from "../hooks/useFetch"
import { FiCornerUpLeft } from 'react-icons/fi'
import { DotSpinner } from '@uiball/loaders'

function ReadMore() {
const {id} = useParams()
const {data, isPending, error} = useFetch(`http://localhost:3000/recipes/${id}`)



  return (
    <div>
        <div className="max-w-5xl mx-auto mt-20">
        {isPending && <div className='absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm'><DotSpinner  color="black" size={40} speed={0.9} /></div>}
            {data && 
                <div>
                   <div className="card overflow-hidden lg:card-side bg-base-100 shadow-xl">
                      <div className=""><img className="h-[400px] w-[1000px]" src={data.img} alt=""/></div>
                      <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <span ><h1>CookingTime:</h1>{data.cookingTime}</span>
                        <span> <span>Ingredients:</span> {data.ingredients}</span>
                        <p>{data.method}</p>
                        <div className="card-actions justify-end">
                         <NavLink to='/'> <button className="btn btn-primary font-bold text-3xl"><FiCornerUpLeft/></button></NavLink>
                        </div>
                      </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default ReadMore