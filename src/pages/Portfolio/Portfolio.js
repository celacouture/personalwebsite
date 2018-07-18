import React from 'react';
import {Container, Row} from 'reactstrap'
import "./Portfolio.css";
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import NavBarPort from '../../components/NavBarPort/NavBarP'


const Portfolio = () => (
  <Container fluid>
    <NavBarPort />
    <h1>My Projects</h1>
    <ProjectCard />
  </Container>
);

export default Portfolio;
