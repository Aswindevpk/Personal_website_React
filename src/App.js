import React from 'react';
import './index.css'
import './App.css';
import {Header,Skills,About,Footer} from './containers'

function App() {
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
