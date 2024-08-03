import About from "./Components/About";
import {Contact} from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import {Nav} from "./Components/Nav";
import Service from "./Components/Services";
import "./css/Main.css";
import  './css/Animation.css'
import LearnMore from "./Components/LearnMore";
import { useState } from "react";
function App() {
  // states
  const [showLearnMore, setShowLearnMore] = useState(false)
  const [showNavLinks, setShowNavLinks] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ***Images On load***

  const Imgs = document.querySelectorAll('image')
  Imgs.forEach(img =>{
    img.onload = () =>{
      img.parentElement.classList.add('img_loading');
      console.log(img.parentElement);
      
    }
  })
  return (
    showLearnMore
    ?
    <LearnMore windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
    :
    <div className={'container'}>
      <Nav showNavLinks={showNavLinks} windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
      <Hero setShowLearnMore={setShowLearnMore}/>
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;