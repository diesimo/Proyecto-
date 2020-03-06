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
import Registrar from './components/Registrar';
import Provedor from'./components/Provedor';
import Productos from './components/Productos';
import ModificarPro from './components/ModificarPro';
import 'bootstrap';
import'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';



function App() {
  return (
    <Router>
      <Navigation/>
     <Route path="/Licores" component={Licores}/>
      <Route path="/Login" component={Login}/>
      <Route path="/edit/:id" component={Productos}/>
      <Route path="/Registro" component={Registro}/>
      <Route path="/RegisEmpl" component={RegisEmpl}/>
      <Route path="/Zonas" component={Zonas}/>
      <Route path="/Registrar" component={Registrar}/>
      <Route path="/Provedor" component={Provedor}/>
      <Route path="/Productos" component={Productos}/>
      <Route path="/ModificarPro" component={ModificarPro}/>
    </Router>
  );
}

export default App;