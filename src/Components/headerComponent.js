import React from 'react';

import { Container, Col, Row, } from 'react-bootstrap';

function Header () {

    return(
        <Container fluid className="back Hcontain" id="home">
            <Row className="inner move">
                <Col > 
                    <h1 className="Hh1">My name is Jeremy Garnes</h1>
                    <h2 className="Hh2">I am a Full Stack Web-developer</h2>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Header;