import React from 'react'
import Header from './Header'
import Home from './Home'
import Courses from './Courses'
import About from './About'
import Login from './Login'
import Login2 from './Login2'
import Register from './Register'
import Register2 from './Register2'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Courseinfo from './Courseinfo'
import Teacherinfo from './Teacherinfo'
import Personaldetail from './Personaldetail'
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='courses' exact element={<Courses/>}></Route>
      <Route path='about us' exact element={<About us/>}></Route>
      <Route path='Login' exact element={<Login/>}></Route>
      <Route path='Login2' exact element={<Login2/>}></Route>
      <Route path='Register' exact element={<Register/>}></Route>
      <Route path='Register2' exact element={<Register2/>}></Route>
      <Route path='Dashboard1' exact element={<Dashboard1/>}></Route>
      <Route path='Dashboard2' exact element={<Dashboard2/>}></Route>
      <Route path='/course-info/:id' exact element={<Courseinfo/>}></Route>
      <Route path='/Teacher-info/:TeacherId' exact element={<Teacherinfo/>}></Route>
      <Route path='Personaldetail' exact element={<Personaldetail/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
    
  )
}


export default App