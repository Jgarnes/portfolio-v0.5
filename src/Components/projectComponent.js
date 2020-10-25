import React from 'react';
import { Card, Container, Col, Row, Button} from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';

function Projects () {

    return(
        <Container fluid className="Pcontain" id="project">
            <Row className="project justify-content-center">
                <h1>Portfolio</h1>   
             </Row>
             <Row className="justify-content-center">   
                <Col lg={4} className="text-center">
                    <Card className="card">
                        <Card.Img variant="top" height="325px" style={{objectFit:"cover"}} src="/photos/Cover-Mel.JPG" />
                        <Card.Body className="cardHeight">
                            <Card.Title>My First Project</Card.Title>
                            <Card.Text>
                            Created a portfolio site for an Actress friend of mine. 
                            </Card.Text>
                           <a href="https://melissavictor.netlify.app" target="_blank" rel="noopener noreferrer"><Button variant="primary">Take a look</Button></a> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="text-center">
                    <Card >
                        <Card.Img variant="top" height="325px" width="100%" style={{objectFit:"cover", objectPosition: "50% 23%"}} src="/photos/Java/homescreen.JPG" />
                            <Card.Body className="cardHeight">
                                <Card.Title>More Than Java App</Card.Title>
                            <Card.Text>
                            An App I created for a local coffee shop. Take a look at the example photos below!!
                            </Card.Text>
                           <a href="#carousel"> <FaArrowDown className="icon"/></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="text-center">
                    <Card>
                    <Card.Img variant="top" height="325px" style={{objectFit:"cover"}} src="/photos/wall.jpg" />
                        <Card.Body className="cardHeight">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;