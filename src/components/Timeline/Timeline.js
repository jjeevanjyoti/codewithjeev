import React, { Component } from 'react'
import './Timeline.css'
import {FaExternalLinkAlt} from "react-icons/fa";
export default class Timeline extends Component {
    render() {
        return (
            <section id="timeline">
                <article>
                    <div class="inner">
                    <span class="date">
                    
                        <span class="month">June</span>
                        <span class="year">2019</span>
                    </span>
                    <h2>One touch sanity</h2>
                    <p> <strong>Description: </strong>
                        Web based single page application that executes hardware sanity (with or without upgrade test
                        [Brownfield scenarios]) and generate release notes with minimal user inputs. The application
                        aims at minimizing time and effort. It also eliminates dependency on specific engineer for the
                        activity. </p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                    <span class="date">
                        <span class="month">Jan</span>
                        <span class="year">2019</span>
                    </span>
                    <h2>Do-Backup Dashboard</h2>
                    <p>
                        <strong>Description: </strong>Do-Backup Microservice has been implemented using Spring Boot. The functionality of Do-
                Backup Microservice is to spawn new Warrior jobs as per the scheduler&#39;s Kafka instruction.
                Scheduler will normally send one or more lists to be executed, each list will be considered as
                separate Job and Do-Backup will create jobs and each Job will in turn create a pod to execute
                the backup. We use Kubernetes API in Java to spawn the Warrior pods based on need.</p> 


                    </div>
                </article>
                <article>
                    <div class="inner">
                    <span class="date">
                        <span class="month">Oct</span>
                        <span class="year">2018</span>
                    </span>
                    <h2>File Manager POC’S</h2>
                    <p><strong> Description: </strong>This Project requirement was We need to connect to any system using files module of Nodejs. This will show all the files and folders in website . We can Do operation like Copy,delete,paste,view within the website and it will reflect inside the system. </p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                    <span class="date">
                        <span class="month">June</span>
                        <span class="year">2018</span>
                    </span>
                    <h2 ><a href="https://www.terralogic.com/" target="_blank">Terralogic  &nbsp;<span><FaExternalLinkAlt/></span></a></h2>
                    <p> <strong> Description: </strong>It’s a new Website for Terralogic with advancement features and career ,events,blogs,social activities,industry standards,support and products and clients.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                    <span class="date">
                        <span class="month">Jan</span>
                        <span class="year">2018</span>
                    </span>
                    <h2>Smart Regression</h2>
                    <p><strong> Description: </strong>This Dashboard website is designed with Angular 6 Framework and in back end python.Here I am using the bunch of data and showing in chart format using Highcharts (Bargraph charts,scattered plot charts,and Ven charts,).Utilising post method and get method showing in table and plotting data in dashboard with sorting and searching and important one is Highcharts with login validation.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                    <span class="date">
                        <span class="month">Aug</span>
                        <span class="year">2017</span>
                    </span>
                    <h2> <a href="https://www.yatragenie.com/#/" target="_blank">Yatragenie &nbsp;<span><FaExternalLinkAlt/></span></a></h2>
                    <p><strong> Description: </strong>This is live bus booking website with advanced features UI design and user friendly with single page Apllication using Angular 5.This website is compete responsive both mobile and webview, Live bus booking  with payment gateways with ticket cancelation and offer section with proper filter and searching functionalities Each section like about,blogs,sitemap,career,contact etc.With user login,register,forgot password,session storage,local storage.</p>
                    </div>
                </article>
        </section>
        )
    }
}
