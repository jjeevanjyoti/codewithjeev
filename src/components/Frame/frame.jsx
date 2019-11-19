import React from "react";
import { 
    Button,
    Card
  } from 'react-bootstrap';
import profile from '../../images/profile.jpg';
import cv from '../../images/JEEVANJYOTI.docx'
import './frame.css';
import {FaArrowDown} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
function Frame (){
return (
<Card className="img_card"style={{ width: '18rem', background: '#100f3a', border: 'none',position:'fixed'}}>
  <Card.Img variant="top" src={profile} className="profile_img"/>
  <Card.Body>
    <Card.Title className="general_info_title">General Information</Card.Title>
    <Card.Text>
    <div className="general_info_text">Name: <span>Jeevanjyoti Jena</span></div>
    <div className="general_info_text">Location: <span>Bangalore</span></div>
    <div className="general_info_text">Email: <span>jjeevanjyoti@gmail.com</span></div>
    <div className="general_info_text">Ph.No: <span>+918249396909</span></div>
    <div className="general_info_text top">
    <a href={cv} download className="downlaod_resume">
      Get Resume <span> <FaArrowDown  /></span>
    </a>
    </div>
    <div className="general_info_text">
      <span className="linkclass"><a href="https://www.facebook.com/jeevanjyoti.jena.9"  target="_blank"><FaFacebook /></a></span>
     <span><a href="https://github.com/jjeevanjyoti"  target="_blank"><FaGithub /></a></span> 
     <span> <a href="https://www.youtube.com/channel/UCBBIM64VES_mzLsXNSpgdLw"  target="_blank"><FaYoutube /></a> </span>
    </div>
    </Card.Text>
  </Card.Body>
</Card>
);
}

export default Frame;
