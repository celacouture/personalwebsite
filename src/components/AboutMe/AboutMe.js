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
        I am a life long learner and persistent problem solver who constantly seeks information through a wide range of resources. For the past 8 years I have been immersed in the world of elementary education, teaching 1st and 2nd graders at schools in NYC and Austin, Texas. As an educator I developed a love for creating curriculum and finding new and exciting resources and technologies to make content more engaging for students and planning more efficient for teachers.
        <br></br>
        <Media heading>Why Web Development</Media>
        My transition into a role as a Full-Stack Web Developer was inspired by my interest in building applications that are purposeful and dynamic web applications. Web development allows me to use my skills for solving puzzles, understanding maps, and figuring out systems everyday and see really cool results.
        <Media heading>When I'm not Coding</Media>
        My hobbies outside of coding include learning as much as I can about cooking and baking, playing trivia games, traveling, and rediscovering my hometown of Austin, Tx.
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
