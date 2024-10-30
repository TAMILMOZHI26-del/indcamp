import React from 'react'
import Navbar from '../Navbar/Navbar';

import Hero from '../Hero/Hero.js';
import Stats from '../Stats/Stats.js';
import Container from '../Container/Container.js';
import FlagshipProgram from '../FlagshipProgram/FlagshipProgram.js';





function Home() {
  return (
    <>
    <Navbar />
            <Hero />
            <Stats />
            <Container /> 
            <FlagshipProgram/>
    </>
  )
}

export default Home