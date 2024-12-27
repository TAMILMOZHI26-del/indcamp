import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signin from './Components/Signin/Signin';
// import Hero from './Components/Hero';
import Contactpage from './Components/Contact/Contactpage';
import Home from './Components/Home';
// import Signup from './Components/Signup/Signup';
// import OTP from './Components/OTP/OTP';



const App = () => {
  return (
    
    <Router>
      <Routes>
        
        {/* <Route path="/" element={<Signin />} /> */}
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Contactpage />} />
        {/* <Route path="/otp" element={<OTP/>} /> */}
      </Routes>
    </Router>
    // <>
    // <Hero/>
    // <Services/>
    // <Testimonial/>
    // </>
  );
};

export default App;

