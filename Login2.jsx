import React from 'react'

function Login() {
 
  return (
    
  <div class='container-fluid'>
<div class="row">
<div class='col-sm-12 col-lg-3'></div>

<div class='col-sm-12 col-lg-6'>
  <div class='card  p-2  justify-content-center' style={{backgroundColor:'#CCD8F0',margin:'10%'}}>
    <center>
    <div >
      <form >
          <h2>Login</h2>
          <div class='p-2  fw-bold'>
            
              <br />
              <input class=' p-2  w-75 form-control' type="text" name="" id="#" placeholder='username 'style={{borderRadius:'80px'}}  required />
          </div>
          <div class=' fw-bold'>
            
              <br />
              <input  class=' p-2 w-75 form-control ' type="email" name="mail" id="#" placeholder='Password'style={{borderRadius:'80px'}} required  />
          </div>
          <div>
            <button type="button" class="btn btn-danger p-1 m-3 w-25" >Submit</button>
            <button type="button" class="btn btn-info p-1 m-3 w-25" to='Register'>Register</button>
          </div>
          <div>
             
             
          </div>
      </form>
      </div>
      </center>
      <div class='col-sm-12 col-lg-3'></div>
      </div>
    
  </div>
  </div>
  </div>
)
}

export default Login