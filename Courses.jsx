import React from 'react'
import './Courses.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link,Outlet } from 'react-router-dom'

function Home() {
  return (
    <div class='container'>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <img class="card-img-top" src="./Assets/img1.webp" alt="img1"  id='img'/>
            <div class="card-body">
              <h5 class="card-title">JAVA <Link class="btn" to="/course-info/1" style={{float:'right'}}>See More</Link></h5>
             
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <img class="card-img-top" src="./Assets/img2.png" alt="img2" id='img'/>
            <div class="card-body">
              <h5 class="card-title">PYTHON <Link class="btn" to="/course-info/2" style={{float:'right'}}>See More</Link></h5>
             
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <img class="card-img-top" src="./Assets/img3.jpeg" alt="img3" id='img'/>
            <div class="card-body">
              <h5 class="card-title">CYBER SECURITY <Link class="btn" to="/course-info/3" style={{float:'right'}}>See More</Link></h5>
             
            </div>
          </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <img class="card-img-top" src="./Assets/img4.jpeg" alt="img4" id='img'/>
            <div class="card-body">
              <h5 class="card-title">DevOps <Link class="btn" to="/course-info/4" style={{float:'right'}}>See More</Link></h5>
             
            </div>
          </div>
         </div>
      </div>  
      <div class="row mt-5"> 
        <div class="col-sm-12 col-md-6 col-lg-3"> 
         <div class="card"> 
          <img class="card-img-top" src="./Assets/img5.jpeg" alt="img5" id="img" />
          <div class="card-body">
            <h5 class="card-title">AWS <Link class="btn" to="/course-info/5" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div> 
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img6.jpeg" alt="img6" id="img" />
            <div class="card-body">
            <h5 class="card-title">Cloud Computing <Link class="btn" to="/course-info/6" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img7.jpeg" alt="img7" id="img" />
            <div class="card-body">
            <h5 class="card-title">Power BI <Link class="btn" to="/course-info/7" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img8.jpeg" alt="img8" id="img" />
            <div class="card-body">
            <h5 class="card-title">Data Analyst <Link class="btn" to="/course-info/8" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
      </div>
      <div><h1>Related Courses</h1></div>
      <div class='row'>
      <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img9.jpg" alt="img8" id="img" />
            <div class="card-body">
            <h5 class="card-title">Dot Net<Link class="btn" to="/course-info/Dotnet" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img10.jpg" alt="img8" id="img" />
            <div class="card-body">
            <h5 class="card-title">PHP<Link class="btn" to="/course-info/PHP" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img11.jpg" alt="img8" id="img" />
            <div class="card-body">
            <h5 class="card-title">Promt Engineering<Link class="btn" to="/course-info/PromptEngineering" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card"> 
            <img class ="card-img-top" src="./Assets/img12.jpg" alt="img8" id="img" />
            <div class="card-body">
            <h5 class="card-title">Angular <Link class="btn" to="/course-info/Angular" style={{float:'right'}}>See More</Link></h5>
          </div>
          </div>
        </div>
      </div>
      <div class="row m-3  " style={{textAlign:'center',backgroundColor:'black'}}> 
        <div class="col-12 p-5">
          <h4 class='text-light'>Social Media</h4>
          <Link to="" class='p-3 fs-3 text-light'><FaInstagram /></Link>
          <Link to="" class='p-3 fs-3 text-light'><FaFacebook /></Link>
          <Link to="" class='p-3 fs-3 text-light'><BsTwitterX /></Link>
          <Link to="" class='p-3 fs-3 text-light'><FaLinkedinIn /></Link>
        </div>
        
        <div class="col-12 mb-5">
        <Link to='' class='p-3 fs-4 text-light text-decoration-none'>Home</Link>
        <Link  to='' class='p-3 fs-4 text-light text-decoration-none'>Services</Link>
        <Link  to='' class='p-3 fs-4 text-light text-decoration-none'>Privacy Policy</Link>
        <Link  to='' class='p-3 fs-4 text-light text-decoration-none'>Terms</Link>
        <Link to='' class='p-3 fs-4 text-light text-decoration-none'>About</Link>
        <Link  to='' class='p-3 fs-4 text-light text-decoration-none'>Help</Link>
        </div>
      </div>
     </div>
          
  )
}
<Outlet/>
export default Home