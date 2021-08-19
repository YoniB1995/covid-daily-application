import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,faStaylinked } from '@fortawesome/free-brands-svg-icons';

const About = () => {
 
    return (
      <div style={{ marginTop: '70px', marginLeft: '50px' , height:'100vh' }}>

        <h3>About This App<FontAwesomeIcon icon={faLungsVirus} style={{color:"red"}}/></h3>
        <p>An App to Track COVID-19 (Coronavirus) Pandemic</p>
        <p>Version : 1.0.0 </p>


        <h3>Developer Details: </h3>
        <div>
                <a href="https://www.linkedin.com/in/yoni-bitew-955b971bb/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} style={{color:"black", fontSize:"35px",marginLeft:"8px"}}/></a>
                <a href="https://github.com/YoniB1995" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color:"black", fontSize:"35px",marginLeft:"8px"}}/></a>
                <a href="https://yonib-personal-website.herokuapp.com/" target="_blank"><FontAwesomeIcon icon={faStaylinked} style={{color:"black", fontSize:"35px",marginLeft:"8px"}}/></a>
            </div>
      </div>
    );
  }


export default About;
