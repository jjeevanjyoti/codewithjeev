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
                        <div className="container Top skills">
                            <div className="row row-inner">
                                <div className="col-sm-6">
                                    <p style={{fontSize:'large'}}><strong>Soft Skills</strong></p>
                                    <p>Design Thinking</p>
                                    <p>Problem Solving</p>
                                    <p>Quick Learning</p>
                                    <p>Team management</p>
                                    <p>Adaptive</p>
                                    <p>Enthusiast To Learn New Technologies</p>
                                </div>
                                <div className="col-sm-6">
                                    <p style={{fontSize:'large'}}><strong>Programming Skills</strong></p>
                                    <p>Angular</p>
                                    <p>React.Js</p>
                                    <p>Node.Js</p>
                                    <p>MongoDb</p>
                                    <p>Python</p>
                                    <p>OOPs</p>
                                </div>
                            </div>
                        </div>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        </div>
    )
}

export default Skills
