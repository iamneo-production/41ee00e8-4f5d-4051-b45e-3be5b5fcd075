// import React, { useState } from 'react';
// import { Link, useNavigate} from 'react-router-dom';


// export default function Register() {

//   const navigate = useNavigate();

//     const [username,setUsername] = useState('');
//     const [Vehno,setVehno] = useState('');
//     const [email,setEmail] = useState('');
//     const [phone,setPhone] = useState('');
//     const [addr,setAddr] = useState('');
//     const [files,setFiles] = useState('');

//     const [alname,setAlname] = useState('');
//     const [alveh,setalveh] = useState('');
//     const [alemail,setalemail] = useState('');
//     const [alphone,setalphone] = useState('');
//     const [aladdr,setAladdr] = useState('');
//     const [alfiles,setalfiles] = useState('');

//     const handleValidation = () => {
//       if(!files)
//       {
//         setalfiles("please choose the file")
//       }
//       else
//       {
//         setalfiles('')
//       }
//       if(!addr)
//       {
//         setAladdr('Please enter the Address')
//       }
//       else
//       {
//         setAladdr('')
//       }
//         if (!username) {
//             setAlname('Please Enter the User Name!')
//         }
//         else{
//             setAlname('')
//         }
//         if (!Vehno) {
//             setalveh('Please Enter the Vehicle Number!')
//         }
//         else
//         {
//             setalveh('')
//         }
//        if (!email) {
//           setalemail('Please Enter the Email Id!')
//         }
//       else
//       {
//           setalemail('')
//       }
//       if (!phone) {
//         setalphone('Please Enter the Phone Number!')
//       }
//     else
//     {
//         setalphone('')
//     }
//       if(Vehno && username && email && phone)
//         {
//             alert("Registration Sucessfull")
//             navigate('/')
//             setUsername('');
//             setEmail('')
//             setPhone('')
//             setVehno('')
//             setAddr('')
//         }
       
//       };
  

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100%', alignItems: 'center', backgroundColor: 'whitesmoke' }}>

//         <h1>Register Your Insurance</h1>

//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100vw', }}>
         
         
         
//           <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center',alignItems:'center'}}>
//             <input value={username}
//             onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5 }} />
//             <span style={{color:'red'}}>{alname}</span>
           
//             <input value={Vehno} onChange={(e) =>setVehno(e.target.value) }  placeholder='Enter Vehicle No' style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }} />
//             <span style={{color:'red'}}>{alveh}</span>
            
//             <input value={email} onChange={(e) =>setEmail(e.target.value) }
//               placeholder='Enter Email Id'
//               style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}
//             />

//           <span style={{color:'red'}}>{alemail}</span>

//             <input value={phone} onChange={(e) =>setPhone(e.target.value) }
//              placeholder='Enter Phone Number' style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}/>
//             <span style={{color:'red'}}>{alphone}</span>

//             <textarea value={addr} onChange={(e) =>setAddr(e.target.value) }
//              placeholder='Enter Address' style={{ width: '25em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/>
//             <span style={{color:'red'}}>{aladdr}</span>

//             {/* <span style={{color:'red'}}>{alfiles}</span> */}

//           </div>

//           <div>
//             <select style={{ width: '21.3em', fontSize: '1em', padding: '0.7em', margin: '1em' }}>
//               <option>Select the Model</option>
//               <option>Two Wheeler</option>
//               <option>Four Wheeler</option>
//             </select>
//             <label style={{color:'white',marginLeft:'1em'}}>License Proof</label>
//             <input type='file'  placeholder='License' style={{color:'black', width: '30em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/>

//           </div>
         
         
         
//           </div>

//          <button onClick={handleValidation} type='submit' style={{ width: '15em', padding: '0.6em', backgroundColor: 'black', borderRadius: 10, fontStyle: 'italic', fontSize: '1em', marginTop: '2em' }}>Register</button>
       
//         <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5em', marginTop: '0.6em' }}>
//           <span style={{ color: 'gray' }}>Already have an Account? </span>
//           <Link to='/' ><span style={{ color: 'black', marginLeft: '1em' }}>Sign in</span></Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Connect,useSelector } from 'react-redux';
import { useRef } from 'react';


const SignupPage = () => {

  const navigate=useNavigate();
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setmobile] = useState('');
  const [age, setage] = useState('');
  const [vehicle_Number, setvehicle_Number] = useState('');
  const [licence_Number, setlicence_Number] = useState('');
  const [amount,setamount] = useState('');

  const id=useSelector(state=>state.amount);
  


  const handleChange = (e,setter) => {
    setter(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
      name: name,
      mobile: mobile,
      vehicle_Number: vehicle_Number,
      licence_Number: licence_Number,
      age: age,
      email: email,
      amount:amount,
     
    };

  //   fetch('http://localhost:8080/post', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
    
  //     .then((responseData) => {
  //       console.log('Success:', responseData);
  //       fun()
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  //     function fun(){
  //       alert('user created');
  //       navigate('/Home')
  //     }
  // };
  let token = localStorage.getItem('token')
  
  console.log("token value:",token)
  localStorage.setItem('name',name);

    await axios.post('http://localhost:8181/api/v1/demo/post', data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('Success:', response.data);
      alert("Registration Successful")
     
     
          navigate('/Home')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return ( 
    <div className='back1' style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50,paddingTop:-100,}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40,marginLeft:-1000,width:'20vw',height:'70vh',overflowY:'scroll',paddingBottom:'2px',}}>
      <h1>Register Your Insurance</h1>
      <form onSubmit={handleSubmit}>
        <label style={{fontSize:'1.1em'}}>User Name:</label>
        <input
        value={name} onChange={(e) => handleChange(e, setname)}
        type="text"
        
        placeholder='enter your name'
        required
        />
        
        <label style={{fontSize:'1.1em'}}>Mobile No:</label>
        <input
          type="number"
          value={mobile} onChange={(e) => handleChange(e, setmobile)}
          pattern="[0-9]*"
        
          placeholder='enter your phone number'
          required
        />
        <label style={{fontSize:'1.1em'}}>Age:</label>
        <input
          type="number"
          
          value={age} onChange={(e) => handleChange(e, setage)}
          
          placeholder='enter your age'
          required
        />
      
        <label htmlFor="email" style={{fontSize:'1.1em'}}>Email:</label>
        <input
          type="email"
          id="email"
          placeholder='enter your Email'
          value={email} onChange={(e) => handleChange(e, setEmail)}
        
          required
        />
    
        <label style={{fontSize:'1.1em'}}>Vehicle No:</label>
        <input
          
          value={vehicle_Number} onChange={(e) => handleChange(e, setvehicle_Number)}
          placeholder='enter your vehicle number'
          
          required
        />
      
        <label style={{fontSize:'1.1em'}}>Licence No:</label>
        <input
        
        
        value={licence_Number} onChange={(e) => handleChange(e, setlicence_Number)}
          placeholder='enter your licence number'
          
          required
        />
      
        {/* <label style={{fontSize:'1.1em'}}>Amount</label>
        <input

value={amount}
placeholder={id}

        
        
         onChange={(e) => handleChange(e, setamount)}
        
          
          required
        /> */}
  
        

        <button type="submit">Register</button>

        {/* <h4>Already User?<Link to='/'>Sign in</Link></h4> */}
      </form>
    </div>
    </div>
  
  );
};

export default SignupPage;
