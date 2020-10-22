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
                    <Row className="Mid squeeze" style={{marginTop: "30px", fontSize: "20px"}}>
                    <p>Transitioning my skills from over 5 years’ experience in theater, event production, and production management to a career in
                        website development. Proficient with various front-end and back-end frameworks as well as management of underlying
                        databases. Professional and detail-oriented with strong leadership and communication skills. Proven ability to plan, organize,
                        and execute, to meet both customer expectations and organizational goals.</p>
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
                <Col  xs={2} className="Mid">
                   <a href="https://www.linkedin.com/in/jeremy-garnes" target="_blank" rel="noopener noreferrer"> <FaLinkedin color="blue" className="links" /> <p className="p1"> Linkedin </p> </a>
                </Col>
                <Col  xs={2} className="Mid">
                   <a href="https://github.com/Jgarnes" target="_blank" rel="noopener noreferrer"> <FaGithub className="links" /> <p className="p1">Github</p></a>
                </Col>
                <Col  xs={2} className="Mid">
                  <a href="/resume/myresume.pdf" target="_blank" rel="noopener noreferrer"> <SiAdobeacrobatreader color="red" className="links" onClick /> <p className="p1"> Resume</p> </a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;