import React from "react";
import { 
    Button,
    Card
  } from 'react-bootstrap';
import profile from '../../images/profile.jpg'
function Frame (){
return (
<Card style={{ width: '18rem', background: '#100f3a', border: 'none' }}>
  <Card.Img variant="top" src={profile} />
  <Card.Body>
    <Card.Title className="general_info_title">General Information</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
);
}

export default Frame;
