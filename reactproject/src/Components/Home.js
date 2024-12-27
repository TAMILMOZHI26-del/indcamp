import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import Testimonial from '../Components/Testimonial/Testimonial';
// import About from '../Components/About/About';

function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            {/* <About/> */}
            <Testimonial/>
        </>
    )
}

export default Home;