import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import ResepisLayout from './layout/ResepisLayout'
import Home from './pages/Home'
import ReadMore from './components/ReadMore'
import Create from './components/Create'

function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ResepisLayout/>} >
        <Route index element={<Home/>} />
        <Route path='/readmore/:id' element={<ReadMore/>} />
        <Route path='/create' element={<Create/>} />
      </Route>
    )
  )

 
  
  return (
  <>
  <RouterProvider router={routes}/>
  </>
  )
}

export default App
