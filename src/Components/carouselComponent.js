import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';


function Mobile() {
    return (
    <Container fluid className="Mcontain" id="carousel">
        <Row>
            <Col>
            

        <Carousel >
            <Carousel.Item>
                <img
                className="w-100"
                src="/photos/Java/homescreen.JPG"
                alt=""
                style={{objectFit:"contain"}}
                height="700px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100"
                src="/photos/Java/homescreen2.JPG"
                alt="First slide"
                style={{objectFit:"contain"}}
                height="700px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100"
                src="/photos/Java/aboutscreen.JPG"
                alt="First slide"
                style={{objectFit:"contain"}}
                height="700px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100"
                src="/photos/Java/homescreen3.JPG"
                alt="First slide"
                style={{objectFit:"contain"}}
                height="700px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100"
                src="/photos/Java/contactscreen.JPG"
                alt="First slide"
                style={{objectFit:"contain"}}
                height="700px"
                />
            </Carousel.Item>
        </Carousel>
        </Col>
        </Row>
    </Container>    
    );
}

export default Mobile;