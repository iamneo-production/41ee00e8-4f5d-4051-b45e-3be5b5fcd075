
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Topnav from '../Components/Topnav';
// import { UseSele/ctor } from 'react-redux/es/hooks/useSelector';
import { Connect,useSelector } from 'react-redux';
import { useRef } from 'react';
const Claim = () => {
    const [username, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [vehicle, setvehicle] = useState('');
    const [licence, setlicence] = useState('');
    const id=useSelector(state=>state.vehicleno)
  
    const handleNameChange = (e) => {
      setname(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
      setphone(e.target.value);
    };
    const handleVehicleChange = (e) => {
      setvehicle(e.target.value);
    };

    const handleLicenceChange = (e) => {
      setlicence(e.target.value);
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform sign-up logic here, such as making an API call to create a new user
      console.log('Username:', username);
      console.log('phone no:', phone);
      console.log('Email:', email);
      console.log('Vehicle:', vehicle);
      console.log('Licence:', licence);
      // Reset form fields
      setname('');
      setphone('');
      setEmail('');
      setvehicle('');
      setlicence('');
    };
  
    return (
      <div>
        <div>
            <Topnav/>
        </div>
          
      <div style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50,paddingTop:-100,}}>
      <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40,marginLeft:-1000,width:'20vw',height:'70vh',overflowY:'scroll',paddingBottom:'2px',}}>
        <h1>Claim your Insurance</h1>
        <form onSubmit={handleSubmit}>
          <label style={{fontSize:'1.1em'}}>User Name:</label>
          <input
          type="text"
          onChange={handleNameChange}
          placeholder='enter your name'
          required
          />
          
          <label style={{fontSize:'1.1em'}}>Mobile No:</label>
          <input
            type="number"
            pattern="[0-9]*"
            value={phone}
            onChange={handlePhoneChange}
            placeholder='enter your phone number'
            required
          />
        
          <label htmlFor="email" style={{fontSize:'1.1em'}}>Insurance Id</label>
          <input
            type="email"
            id="email"
            placeholder='enter your Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
      
          <label style={{fontSize:'1.1em'}}>Vehicle No:</label>
          <input
            
            value={vehicle}
            placeholder={id}
            onChange={handleVehicleChange}
            required
          />
        
          <label style={{fontSize:'1.1em'}}>User Licence proof:</label>
          <input
          
          
            value={licence}
            type='file'
            placeholder='enter your licence number'
            onChange={handleLicenceChange}
            required
          />
    
          <label style={{fontSize:'1.1em'}}>Car Registration proof</label>
          <input
          placeholder='enter vehicle model'
          type="file"
          
          />
          
          <label style={{fontSize:'1.1em'}}>FIR report proof</label>
          <input
          placeholder='enter vehicle model'
          type="file"
          
          />
          <label style={{fontSize:'1.1em'}}>Insurance policy copy proof</label>
          
          <input
          placeholder='enter vehicle model'
          type="file"
          
          />
          <button type="submit">claim your insurance</button>
  

        </form>
      </div>
      </div>
      </div>
    );
  };
  
  export default Claim;
  