import React from 'react';
import { FaPhoneVolume, FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Container, Col, Row, } from 'react-bootstrap';

function Contact () {

    return(
        <Container fluid className="Ccontain" id="contact">
            <Row height="auto" className="justify-content-center squeezeA" style={{paddingTop:"50px"}}>
                <Col   className="Mid">
                  <FaPhoneVolume className="links" /> <p className="p2"> Telephone: <br /> 443-810-5547 </p>
                </Col>
                <Col   className="Mid">
                  <FaHome className="links" /> <p className="p2"> Location: <br /> Laurel, Maryland </p>
                </Col>
                <Col   className="Mid">
                  <MdEmail className="links" /> <p className="p2"> Email: <br/> J06Garnes@Gmail.com </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;