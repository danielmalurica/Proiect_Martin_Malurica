import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.component';
import Homepage from './components/homepage.component'
import SignUp from './components/signup.component'

function App() {
  return (
    <Router>
    <div className="container">
     <Navbar />
     <br />
     <Homepage/>
     <br/>
     <SignUp/>
    </div>
    </Router>
  );
}

export default App;
