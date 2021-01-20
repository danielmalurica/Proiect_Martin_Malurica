import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'
import SignUp from './components/SignUp'
import ListaCalatorii from './components/ListaCalatorii';


function App() {
  return (
    <Router>

     <Navbar />
     <br />
     
     <Route path="/create" component={Homepage}/>
     <Route path="/signup" component={SignUp}/>
      <Route path="/list" component={ListaCalatorii}/>
    </Router>
  );
}

export default App;
