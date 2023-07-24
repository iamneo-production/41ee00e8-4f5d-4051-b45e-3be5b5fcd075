// import React from 'react'
// import Topnav from '../Components/Topnav'

// export default function Home() {
//   return (
//     <div> 
//         <div>

//         <Topnav/>
//         </div>
//         <div style={{width:'100vw',height:'100vh',display:'flex',backgroundColor:'white',flexDirection:'column'}}>

//             <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:'3em',height:'100%',opacity:'0.8'}}>

//                 <div style={{width:'50%',marginLeft:'6em',justifyContent:'center',alignItems:'center'}}>
//                    {/* <div style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:'6em'}}> */}
//                         <h1 style={{color:'red'}}>Fast And Easy Insurence</h1>
//                         <div style={{justifyContent:'center',alignItems:'center'}}>
//                         <h1 style={{fontFamily:'monospace',fontSize:'2.4em',alignItems:'center',justifyContent:'center'}}>
//                         "Insurance is the safety net that allows us to navigate life's uncertainties with peace of mind and financial security  it's a promise of support and protection when we need it the most."
//                         </h1>
//                         <br></br>
//                         <br></br>
//                         <br></br>
//                         <h1 style={{fontSize:'2.4em'}}>"Getting insurance is your responsibility to your family and loved ones.you may hate it but it is your responsibility"</h1>
//                         </div>
//                    {/* </div> */}
//                 </div>

//                 <div style={{justifyContent:'center',alignItems:'center',marginLeft:'3em',marginTop:50,backgroundSize:'cover',opacity:0.7}}>
//                 <img style={{ width:'50vw',height:'50vh'}} src='https://img.freepik.com/free-photo/red-car-bunch-coins_23-2148783035.jpg?w=826&t=st=1689153664~exp=1689154264~hmac=a0d19879e260d0016335f092670b9ffad0fb3b33f0f70fc2511c668c6f30710f'/>
//                 </div>
//             </div>

//             {/* <div style={{width:'100%',marginTop:'2em',justifyContent:'center',alignItems:'center',display:'flex'}}>
//                 <button style={{width:264,height:40,backgroundColor:'white',color:'black',fontSize:'1.2em'}}>Learn More</button>
//             </div> */}
//         </div>
//         </div>
//   )
// }
import React, { useEffect } from 'react';
import Topnav from '../Components/Topnav';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrollbars

    return () => {
      document.body.style.overflow = 'auto'; // Enable scrollbars on component unmount
    };
  }, []);

  return (
    <div>
      <div>
        <Topnav />
      </div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
          overflowY: 'scroll', // Enable vertical scrolling
          scrollBehavior: 'smooth', // Enable smooth scrolling
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '3em',
            height: '100%',
            opacity: '0.8',
          }}
        >
              <div style={{ width:'50%',height:'100%',justifyContent: 'center', alignItems: 'center', marginLeft: '3em', marginTop: 50, backgroundSize: 'cover', }}>
                <img
                  style={{ width: '100%', height: '50%' }}
                  src='https://www.bajajallianz.com/content/dam/bagic/video-imgs/Car.png'
                  alt='Car and coins'
                />
              </div>
          <div
            style={{
              width: '50%',
              marginLeft: '6em',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ color: 'red' }}>Fast And Easy Insurance</h1>
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ fontFamily: 'monospace', fontSize: '2.4em', alignItems: 'center', justifyContent: 'center' }}>
                "Insurance is the safety net that allows us to navigate life's uncertainties with peace of mind and financial security. It's a promise of support and protection when we need it the most."
              </h1>
              <br />
              <br />
              <br />
              <h1 style={{ fontSize: '2.4em' }}>
                "Getting insurance is your responsibility to your family and loved ones. You may hate it, but it is your responsibility."
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
