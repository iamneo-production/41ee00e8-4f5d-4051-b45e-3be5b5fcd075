import logo from './logo.svg';
import './App.css';
// import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import Home from './Insurence/Pages/Home';

// import Login from './Pages/Login';
import Register from './Pages/Register';
import Explore from './Pages/explore';
import LoginPage from './Pages/login';
import SignupPage from './Pages/Register';
import Topnav from './Components/Topnav';
import Home from './Pages/Home';
import Policycard from './Components/policycard';
import Insurance from './Pages/insurance';
import Renew from './Pages/renew';
import Claim from './Pages/Claim';
import store from './Pages/Store';
import { Provider } from 'react-redux';
import Feauture from './Pages/feautures';
import About from './Pages/aboutus';
import Signup from './Pages/signup';
import Profile from './Pages/Profile';

function App() {
  return (

    <Provider store={store}>
    <Router>
      <Routes>
        {/* {/* <Route exact path="/" element={<Login/>} /> */}
        {/* <Route path="/register" element={<Register/>} /> */} 
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Topnav" element={<Topnav/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Insurance" element={<Insurance/>}/>
        <Route path="/Renew" element={<Renew/>}/>
        <Route path="/Register" element={<SignupPage/>}/>
        <Route path="/Claim" element={<Claim/>}/>
        <Route path="/Feauture" element={<Feauture/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;