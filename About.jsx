import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link,Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <div class='container ml-2'>
      <h1>About Us</h1>
      <div class='card  p-3 fst-italic lh-lg'>
      <div class="row">
        <div class="col-sm-1 col-md-6 col-lg-6">
          <div class="card mt-3 p-3">
            <p>Welcome to Google Learn, your gateway to a world of limitless learning. We are an innovative online learning platform designed to empower learners of all ages and backgrounds to achieve their goals, upskill, and thrive in a fast-changing world.</p>
            <h5>Our Mission</h5>
            <p>At Google Learning, we aim to make high-quality education accessible, affordable, and engaging for everyone. We believe in the power of learning to transform lives, unlock potential, and create opportunities for growth.</p>
            <h5>Why Choose us ?</h5>
            <p>-Personalized Learning Journeys: Tailor your learning experience with courses that match your pace and interests.<br/>
            -Certification and Credibility: Earn recognized certifications to boost your resume and showcase your achievements.<br/>
            -Community of Learners: Join a thriving community of learners and educators who inspire and support one another.<br/>
            </p>
            <p>At Google Learn, we're not just about learning; we're about creating a brighter future for everyone. Start your journey with us today and take the first step toward your dreams!</p>
          </div>
        </div>
        <div class="col-sm-1 col-md-6 col-lg-6">
          <div class="card mt-3" style={{backgroundColor:'lightgray'}}>
            <img src="./assets/education2.png" alt="" style={{height:'87vh'}}/>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
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
    </div>
  )
}
<Outlet/>

export default About