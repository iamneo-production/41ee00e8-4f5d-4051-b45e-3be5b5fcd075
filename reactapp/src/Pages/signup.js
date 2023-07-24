import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signup(){
    const [name,setName]=useState('');
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');



    const handleChange = (e, setter) => {
        setter(e.target.value);
      };

    const handleSubmit = async (e) => {
      e.preventDefault(); 

        const data = {
          name: name,
          email: email,
          password: password,


        };
    
        // let token = localStorage.getItem('token')
      
        await axios.post('http://localhost:8181/api/v1/auth/register', data, {
          headers: {
            // "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        })
        .then((response) => {
          console.log('Success:', response.data);
          alert("Registration Successful")
     
     
          navigate('/')
        //  localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };



    return(
        <div className='back' style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50,paddingTop:-100,}}>
        <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40,marginLeft:-1000,width:'20vw',height:'70vh',overflowY:'scroll',paddingBottom:'2px',}} >
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label style={{fontSize:'1.1em'}}>User Name:</label>
        <input
        type="text"
        placeholder='enter your name'
        required

        value={name} onChange={(e) => handleChange(e, setName)}
        />
        
          <label htmlFor="email" style={{fontSize:'1.1em'}}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder='enter your Email'
            required

            value={email} onChange={(e) => handleChange(e, setEmail)}
          />
        
        <label style={{fontSize:'1.1em'}}>password:</label>
        <input
          type="number"
          pattern="[0-9]*"

          placeholder='enter your phone number'
          required
          value={password} onChange={(e) => handleChange(e, setPassword)}
        />
    
     
  
        

        <button type="submit">Sign Up</button>

        <h4>Already User?<Link to='/'>Sign in</Link></h4>
      </form>
    </div>
    </div>



    );
}