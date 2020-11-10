import React from 'react';
import Navi from './Components/navComponent';
import Header from './Components/headerComponent';
import About from './Components/aboutComponent';
import Projects from './Components/projectComponent';
import Mobile from './Components/carouselComponent';
import Contact from './Components/contactComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment >
        <Navi />  
        <div style={{overflowX:'hidden'}}>
        <Header />
        <About />
        <Projects />
        <Mobile />
        <Contact />
        </div>
    </React.Fragment>
  );
}

export default App;
