import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import Licores from './components/Licores'
import 'bootstrap';
import'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/js/dist/dropdown';


function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/Licores" component={Licores}/>


    </Router>
  );
}

export default App;