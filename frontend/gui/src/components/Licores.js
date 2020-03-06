import React, { Component } from 'react'
import axios from 'axios';

export default class Productos extends Component
{

  onSubmit= async(e)=> {
    console.log(this.state)
    e.preventDefault();
const newZona= {
        

        zona:this.state.zona,
        horas:this.state.horas,
     
    };
    console.log( this.state.zona)
  const res= await axios.post('http://127.0.0.1:8000/aplicacionesZonas/', newZona);
    
//console.log(res)
}
 

  render() {

    return (
      <div className="col-md-6 offset-md-3" >
        <div className="card card-body">
            <h4>Create Producto</h4>
            <form onSubmit={this.onSubmit}>

              <button type="submit" className='btn btn-primary'>

              save

              </button>



            </form>



        </div>

      </div>
  
    )
  }
}



