import React from 'react';
import { Card, Container, Col, Row, Button} from 'react-bootstrap';

function Projects () {

    return(
        <Container fluid className="Pcontain">
            <Row className="Mid justify-content-center">
                <h1>Portfolio</h1>   
             </Row>
             <Row>   
                <Col lg={4} >
                    <Card>
                        <Card.Img variant="top" src="/photos/Cover-Mel.JPG" />
                        <Card.Body>
                            <Card.Title>My First Project</Card.Title>
                            <Card.Text>
                            My first project! During my Bootcamp we were tasked of selecting a portfolio project to comeplete. Not knowing what to do, I was conversing with a friend of mine, who is an actress, and she said (jokingly) you should build mine. And this was the creation. She said she wanted a plain site. So I was limited there. But through my discovery of coding, I figured I can just give her a copy of what she wants and experiment with something else.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} >
                    <Card>
                        <Card.Img variant="top" height="357px" width="100%" style={{objectFit:"cover", objectPosition: "50% 23%"}} src="/photos/Java/homescreen.JPG" />
                            <Card.Body>
                                <Card.Title>More Than Java App</Card.Title>
                            <Card.Text>
                            An App I created for a local coffee shop. I noticed they have a website, but don't have an app. So I decided to build one.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
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