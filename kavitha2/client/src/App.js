import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Herosection/Hero';
import Stats from './components/Stats/Stats';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Stats />
        </div>
    );
}

export default App;
