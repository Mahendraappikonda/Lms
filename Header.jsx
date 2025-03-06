import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { Link,Outlet } from 'react-router-dom'

function Header() {
  return (
    <div id='size'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#" style={{marginRight:'10%',fontSize:'30px'}}><FaBookOpen /> Google Learning</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav" style={{marginRight:'10%',fontSize:'25px'}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">
          Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="courses">Courses</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Teacher </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Login">Login</Link></li>
            <li><Link class="dropdown-item" to="Register">Register</Link></li>
            <li><Link class="dropdown-item" to="Dashboard1">Dashboard</Link> </li>
            <li><Link class="dropdown-item" to="#">Logout</Link> </li>
            </ul>
            </li>
        <li class="nav-item">
          <Link class="nav-link" to="About us">About us</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Login2">Login</Link></li>
            <li><Link class="dropdown-item" to="Register2">Register</Link></li>
            <li><Link class="dropdown-item" to="Dashboard2">Dashboard</Link></li>
            <li><Link class="dropdown-item" to="#">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
</div>
  
   
  )
}
<Outlet/>
export default Header