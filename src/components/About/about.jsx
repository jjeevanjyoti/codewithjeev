import React from "react";
import Frame from '../Frame/frame';
import '../About/about.css';
//react bootstarp 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function About (){
    return (
        <div className="container-fluid">
            <div className="row no-padding about-row" >
                <div className="col-sm-3 no-padding">
                <Frame />
                </div>
                <div className="col-sm-8 about_info">
                    <h4 className="main_subtitle">Full Stack Developer | MEAN | MERN | Python</h4>
                    <h1 className="main_title">Jeevanjyoti Jena</h1>
                    <h2 className="about_title">Description</h2>
                    <Jumbotron fluid className="Desc_Jumbo">
                        <Container>
                            <p className="roboto">I am a <strong>Full-stack Developer</strong> from Bangalore, India. I am very passionate and dedicated to my work. I have 2.2 years of work experience. And enjoy working in a team or individual.</p>
                            <p className="roboto">Also Pasionate towards <strong>Artificial inteligence , Machine learning , System design.</strong></p>
                            <p className="roboto"><strong>Hobbies:</strong> Coding,Photography,Teaching,Bloging,Vloging</p>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        </div>
       
    );
}

export default  About;
