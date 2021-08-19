import React from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,faStaylinked } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return(
        <div className="footer-style">
            <div>All Copyright reserved YoniBⒸ</div>
            <div>
                <a href="https://www.linkedin.com/in/yoni-bitew-955b971bb/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} style={{color:"white", fontSize:"35px",marginLeft:"8px"}}/></a>
                <a href="https://github.com/YoniB1995" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color:"white", fontSize:"35px",marginLeft:"8px"}}/></a>
                <a href="https://yonib-personal-website.herokuapp.com/" target="_blank"><FontAwesomeIcon icon={faStaylinked} style={{color:"white", fontSize:"35px",marginLeft:"8px"}}/></a>
            </div>
            <div>v1.0.0</div>
        </div>
    )
}

export default Footer