import React from 'react'
import Frame from '../Frame/frame';
import './Skills.css'
//react bootstarp
import ProgressBar from 'react-bootstrap/ProgressBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Skills() {
    return (
        <div className="container-fluid">
            <div className="row no-padding about-row" >
                <div className="col-sm-3 no-padding">
                <Frame />
                </div>
                <div className="col-sm-8 about_info">
                <Jumbotron fluid className="Desc_Jumbo">
                        <Container>
                        <h1 className="main_title">Skills</h1>
                        

                        </Container>
                    </Jumbotron>
                </div>
            </div>
        </div>
    )
}

export default Skills
