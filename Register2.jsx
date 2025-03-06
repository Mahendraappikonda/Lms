import React from 'react'

function Register() {
  return (

       
    <div class='container-fluid'>
        <div class='row'>
        <div class='col-sm-12  col-lg-3'></div>

        <div class='col-sm-12 col-lg-6 ' style={{backgroundColor:'#EDBC8B'}}>
            <center>
        <form >
            <h2>Register</h2>
            <div class=' fw-bold' >
                
                <br />
                <input class=' p-2' type="text" name="name" id="text" placeholder='Full Name' style={{borderRadius:'10px' ,width:'90%'}} required />
            </div>
            <div class='p-2 fw-bold'>
                
                <br />
                <input  class=' p-2' type="email" name="mail" id="mail" placeholder=' email' style={{borderRadius:'10px' ,width:'90%'}} required />
            </div>
            <div class='p-2 fw-bold'>
                
                <br />
                <input  class=' p-2' type="tel" name="number" id="number" placeholder='Mobile Number' style={{borderRadius:'10px',width:'90%'}} required />
            </div>
            <br />
            
         <div >
       
       <select  class=' p-2' id="city" name="city" placeholder='Qualification' style={{borderRadius:'10px' ,width:'90%'}} required>
       <option value="" disabled selected >Select your Qualification</option>
           <option value="v">B.Tech</option>
           <option value="ch">M.Tech</option>
           <option value="hyd">Bsc</option>
           <option value="">Bcom</option>   
        </select>  
        </div>
        <br />
            <div >
        <select id="city" name="city" class='p-2' placeholder='Select city' style={{borderRadius:'10px' ,width:'90%'}} required >
        <option value="" disabled selected >Select your City</option>
            <option value="v">Visakhapatnam</option>
            <option value="ch">Chennai</option>
            <option value="hyd">Hyderabad</option>
            <option value="">Bangalore</option>   
         </select>  
         </div>
         <br />
            <div >
            <label >Gender :</label>
                    <label class='p-1'>
                    <input type="radio" name="option" value="option1" required/>
                    Male
                    </label>
                    <label class='p-1'>
                    <input type="radio" name="option" value="option1" required/>
                    Female
                    </label>
                    <label class='p-1'>
                    <input type="radio" name="option" value="option1" required/>
                    other
             </label>
            </div>
            <br />
            <div class='p-2 fw-bold'>
                
                <br />
                <input  class=' p-2' type="Password" name="password" id="Password" placeholder='Password' style={{borderRadius:'10px',width:'90%'}} required />
            </div>
            
            <div class='p-2 fw-bold'>
                
                <br />
                <input  class=' p-2' type=" Password" name="password" id="Password" placeholder='Re-Enter Password' style={{borderRadius:'10px',width:'90%'}} required />
            </div>
            <br />
            <button class='w-25 p-2 m-3 text-light' style={{backgroundColor:'green'}}>Register</button>
        </form>
        </center>
        </div>
        <div class ='col-sm-12 col-lg-3'></div>
        </div>
        </div>  
    )
}

export default Register