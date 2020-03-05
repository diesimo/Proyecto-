import React, { Component } from 'react'
import Axios from 'axios'

export default class Provedor extends Component {

    state = {

        //propiedad


        rif:'',
        nom_prove:'',
        direc:'',
       
        
       


    }





    onSubmit = async (e) => {
        console.log(this.state)
        e.preventDefault();
        const newUser = {

            rif: this.state.rif,
            nom_prove: this.state.nom_prove,
            direc: this.state.direc,
            
           
        };
        console.log(this.state.rif, this.state.nom_prove, this.state.direc)
        const res = await Axios.post('http://127.0.0.1:8000/aplicacionProveedores/', newUser);

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
                        <input type="text" className="form-control" placeholder="Rif"
                            name="rif" onChange={this.onInputChange} required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre del Provedor"
                            onChange={this.onInputChange} name="nom_prove" required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Direccion"
                            onChange={this.onInputChange} name="direc" required />
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