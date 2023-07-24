

// import React, { useState } from 'react';
// import './login.css';
// import { Link } from 'react-router-dom';
// import Topnav from '../Components/Topnav';
// // import Home from './Navbar';


// const LoginPage = () => {
//   const [name, setname] = useState('');
//   const [vehicle, setvehicle] = useState('');

//   const handleNameChange = (e) => {
//     setname(e.target.value);
//   };

//   const handleVehicleChange = (e) => {
//     setvehicle(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform sign-in logic here, such as making an API call to authenticate the user
//     console.log('Name:', name);
//     console.log('Vehicle:', vehicle);
//     // Reset form fields
//     setname('');
//     setvehicle('');
//   };

//   return (
//     <>
//     <div>
//       <div>
//         <img src='./car'/>

//       </div>
//     <div className='back' style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-60,paddingRight:90,overflow:'hidden'}}>
//     <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:60,marginLeft:-1000,width:'20vw',marginLeft:'-30em'}}>
//       <h1>Sign In</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email" style={{fontSize:'1.3em'}}>User Name:</label>
//         <input
          
//           placeholder='enter your username'
//           value={name}
//           onChange={handleNameChange}
//           required
//         />
//         <br></br>
//         <label>Vehicle No:</label>
//         <input
          
//           placeholder='enter your vehicle no'
//           value={vehicle}
//           onChange={handleVehicleChange}
//           required
//         />
//         <br></br>
//         <button type="submit"><Link to='Home'>Sign in</Link></button>
//       </form>
//       <h4>new user?<Link to="Register">signup</Link></h4>
      
//     </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Topnav from '../Components/Topnav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const handleChange = (e, setter) => {
      setter(e.target.value);
    };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
    
      const data = {
        email: email,
        password: password
      };
  
      // let token = localStorage.getItem('token')
    
      await axios.post('http://localhost:8181/api/v1/auth/authenticate', data, {
        headers: {
          // "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        console.log('Success:', response.data);
       localStorage.setItem('token', response.data.token);
       alert("Login Successful")
     
     
        navigate('/home')
  
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  return (
    <>
      <div className='container'>
        
        <div className='form-container'>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Email:</label>
            <input
              id='username'
              type='text'
              placeholder='Enter your username'
              value={email} onChange={(e) => handleChange(e, setEmail)}
            
              required
            />
            <br />
            <label htmlFor='vehicle'>Password:</label>
            <input
              id='vehicle'
              type='text'
              placeholder='Enter your vehicle no'
              value={password} onChange={(e) => handleChange(e, setPassword)}
              required
            />
            <br />
            <button type='submit'>
              Sign in
            </button>
          </form>
          <h4>
            New user? <Link to='signup'>Signup</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
