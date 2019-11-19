import React from "react";
import { 
    Button,
    Card
  } from 'react-bootstrap';
import profile from '../../images/profile.jpg';
import './frame.css';
function Frame (){
return (
<Card style={{ width: '18rem', background: '#100f3a', border: 'none',position:'fixed' }}>
  <Card.Img variant="top" src={profile} />
  <Card.Body>
    <Card.Title className="general_info_title">General Information</Card.Title>
    <Card.Text>
    <div className="general_info_text">Name: <span>Jeevanjyoti Jena</span></div>
    <div className="general_info_text">Location: <span>Bangalore</span></div>
    <div className="general_info_text">Email: <span>jjeevanjyoti@gmail.com</span></div>
    <div className="general_info_text">Ph.No: <span>+918249396909</span></div>
    </Card.Text>
  </Card.Body>
</Card>
);
}

export default Frame;
