import React from 'react';
import Header from './Components/headerComponent';
import About from './Components/aboutComponent';
import Projects from './Components/projectComponent';
import Contact from './Components/contactComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment >  
        <Header />
        <About />
        <Projects />
        <Contact />
    </React.Fragment>
  );
}

export default App;
