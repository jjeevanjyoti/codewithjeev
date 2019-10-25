import React from "react";
import Frame from '../Frame/frame';
import '../About/about.css';
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
                </div>
            </div>
        </div>
       
    );
}

export default  About;
