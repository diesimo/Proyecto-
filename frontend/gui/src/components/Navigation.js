import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/">Licoapp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="navbar-brand" to="/Acompañantes">Contactos</Link>
            </li>
            <li className="nav-item">
          
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/Licores">Licores</Link>
              <Link className="dropdown-item" to="/Acompañantes">Acompañantes</Link>
              <Link className="dropdown-item" to="/Login"> Login</Link>
              <Link className="dropdown-item" to="/Registro">Registro</Link>
              <Link className="dropdown-item" to="/RegisEmpl">Registro Empleado</Link>
              <Link className="dropdown-item" to="/Zonas">Zonas</Link>
              <Link className="dropdown-item" to="/Registrar">Registrar</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
             
            </li>
          </ul>
          
        </div>
      </nav>
    )


  }




}