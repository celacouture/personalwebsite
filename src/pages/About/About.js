import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import "./About.css";
import AboutMe from '../../components/AboutMe/AboutMe'
import NavBarAbout from '../../components/NavBarAbout/NavBarAbout'
const About = () => (
  <Container fluid>
    <NavBarAbout />
    <h1>My Story</h1>
    <Row className="aboutRow">
      <Col sm="12" md={{ size: 8, offset: 2 }}>
    <AboutMe />
      </Col>
    </Row>
  </Container>
);

export default About;
