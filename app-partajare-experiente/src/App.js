import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import AddCalatorie from './components/AddCalatorie'
import SignIn from './components/SignIn'
import ListaCalatorii from './components/ListaCalatorii';


function App() {
  return (
    <Router>

     <Navbar />
     <br />
     
     <Route path="/create" component={AddCalatorie}/>
     <Route path="/signin" component={SignIn}/>
     <Route path="/list" component={ListaCalatorii}/>
    </Router>
  );
}

export default App;
