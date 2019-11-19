import React, { Component } from 'react'
import './Flexbox.css';
import UI from '../../images/ui_dev.png';
import UX from '../../images/ux_dev.png';
// import BACKEND from '../../images/backend_dev.png';
import MEAN from '../../images/mean_stack.png';
import MERN from '../../images/mern_stack.png';
export default class Flexbox extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="d-flex flex-row flex-wrap justify-content-center">
                    <div class="d-flex flex-column">
                        <img src={UI} class="img-fluid" />
                        
                        <img src={UX} class="img-fluid"/>
                    </div>
                    <div class="d-flex flex-column">
                  
                  <img src={MEAN} class="img-fluid scale"/>
              </div>
              
              <div class="d-flex flex-column">
                  <img src={MERN} class="img-fluid scale mb-2"/>
              </div>
              
              
              
                    </div>
                </div>  
            </div>
        )
    }
}
