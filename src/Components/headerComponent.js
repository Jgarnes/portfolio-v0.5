import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiAdobeacrobatreader } from 'react-icons/si';
import { Container, Col, Row, } from 'react-bootstrap';

function Header () {

    return(
        <Container fluid className="back Hcontain" id="home">
            <Row className="inner">
                <Col > 
                    <h1 className="Hh1">Hello, My name is Jeremy Garnes</h1>
                    <h2 className="Hh2">I am a Full Stack Web-developer</h2>
                    
                </Col>
            </Row>
            <Row className="justify-content-center squeezeA">
                <Col  xs={2} className="Mid">
                   <a href="https://www.linkedin.com/in/jeremy-garnes" target="_blank" rel="noopener noreferrer"> <FaLinkedin color="blue" className="links" /> <p className="p1"> Linkedin </p> </a>
                </Col>
                <Col  xs={2} className="Mid">
                   <a href="https://github.com/Jgarnes" target="_blank" rel="noopener noreferrer"> <FaGithub className="links" /> <p className="p1">Github</p></a>
                </Col>
                <Col  xs={2} className="Mid" >
                  <a href="/resume/myresume.pdf" target="_blank" rel="noopener noreferrer"> <SiAdobeacrobatreader color="red" className="links" /> <p className="p1"> Resume</p> </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;