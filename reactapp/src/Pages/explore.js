import React from 'react'
import Policycard from '../Components/policycard'
import { Link } from 'react-router-dom'
import Topnav from '../Components/Topnav'
import './explore.css';

export default function Explore() {
  return (
<>
    <div>
      <Topnav/>
    </div>
    {/* <div className='exp' style={{width:'100vw',display:'flex',backgroundColor:'whitesmoke',flexDirection:'column'}}> */}
    
    <div style={{ overflowX: 'scroll', height: 'calc(100vh - 3em)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '3em', marginRight: '3em', marginTop: '3em',marginBottom:'1em' }}>
     
     <div style={{width:'80vw',display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'3em',marginTop:'3em',borderWidth:'2px',borderColor:'red'}}>
      <img style={{width:'20vw',height:'30vh'}} src='https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg?w=900&t=st=1689223942~exp=1689224542~hmac=1affc28d4891090021494972ef2d345e49621d1ecc649ffba22e8ef8e7cf9af0' />
      <div style={{marginLeft:'5em'}}>

      <h1 style={{marginLeft:'-25em',fontWeight:'bolder',fontSize:'30px'}}>Bike Insurances</h1>
      
      <span style={{fontWeight:'bolder',fontSize:'30px'}}>choose from range of bike insurances plans offering comprehensive coverage,affordable premiums and cashless repairs at 6500+network garages.Get hassle-free claims on two wheeler insurance.Customize your policy with attractive add on benefits.</span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <button style={{width:'300px',marginLeft:'20em',height:'50px',fontSize:'20px',color:'white'} }><Link to='/Insurance'>explore insurances</Link></button>
      </div>
      
      {/* <h1 style={{marginLeft:'5em',width:50}}>Bike Insurances</h1> */}
      </div>
      <div style={{width:'80vw',display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'3em',marginTop:'3em',borderWidth:'2px',borderColor:'red'}}>
      <img style={{width:'20vw',height:'30vh'}} src='https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?w=826&t=st=1689264589~exp=1689265189~hmac=f0665043eed21f735b6e123208e7aea751ae3b09a53fd8264b0c8bf740fc47c4' />
      <div style={{marginLeft:'5em'}}>

      <h1 style={{marginLeft:'-25em',fontWeight:'bolder',fontSize:'30px'}}>Car Insurances</h1>
      
      <span style={{fontWeight:'bolder',fontSize:'30px'}}>choose from range of car insurances plans offering comprehensive coverage,affordable premiums and cashless repairs at 6500+network garages.Get hassle-free claims on two wheeler insurance.Customize your policy with attractive add on benefits.</span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <button style={{width:'300px',marginLeft:'20em',height:'50px',fontSize:'20px',} }><Link to='/Insurance'>explore insurances</Link></button>
      </div>
      
      {/* <h1 style={{marginLeft:'5em',width:50}}>Bike Insurances</h1> */}
      </div>
      <div style={{width:'80vw',display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'3em',marginTop:'3em',borderWidth:'2px',borderColor:'red'}}>
      <img style={{width:'20vw',height:'30vh'}} src='https://img.freepik.com/premium-photo/big-touristic-bus-outdoor_392895-12160.jpg?w=996' />
      <div style={{marginLeft:'5em'}}>

      <h1 style={{marginLeft:'-25em',fontWeight:'bolder',fontSize:'30px'}}>Bus Insurances</h1>
      
      <span style={{fontWeight:'bolder',fontSize:'30px'}}>choose from range of Bus insurances plans offering comprehensive coverage,affordable premiums and cashless repairs at 6500+network garages.Get hassle-free claims on two wheeler insurance.Customize your policy with attractive add on benefits.</span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <button style={{width:'300px',marginLeft:'20em',height:'50px',fontSize:'20px'} }><Link to='/Insurance'>explore insurances</Link></button>
      </div>
      
      {/* <h1 style={{marginLeft:'5em',width:50}}>Bike Insurances</h1> */}
      </div>
      <div style={{width:'80vw',display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'3em',marginTop:'3em',borderWidth:'2px',borderColor:'red'}}>
      <img style={{width:'20vw',height:'30vh'}} src='https://5.imimg.com/data5/ANDROID/Default/2022/6/DJ/CQ/QT/43079619/screenshot-2022-06-03-15-27-49-15-jpg-500x500.jpg' />
      <div style={{marginLeft:'5em'}}>

      <h1 style={{marginLeft:'-25em',fontWeight:'bolder',fontSize:'30px'}}>Lorry Insurances</h1>
      
      <span style={{fontWeight:'bolder',fontSize:'30px'}}>choose from range of lorry insurances plans offering comprehensive coverage,affordable premiums and cashless repairs at 6500+network garages.Get hassle-free claims on two wheeler insurance.Customize your policy with attractive add on benefits.</span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button style={{width:'300px',marginLeft:'20em',height:'50px',fontSize:'20px'} }><Link to='/Insurance'>explore insurances</Link></button>
      </div>
      </div>
    
     
      </div>
      </>
  )
}
