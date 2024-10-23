import React from 'react';
import './Stats.css'; // Create this file for styling

const Stats = () => {
    return (
        <section className="stats">
            <div className="stat-item">
                <h2>40K</h2>
                <p>Endangered Species</p>
            </div>
            <div className="stat-item">
                <h2>800</h2>
                <p>Volunteers</p>
            </div>
            <div className="stat-item">
                <h2>140</h2>
                <p>Conservation Programs</p>
            </div>
            <div className="stat-item">
                <h2>1</h2>
                <p>Earth for Us to Protect</p>
            </div>
        </section>
    );
};

export default Stats;
