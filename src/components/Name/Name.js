import React from 'react';
import './Name.css';
import{Button} from 'reactstrap'
import { Link } from "react-router-dom";


const Name=(props)=>{
  return(
    <div className='intro'>
      <header className='namePlate'>
        <h1 className="myName">Calle LaCouture</h1>
        <Button outline color="secondary"><Link to="./aboutme"><h3>Full-Stack Web Developer</h3></Link></Button>
      </header>
    </div>
  )
}

export default Name;
