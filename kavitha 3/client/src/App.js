import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Herosection/Hero';
import Stats from './components/Stats/Stats';

import Container from './components/Container/Container';
import JoinMovement from './components/JoinMovement/JoinMovement';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Stats />
            <Container />
            <JoinMovement />
        </div>
    );
}

export default App;
