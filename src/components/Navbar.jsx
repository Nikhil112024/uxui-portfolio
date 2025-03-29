import React from 'react';
import GooeyNav from '../reactbits/GooeyNav/GooeyNav'; // adjust path as needed
import '../global.css'; // if needed for styles

const items = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">RAHULTHAKUR</h2>

      {/* 👇 Insert GooeyNav inside Navbar */}
      <div className="gooey-nav-inside">
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
    </nav>
  );
}
