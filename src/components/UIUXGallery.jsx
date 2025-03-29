import React from 'react';
import '../global.css'; // Or create a UIUXGallery.css

// Import all 9 images
import ux1 from '../assets/uiux/ux1.jpg';
import ux2 from '../assets/uiux/ux2.jpg';
import ux3 from '../assets/uiux/ux3.jpg';
import ux4 from '../assets/uiux/ux4.jpg';
import ux5 from '../assets/uiux/ux5.jpg';
import ux6 from '../assets/uiux/ux6.jpg';
import ux7 from '../assets/uiux/ux7.jpg';


const images = [ux1, ux2, ux3, ux4, ux5, ux6, ux7,];

export default function UIUXGallery() {
  return (
    <section className="uiux-gallery">
      <h2 className="gallery-title">UI/UX Showcase</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`UIUX ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
