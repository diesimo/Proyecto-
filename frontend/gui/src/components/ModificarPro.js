import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


  
export default class ModificarPro extends Component {

    state={

        produc:[]
    
    
    }
    

    async componentDidMount()
    {
      
       this.getProduc();
    
    
    }

    async getProduc()
    {
    
        const res= await axios.get('http://127.0.0.1:8000/aplicacionProductos/')
        console.log(res)
        this.setState({produc:res.data})
    
    
    }

    functionretornar() {

 
    for(let i=0;i<this.state.produc.length;i++)
    {

    }
    
}




    render() {
  
      return (
        
       <div>
           <h1>Tabla de Productos</h1>
        <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre de Producto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Costo</th>
            <th scope="col">Tipo de Producto</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
        {this.state.produc.map(produ=>(
            
          <tr key={produ.id_pro}>
            <th scope="row">{produ.id_pro}</th>
         <th>{produ.nom_pro}</th>
            <td>{produ.descripcion}</td>
            <td>{produ.costo}</td>
            <td>{produ.tipo_pro}</td>
            <td  >{produ.costo}</td>
            <Link className="btn btn-success mr-1"
             role="butto" to={"/edit/" + produ.id_pro}>Edit</Link>
          </tr>
        ))
          }
         
        </tbody>  
      </table>
   </div>
      )

    }
  
  
  
  
  }



     