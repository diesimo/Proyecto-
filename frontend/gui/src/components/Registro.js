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
    fecha:'',
    tlf:'',
    membresia:false,

    zonas:[],
    zonaSelect:'',
    

   }


 
   
   
    onSubmit= async(e)=> {
        console.log(this.state)
        e.preventDefault();
const newUser= {
            

            nombre: this.state.nombre,
            apellido: this.state.apellido,
            cedula: this.state.cedula,
            email: this.state.email,
            fecha: this.state.fecha,
            tlf: this.state.tlf,
            membresia: this.state.membresia,
            zona1:this.state.zonaSelect,
           
            
            


        };
        console.log(this.state.nombre, this.state.fecha, this.state.zonaSelect)
      const res= await Axios.post('http://127.0.0.1:8000/aplicacionCliente/', newUser);
        
//console.log(res)
    }


  async  componentDidMount()
    {
       const res= await Axios.get('http://127.0.0.1:8000/aplicacionesZonas/');

        this.setState({zonas:res.data})


    }
    
    onChangeDate= fecha =>{

        this.setState({fecha});


    }

    onInputChange = e =>{
        console.log(e.target.name, e.target.value)
        this.setState({  [e.target.name]: e.target.value })

    }

    cambiar(){

        if(this.state.membresia=="on")
        {
            return 'true'

        }else
        {
            return 'false'

        }



    }

    
    
    render() {

        

        return (
            <div className="col-md-6">

                <div className="card card-body"> <h4>Create User</h4>
                
        <div className="form-group">
            <select className="form-control" 
            name="zonaSelect" onChange={this.onInputChange}>

            {


                this.state.zonas.map(zonas=>
                <option key={zonas.id_zonas}>


                    {

                        zonas.id_zonas
                        
                    }
                </option>)
            }


            </select>


        </div>
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
                  <input type="checkbox"   value='true'className="form-control" placeholder="Membresia" 
                 onChange={this.onInputChange}  name="membresia"   required/> 
                 </div> 
            
                 <div className="form-group">
                  <input type="date" className="form-control" placeholder="Fecha de Nacimiento" 
                 onChange={this.onInputChange}  name='fecha'   required/> 
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