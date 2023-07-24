
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';



function Topnav({ logstate, login, logout }) {
  
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState('Login');

const handlelog = () => {
  if (!logstate) {
      navigate('/');
    } else {
      logout();
      setLoginData('Logout')
    }
  };
  return (
    <div>
      
      <div
        style={{
          width: '100%',
          paddingBottom: '2em',
          paddingLeft: '2em',
          paddingRight: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1 style={{ color: 'red', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Automobile Insurance</h1>
            <h1 style={{ marginLeft: '0.3em', fontFamily: 'sans-serif' }}> Portal</h1>
          </div>
          <span style={{ textAlign: 'center', marginTop: '-1em' }}>Making You Feel Safe</span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'brown',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingLeft: '2em',
          paddingRight: '2em',
        }}
      >

<div>

            <FaBars style={{ marginRight: '0.4em', color: 'white',fontSize:'2em',marginLeft:'-5em',marginTop:'0.5em',width:'3em',cursor:'pointer' }} />
</div>
            
            
<div>
        <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Home</h3>
        </Link>
  </div> 

  <div>
        <Link to='/explore' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Explore</h3>
        </Link>
  </div>
  <div>

        <Link to='/Renew' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Renew</h3>
        </Link>
  </div>
  <div>

        <Link to='/Claim' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Claim</h3>
        </Link>
  </div>
  <div>

        <Link to='/Feauture' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Feautures</h3>
        </Link>
  </div>

  <div>


        <Link to='/About' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>About us</h3>
        </Link>
  </div>
  <div>


        <Link to='/profile' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Profile</h3>
        </Link>
  </div>
  <div>
{/* 
  <Link to='/'><h3 style={{ cursor:'pointer',fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText', fontWeight: 'bolder', textDecoration: 'none', color: 'white'  }}>Log out</h3></Link> */}
  <Link to='/'><h3 style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white'  }}>Log out</h3></Link>

  </div>
    </div>
      <div style={{ marginLeft: '2em', width: '95%', height: '0.16em', backgroundColor: 'black' }}></div>
    </div>
  );
}
  const mapStateToProps = state => {
    return {
      logstate: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      login: () => dispatch({ type: 'Login' }),
      logout: () => dispatch({ type: 'Logout' })
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Topnav);


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { connect } from 'react-redux';




//   return (
//     <div>
//       <div
//         style={{
//           width: '100%',
//           paddingBottom: '2em',
//           paddingLeft: '2em',
//           paddingRight: '2em',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <h1 style={{ color: 'red', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Automobile Insurance</h1>
//             <h1 style={{ marginLeft: '0.3em', fontFamily: 'sans-serif' }}> Portal</h1>
//           </div>
//           <span style={{ textAlign: 'center', marginTop: '-1em' }}>Making You Feel Safe</span>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: 'brown',
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-evenly',
//           paddingLeft: '2em',
//           paddingRight: '2em',
//         }}
//       >
//             <FaBars style={{ marginRight: '0.4em', color: 'white',fontSize:'2em',marginLeft:'-7em',marginTop:'0.5em',width:'3em',cursor:'pointer' }} />
            
            
           
//         <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
//           <h3 style={{ color: 'white' }}>Home</h3>
//         </Link>
//         <Link to='/explore' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
//           <h3 style={{ color: 'white' }}>Explore</h3>
//         </Link>
//         <Link to='/Renew' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
//           <h3 style={{ color: 'white' }}>Renew</h3>
//         </Link>
//         <Link to='/Claim' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
//           <h3 style={{ color: 'white' }}>Claim</h3>
//         </Link>
//         <Link to='/Feauture' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
//           <h3 style={{ color: 'white' }}>Feautures</h3>
//         </Link>
//         <Link to='/About' style={{ fontWeight: 'bolder', textDecoration: 'none', color: 'white' }}>
//           <h3 style={{ color: 'white' }}>About us</h3>
//         </Link>
//         <Link> 
//             <h3 onClick={handlelog} style={{ cursor:'pointer',fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText' }}>{logstate?"Logout":"Login"}</h3>
//           </Link>
//       <div style={{ marginLeft: '2em', width: '95%', height: '0.16em', backgroundColor: 'black' }}></div>
//     </div>
//     </div>
//   );
// }
// const mapStateToProps = state => {
//   return {
//     logstate: state
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => dispatch({ type: 'Login' }),
//     logout: () => dispatch({ type: 'Logout' })
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Topnav);
