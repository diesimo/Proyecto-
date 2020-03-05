import React, { Component } from 'react'
import Axios from 'axios'

export default class Registrar extends Component {

    state = {

        //propiedad


        nombre:'',
        apellido:'',
        password:'',
        email:'',
        
       


    }





    onSubmit = async (e) => {
        console.log(this.state)
        e.preventDefault();
        const newUser = {

            nombre: this.state.nombre,
            apellido: this.state.apellido,
            password: this.state.password,
            email: this.state.email,
           
        };
        console.log(this.state.nombre, this.state.apellido, this.state.password, this.state.email)
        const res = await Axios.post('http://127.0.0.1:8000/aplicacionUsuarios/', newUser);

        console.log(res)
    }


    

   

    onInputChange = e => {
       // console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })

    }

   



    render() {



        return (
            <div className="col-md-6">

                <div className="card card-body"> <h4>Create User</h4>

                   
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre"
                            name="nombre" onChange={this.onInputChange} required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Apellido"
                            onChange={this.onInputChange} name="apellido" required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password"
                            onChange={this.onInputChange} name="password" required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email"
                            onChange={this.onInputChange} name="email" required />
                    </div>

                   

                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">
                            Registrar
                        </button>


                    </form>






                </div>




            </div>

        )
    }
}