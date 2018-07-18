import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Col, Row } from 'reactstrap';
import './ProjectCard.css';


const ProjectCard=(props)=>{
  return(
    <div>
      <Container>
    <Row>
      <Col xs="12" sm="6" md="4">
      <Card className="projectCard">
        <CardBody>
          <CardTitle>Fun with Flags</CardTitle>
          <CardSubtitle>A React App</CardSubtitle>
        </CardBody>
        <img width="100%" height="190px" src={'/images/Screen Shot 2018-06-15 at 1.56.18 PM.png'} alt="Card image cap" />
        <CardBody>
          <CardText></CardText>
          <CardLink href="https://celacouture.github.io/Clicky-Game/">Demo</CardLink>
          <CardLink href="https://github.com/celacouture/Clicky-Game/tree/master/click_pic">GitHub Repository</CardLink>
        </CardBody>
      </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
      <Card className="projectCard">
        <CardBody>
          <CardTitle>CommunicatEd</CardTitle>
          <CardSubtitle>With MongoDB, Express, and Node</CardSubtitle>
        </CardBody>
        <img width="100%" height="190px" src={'/images/Screen Shot 2018-07-11 at 7.29.04 PM.png'} alt="Card image cap" />
        <CardBody>
          <CardText></CardText>
          <CardLink href="https://shielded-earth-16732.herokuapp.com/first.html">Demo</CardLink>
          <CardLink href="https://github.com/celacouture/comunicateEd">GitHub Repository</CardLink>
        </CardBody>
      </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
      <Card className="projectCard">
        <CardBody>
          <CardTitle>Austin Burger Bingo</CardTitle>
          <CardSubtitle>With MySQL Database</CardSubtitle>
        </CardBody>
        <img width="100%" height="190px" src={'/images/Screen Shot 2018-07-17 at 11.48.45 AM.png'} alt="Card image cap" />
        <CardBody>
          <CardText></CardText>
          <CardLink href="https://nameless-river-11679.herokuapp.com/">Demo</CardLink>
          <CardLink href="https://github.com/celacouture/burger">GitHub Repository</CardLink>
        </CardBody>
      </Card>
      </Col>
      </Row>
</Container>
    </div>
  )
}

export default ProjectCard;
