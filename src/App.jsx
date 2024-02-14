import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import LoginForm from './components/pages/Login';
import SignUpForm from './components/pages/Register';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Search from './pages/Search';
// import Booking from './pages/Booking';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<LoginForm/>} />
      <Route exact path='/register' element={<SignUpForm/>} />
      {/* <Route exact path='/booking' element={<Booking/>} /> */}
    </Routes>    
   </Router>
  );
}

export default App;
