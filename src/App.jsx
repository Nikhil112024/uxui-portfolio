import { useState } from 'react'
import Hero from './components/Hero';
import Work from './components/Work';
import Contact from './components/Contact';
import './global.css'
import SplashCursor from './reactbits/SplashCursor/SplashCursor';
import UIUXGallery from './components/UIUXGallery';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Work/>
    <UIUXGallery />
    <Contact />
<SplashCursor />
    </>
  )
}

export default App
