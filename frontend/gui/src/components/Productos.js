import React, { Component } from 'react'
import Axios from 'axios'

export default class Productos extends Component {

    state = {

        //propiedad


        nombre:'',
        descripcion:'',
        costo:'',
        tipo:'',
        stock:'',
        prove:[],
        proveSelec:'',
        
       


    }





    onSubmit = async (e) => {
        console.log(this.state)
        e.preventDefault();
        const newProduc = {

            nom_pro: this.state.nombre,
            descripcion: this.state.descripcion,
            costo: this.state.costo,
            tipo_pro: this.state.tipo,
            stock:this.state.stock,
            id_prove:this.state.proveSelec
           
        };
        console.log(this.state.nombre, this.state.descripcion, this.state.costo, this.state.tipo, this.state.stock, this.state.proveSelec)
        const res = await Axios.post('http://127.0.0.1:8000/aplicacionProductos/', newProduc);

        console.log(res)
    }


    async  componentDidMount()
    {
       const res= await Axios.get('http://127.0.0.1:8000/aplicacionProveedores/');

        this.setState({prove:res.data})


    }

   
    onInputChange = e =>{
        console.log(e.target.name, e.target.value)
        this.setState({  [e.target.name]: e.target.value })

    }

   



    render() {



        return (
            <div className="col-md-6">

                <div className="card card-body"> <h4>Create User</h4>

                   
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre del Producto"
                            name="nombre" onChange={this.onInputChange} required />
                    </div>

                    <div className="form-group">
                         <select className="form-control" 
                            name="proveSelec" onChange={this.onInputChange}>

                                {


                                    this.state.prove.map(prove=>
                                    <option key={prove.id_prove}>


                                        {

                                            prove.id_prove
                                            
                                        }
                                     </option>)
                                }


                             </select>


                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Descripcion"
                            onChange={this.onInputChange} name="descripcion" required />
                    </div>


                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Costo"
                            onChange={this.onInputChange} name="costo" required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tipo de Producto"
                            onChange={this.onInputChange} name="tipo" required />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Stock"
                            onChange={this.onInputChange} name="stock" required />
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
