import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Licores from './components/Licores';
import Login from './components/Login';
import Registro from './components/Registro';
import RegisEmpl from './components/RegisEmpl';
import Zonas from './components/Zonas';
import 'bootstrap';
import'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';



function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/Licores" component={Licores}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Registro" component={Registro}/>
      <Route path="/RegisEmpl" component={RegisEmpl}/>
      <Route path="/Zonas" component={Zonas}/>

    </Router>
  );
}

export default App;