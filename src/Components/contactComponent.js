import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Container, Col, Row, } from 'react-bootstrap';

function Contact () {

    return(
        <Container fluid className="Ccontain" id="contact">
           
            <Row height="auto" className="justify-content-center squeezeA" style={{paddingTop:"50px"}}>
                <Col md={3}  className="Mid">
                  <FaHome className="links" /> <p className="p2"> Location: <br /> Laurel, Maryland </p>
                </Col>
                <Col md={3}  className="Mid">
                  <MdEmail className="links" /> <p className="p2"> Email: <br/> J06Garnes@Gmail.com </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;