import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/hero'
import Programs from './Components/programs/programs'
import Title from './Components/title/Title'
import About from './Components/about/About'
import Campus from './Components/campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/Footer'
import VideoPlayer from './Components/videoplayer/VideoPlayer'
const App = () => {
  const [playState,setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title="  OUR PROGRAMS" ad="What We Offeer"/>
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title title="Gallery" ad="Campus photos"/>
        <Campus/>
        <Title title="TESTIMONIALS" ad="What Students"/>
        <Testimonials/>
         <Title title="CONTACT US" ad="Get in Touch"/>
         <Contact/>
         <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App


