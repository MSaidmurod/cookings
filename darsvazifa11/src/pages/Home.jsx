import Menyu from '../components/Menyu'
import {useFetch} from '../hooks/useFetch'
import { DotSpinner } from '@uiball/loaders'
import Error from '../components/Error'




function Home() {
    const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

    
    if (error) {
      return (
        <div>
          <Error/>
        </div>
      )
    }


  return (
    <div className='relativ'>
        <ul className='max-w-5xl grid max-sm:grid-cols-1  gap-4 max-md:grid-cols-2 grid-cols-3 py-20 mx-auto'>
          {isPending && <div className='absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm'><DotSpinner  color="black" size={40} speed={0.9} /></div>}
            {data && data.map((resep) => {
              
                const {id} = resep
               return (
                <li className='' key={id}>
                    <Menyu resep={resep}/>
                </li>
               )
            })}
        </ul>
    </div>
  )
}

export default Home