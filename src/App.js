import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import Header from './components/Header/header';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Blogs from './components/Blogs/Blogs';
import MyTutorial from './components/MyTutorial/MyTutorial';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';

function App() {
  return (
    <Router>
    <div className="App super-container">
      <header className="App-header">
       <Header />
       <Switch>
          <Route exact path="/" component={About}>
             <About />
          </Route>
          <Route exact path="/skills" component={Skills}>
            <Skills />
          </Route>
          <Route exact path="/services" component={Services}>
            <Services />
          </Route>
          <Route exact path="/Experience" component={Experience}>
            <Experience />
          </Route>
          <Route exact path="/education" component={Education}>
            <Education />
          </Route>
          <Route exact path="/mytutorial" component={MyTutorial}>
            <MyTutorial />
          </Route>
          <Route exact path="/blogs" component={Blogs}>
            <Blogs />
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route component={Error} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
