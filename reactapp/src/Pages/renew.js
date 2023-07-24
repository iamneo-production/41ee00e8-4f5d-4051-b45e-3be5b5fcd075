import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Topnav from '../Components/Topnav';
import { Connect,useSelector } from 'react-redux';
// import Home from './Navbar';

const Renew = () => {
  const [Id, setId] = useState('');
  const [name, setname] = useState('');
  const [vehicle, setvehicle] = useState('');
  const id=useSelector(state=>state.vehicleno);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, such as making an API call to authenticate the user
    console.log('Id:', id);
    console.log('Name:', name);
    console.log('Vehicle:', vehicle);
    // Reset form fields
    setId('');
    setname('');
    setvehicle('');
  };

  return (
    <>
    <div>
        <Topnav/>
    <div  style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-60,paddingRight:90,overflow:'hidden'}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:60,marginLeft:-1000,width:'20vw',marginLeft:'-30em'}}>
      <h1>Renew your Insurance</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{fontSize:'1.3em'}}>Insurance Id:</label>
        <input
          
          placeholder='enter your Insurance Id'
          value={name}
          onChange={handleIdChange}
          required
        />
        <label htmlFor="email" style={{fontSize:'1.3em'}}>Insurance Name:</label>
        <input
          
          placeholder='enter your Insurance name'
          value={name}
          onChange={handleNameChange}
          required
        />
        <br></br>
        <label style={{fontSize:'1.3em'}}>Vehicle No:</label>
        <input
          
          placeholder={id}
          value={vehicle}
          onChange={handleVehicleChange}
          required
        />
        <br></br>
        <button type="submit"><Link>Renew</Link></button>
      </form>
      
    </div>
    </div>
    </div>
    </>
  );
};

export default Renew;

