import React from 'react';
import CircularGallery from '../reactbits/CircularGallery/CircularGallery';
import TextPressure from '../reactbits/TextPressure/TextPressure';

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used


import image1 from '../assets/work1.jpg';
import image2 from '../assets/work2.jpg';
import image3 from '../assets/work3.jpg';
import image4 from '../assets/work4.jpg';
import image5 from '../assets/work5.jpg';
import image6 from '../assets/work6.jpg';
import image7 from '../assets/work7.jpg';


const galleryItems = [
  { image: image1, text: 'Poster Design' },
  { image: image2, text: 'YouTube Intro' },
  { image: image3, text: 'YouTube Intro' },
  { image: image4, text: 'YouTube Intro' },
  { image: image5, text: 'YouTube Intro' },
  { image: image6, text: 'YouTube Intro' },
  { image: image7, text: 'Social Media Ad' }
];
export default function Work() {
  return (
    <section id="work" className="work">
      <div style={{ position: 'relative', height: '100px', marginBottom: '1rem' }}>

  <TextPressure
    text=" Interactive Gallery!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
  
</div>
      <div className="circular-gallery-container">
        <CircularGallery
          items={galleryItems}
          bend={1}
          textColor="#ffcc00"
          borderRadius={0.05}
          font="bold 24px DM Sans"
        />
      </div>
    </section>
  );
}
