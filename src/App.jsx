import { Routes , Route  } from 'react-router-dom'
import './App.css'
import Home from './Users/Pages/Home'
import Allbook from './Users/Pages/Allbook'
import Career from './Users/Pages/Career'
import Auth from './Pages/Auth'
import Contact from './Users/Pages/Contact'
import { useEffect, useState } from 'react'
import Preloader from './Components/Preloader'
import Viewbook from './Users/Pages/Viewbook'
import Dashboard from './Admin/Pages/Dashboard'
import Profile from './users/pages/Profile'
import Resources from "./Admin/Pages/Resource";
import Settings from './Admin/Pages/Settings'


function App() {

  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Preloader/>:<Home/>}/>
      <Route path='/all-books' element={<Allbook/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/contact' element={<Contact/>}/>


       {/* user */}
      <Route path='/all-books/:id/view' element={<Viewbook/>}/>
      <Route path='/profile' element={<Profile/>}/>


    
       {/* admin */}
       <Route path='/admin' element={<Dashboard/>}/>
       <Route path='/admin-resources' element={<Resources />} />
       <Route path='/admin-settings' element={<Settings />} />

    </Routes>
    </>
  )
}

export default App