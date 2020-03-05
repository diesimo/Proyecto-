import React, { Component } from 'react'

import Axios from 'axios'






export default class Zonas extends Component {
   
    state={
 
     //propiedad
   
     zona:'',
     horas:'',
 
    }
 
 
    
    
    
     onSubmit= async(e)=> {
         console.log(this.state)
         e.preventDefault();
 const newZona= {
             
 
             zona:this.state.zona,
             horas:this.state.horas,
          
         };
         console.log( this.state.zona)
       const res= await Axios.post('http://127.0.0.1:8000/aplicacionesZonas/', newZona);
         
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
                   <input type="text" className="form-control" placeholder="Zona" 
                    onChange={this.onInputChange}  name="zona" required/>
                   </div>
 
                    <div className="form-group">
                   <input type="text" className="form-control" placeholder="horas" 
                   onChange={this.onInputChange}  name="horas" required/>
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
 