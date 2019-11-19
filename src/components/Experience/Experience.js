import React from 'react'
import Frame from '../Frame/frame';
import './Experience.css'
import Timeline from '../Timeline/Timeline';
function Experience() {
    return (
        <div className="container-fluid">
        <div className="row no-padding about-row" >
            <div className="col-sm-3 no-padding">
            <Frame />
            </div>
            <div className="col-sm-8 about_info">
                <Timeline />
            </div>
            </div>
    </div>
    )
}

export default Experience
