import React from 'react';
import './style.css';

const profiles = [
    {
        name: "Scott Ayres",
        description: "Busting social media myths at the Social Media Lab,...",
        sharedConnections: 23,
        imgSrc: "Admin.png", 
    },
    {
        name: "Richard Beeson",
        description: "SaaS Customer Onboarding Manager / Producer and...",
        sharedConnections: 7,
        imgSrc: "Admin.png", 
    },
    {
        name: "Jacob Hilpertsh...",
        description: "Harness your social media content and engagemen...",
        sharedConnections: 5,
        imgSrc: "Admin.png", 
    },
    {
        name: "Stephanie Swee...",
        description: "Customer Support / Software QA Tester",
        sharedConnections: 4,
        imgSrc: "Admin.png", 
    },
    {
        name: "Sarah Hecker",
        description: "US Support & Affiliate Manager at Agorapulse",
        sharedConnections: 3,
        imgSrc: "Admin.png", 
    },
    {
        name: "Curt Ziegler",
        description: "Customer Support Hero at Agorapulse",
        sharedConnections: 3,
        imgSrc: "Admin.png", 
    },
    {
        name: "Hannah Recker",
        description: "Inbound & Marketing Operations Manager at...",
        sharedConnections: 4,
        imgSrc: "Admin.png", 
    },
    {
        name: "Michael Angiletta",
        description: "Growth Marketing | CMO | Agorapulse",
        sharedConnections: 3,
        imgSrc: "Admin.png", 
    },
];

const Assignment1 = () => {
    return (
        <div className="container">
            {profiles.map((profile, index) => (
                <div className="card" key={index}>
                    <img src={profile.imgSrc} alt={profile.name} className="profile-img" />
                    <div className="profile-details">
                        <h3>{profile.name}</h3>
                        <p>{profile.description}</p>
                        <p>{profile.sharedConnections} shared connections</p>
                        <button className="connect-button">Connect</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Assignment1;
