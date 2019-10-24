import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import Header from './components/Header/header';


function App() {
  return (
    <div className="App super-container">
      <header className="App-header">
       <Header />
       <About />
      </header>
    </div>
  );
}

export default App;
