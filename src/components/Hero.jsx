import { FaInstagram, FaTwitter } from 'react-icons/fa'; 
import React, { useRef } from 'react';
import '../global.css';
import Navbar from './Navbar';
import profileImage from '../assets/rahul.jpg';
import VariableProximity from '../reactbits/VariableProximity/VariableProximity';
import Particles from '../reactbits/Particles/Particles'; // your custom particles


export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section id="hero" className="hero-section">
      {/* ✅ Background Particles */}
      <div className="particles-background">
        <Particles />
      </div>

      {/* ✅ Foreground Content */}
      <div className="hero-content">
        <Navbar />
        <div className="hero-container">
          <div className="hero-text">
            <h1>Hi, I'm <span>Rahul Thakur</span></h1>
            <h2>Graphic Designer & Video Editor</h2>

            <div
              ref={containerRef}
              style={{ position: 'relative', marginTop: '2rem' }}
            >
              <VariableProximity
                label={'Enthusiastic and skilled freelance graphic designer with few years of experience crafting compelling visual narratives. Proficient in various video editing software and techniques, with a keen eye for detail and a passion for storytelling. Adept at collaborating with clients to bring their creative visions to life'}
                className={'variable-proximity-demo'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
              <div className="hero-actions">
  {/* Resume Button */}
  <a href="/resume.pdf" download className="resume-btn">Download Resume</a>

  {/* Social Icons */}
  <div className="social-icons">
    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
  </div>
</div>

            </div>
          </div>

          <div className="hero-image">
            <img src={profileImage} alt="Rahul Thakur" />
          </div>
        </div>
      </div>
    </section>
  );
}
