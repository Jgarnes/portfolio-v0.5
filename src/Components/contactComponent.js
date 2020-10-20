import React from 'react';
import { Button, Container, Col, Row, } from 'react-bootstrap';

function Contact () {

    return(
        <Container className="contain">
            <Row>
                <Col>
                   telephone
                </Col>
                <Col>
                   address
                </Col>
                <Col>
                   email
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;