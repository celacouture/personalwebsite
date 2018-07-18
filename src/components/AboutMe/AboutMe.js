import React from 'react';
import {Media, Card} from 'reactstrap';
import './AboutMe.css'

const AboutMe =()=>{
  return(
    <Card className="bioStatement">
      <Media>
      <Media left>
        <img className="portrait" src="/images/IMG_2901.jpg" width= "200" alt="Calle LaCouture" />
      </Media>
      <Media body className="aboutBody">
        <Media heading>
          My Background
        </Media>

        <br></br>
        <br></br>
        <Media heading>Why Web Development</Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <div className="bg clearfix" style={{ padding: '.5rem' }}>
          <button className="btn float-left"><a href="https://github.com/celacouture"><i class="fab fa-github fa-3x"></i></a></button>
          <button className="btn"><a href="https://www.linkedin.com/in/calle-lacouture/"><i class="fab fa-linkedin fa-3x"></i></a></button>
          <button className="btn"><a href ="mailto:celacouture@gmail.com"><i class="fas fa-at fa-3x"></i></a></button>
        </div>
      </Media>
    </Media>



    </Card>
  )
}

export default AboutMe;
