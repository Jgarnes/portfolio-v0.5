import React from 'react';
import { Button, Container, Col, Row, } from 'react-bootstrap';

function Header () {

    return(
        <Container fluid className="back Hcontain">
            <Row className="inner">
                <Col > 
                    <h1 className="Hh1">Hello, My name is Jeremy Garnes</h1>
                    <h2 className="Hh2">I am a Full Stack webdeveloper</h2>
                    <Button className="btn" href="#about">Learn more</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;