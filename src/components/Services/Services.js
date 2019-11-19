import React from 'react'
import Frame from '../Frame/frame';
import Flexbox from '../Flexbox/Flexbox';

function Services() {
    return (
        <div className="container-fluid">
        <div className="row no-padding about-row" >
            <div className="col-sm-3 no-padding">
            <Frame />
            </div>
            <div className="col-sm-8 about_info">
               <Flexbox /> 
            </div>
        </div>
    </div>
    )
}

export default Services
