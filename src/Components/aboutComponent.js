import React from 'react';
import { FaReact, FaHtml5, FaBootstrap, FaNodeJs, FaGithub, FaLinkedin} from 'react-icons/fa';
import { SiJavascript, SiCss3, SiMongodb, SiRedux, SiVisualstudiocode, SiAdobeacrobatreader } from 'react-icons/si';
import { Container, Col, Row, Image } from 'react-bootstrap';

function About () {

    return(
        <Container fluid className="Acontain" id="about">
            <Row>
                <Col lg={4}  className="Mid altA">
                    <Row className="Mid">
                        <h1>About Me</h1>
                    </Row>
                    <Row className="Mid">
                    <p>I am a software developer and looking to start my owne gig etc.</p>
                    </Row>
                </Col>
                <Col lg={4} className="Mid alt">
                    <Image className="img" width="500px" height="400px" src="/photos/headshot.jpg" alt=""  />
                </Col>
                <Col lg={4} className="Mid altA">
                     <Row className="Mid">
                        <h1>Technologies</h1>
                    </Row>
                    <Row className="squeeze Mid">
                <Col >
                    <FaReact color="blue" className="icon" />
                </Col>
                <Col>    
                    <FaHtml5 color="orange" className="icon"/>
                </Col>
                <Col> 
                    <FaBootstrap color="purple" className="icon"/>
                </Col> 
                <Col> 
                    <FaNodeJs color="green" className="icon"/>
                </Col> 
                <Col>  
                    <FaGithub className="icon"/>
                </Col>
            </Row>
            <Row className="squeeze Mid">
                <Col>
                    <SiJavascript color="yellow" className="icon" />
                </Col>
                <Col>    
                    <SiCss3 color="blue" className="icon"/>
                </Col>
                <Col> 
                    <SiMongodb color="green" className="icon"/>
                </Col> 
                <Col>
                    <SiRedux color="purple" className="icon"/>
                </Col> 
                <Col>  
                    <SiVisualstudiocode color="blue" className="icon"/>
                </Col>
            </Row>
                </Col>
            
            </Row>
            <Row className="justify-content-center squeezeA">
                <Col xs lg={2} className="Mid">
                   <a href="https://www.linkedin.com/in/jeremy-garnes" target="_blank"> <FaLinkedin color="blue" className="links" /> <p className="p1"> Linkedin </p> </a>
                </Col>
                <Col xs lg={2} className="Mid">
                   <a href="https://github.com/Jgarnes" target="_blank"> <FaGithub className="links" /> <p className="p1">Github</p></a>
                </Col>
                <Col xs lg={2} className="Mid">
                  <a href="/resume/myresume.pdf" target="_blank"> <SiAdobeacrobatreader color="red" className="links" onClick /> <p className="p1"> Resume</p> </a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;