import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Axios from 'axios'

export default class Registro extends Component {
   
   state={

    //propiedad
    
    nombre: '',
    apellido:'',
    cedula:'',
    email:'',
    tlf:'',
    membresia: '',
    fecha2:'',

   }


   
   
   
    onSubmit= async(e)=> {
        console.log(this.state)
        e.preventDefault();
const newUser= {
            

            nombre: this.state.nombre,
            apellido: this.state.apellido,
            cedula: this.state.cedula,
            email: this.state.email,
            fecha: this.state.fecha2,
            tlf: this.state.tlf,
            membresia: this.state.membresia,
            
            


        };
        console.log(this.state.nombre, this.state.apellido)
      const res= await Axios.post('http://127.0.0.1:8000/aplicacionCliente/', newUser);
        
//console.log(res)
    }
    
    onChangeDate= fecha =>{

        this.setState({fecha});


    }

    onInputChange = e =>{
       // console.log(e.target.name, e.target.value)
        this.setState({  [e.target.name]: e.target.value })

    }


    
    
    render() {

        

        return (
            <div className="col-md-6">

                <div className="card card-body"> <h4>Create User</h4>
                

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nombre" 
                  name="nombre"  onChange={this.onInputChange} required  />
                  </div>

                  <div className="form-group">
                  <input type="text" className="form-control" placeholder="Apellido" 
                   onChange={this.onInputChange}  name="apellido" required/>
                  </div>

                   <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" 
                  onChange={this.onInputChange}  name="email" required/>
                 </div>
                 
                 <div className="form-group">
                  <input type="text" className="form-control" placeholder="Cedula" 
                  onChange={this.onInputChange}  name="cedula" required/>
                 </div>
                 
                 <div className="form-group">
                  <input type="text" className="form-control" placeholder="Telefono" 
                  onChange={this.onInputChange}  name="tlf" required/>
                 </div>
                 
                 <div className="form-group">
                  <input type="text"  className="form-control" placeholder="Membresia" 
                 onChange={this.onInputChange}  name="membresia"  required/> 
                 </div> 
            
                 <div className="form-group">
                  <input type="text"  className="form-control" placeholder="Fecha2" 
                 onChange={this.onInputChange}  name="fecha2"   required/> 
                 </div> 


                <div className="form-group" id="check">
                        <DatePicker className="form-control" 
                        selected={this.state.fecha}
                        onChange={this.onChangeDate}
                        
                        />
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