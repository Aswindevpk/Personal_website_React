import React from 'react';
import './index.css'
import './App.css';
import {Header,Skills,About,Footer} from './containers'
import {useEffect} from "react";

// animate on scroll 
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
