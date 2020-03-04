import React, { Component } from 'react'

import Axios from 'axios'

export default class RegisEmpl extends Component {
   
   state={

    //propiedad
    
    nombre: '',
    apellido:'',
    cedula:'',
    fecha2:'',
    cuenta:'',
    

   }


   
   
   
    onSubmit= async(e)=> {
        console.log(this.state)
        e.preventDefault();
const newEmpleado= {
            

            nombre: this.state.nombre,
            apellido: this.state.apellido,
            cedula: this.state.cedula,
            fecha2: this.state.fecha2,
            cuenta: this.state.cuenta,
            
         
        };
        console.log(this.state.nombre, this.state.apellido)
      const res= await Axios.post('http://127.0.0.1:8000/aplicacionEmpleado/', newEmpleado);
        
//console.log(res)
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
                  <input type="text" className="form-control" placeholder="Cedula" 
                  onChange={this.onInputChange}  name="cedula" required/>
                 </div>
                 
                 
                 
                 <div className="form-group">
                  <input type="text"  className="form-control" placeholder="Cuenta" 
                 onChange={this.onInputChange}  name="cuenta"  required/> 
                 </div> 
            
                 <div className="form-group">
                  <input type="date"  className="form-control" placeholder="Fecha2" 
                 onChange={this.onInputChange}  name="fecha2"   required/> 
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