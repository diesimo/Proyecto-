import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import Productos from './components/Productos'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/Productos" component={Productos}/>


    </Router>
  );
}

export default App;