import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <h1 className='h13'>Contact us</h1>
    <div className="footer-container">
      <div className="wrapper7">
          <div className="first">
            <ul>
              <li><h2>Contact Information</h2></li>
              <li>Email: utkarshsingh866@gmail.com</li>
              <li>Mobile No: 7007928369</li>
            </ul>
          </div>
          <div className="second">
            <ul>
              <li><h2>Links</h2></li>
              <li><a href="/">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="#footer-container">Contact </a></li>
            </ul>
          </div>
          <div className="third">
            <ul>
              <li><h2>Follow us on </h2></li>
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faWhatsapp} /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="second1">
        © 2023 Copyright Utkarsh Singh. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
