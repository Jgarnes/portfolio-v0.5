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
                <Col  className="text-center">
                    <Card className="card">
                        <Card.Img variant="top" src="/photos/Cover-Mel.JPG" />
                        <Card.Body className="cardHeight">
                            <Card.Title>My First Project</Card.Title>
                            <Card.Text>
                            My first project! During my Bootcamp we were tasked of selecting a portfolio project to comeplete. Not knowing what to do, I was conversing with a friend of mine, who is an actress, and she said (jokingly) you should build mine.
                            </Card.Text>
                            <a href="" target="_blank"><Button variant="primary">Take a look</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  className="text-center">
                    <Card >
                        <Card.Img variant="top" height="300px" width="100%" style={{objectFit:"cover", objectPosition: "50% 23%"}} src="/photos/Java/homescreen.JPG" />
                            <Card.Body className="cardHeight">
                                <Card.Title>More Than Java App</Card.Title>
                            <Card.Text>
                            An App I created for a local coffee shop. I noticed they have a website, but don't have an app. So I decided to build one. Take a look at the example photos below!!
                            </Card.Text>
                           <a href="#carousel"> <FaArrowDown className="icon"/></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  className="text-center">
                    <Card>
                    <Card.Img variant="top" height="300px" style={{objectFit:"cover"}} src="/photos/wall.jpg" />
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