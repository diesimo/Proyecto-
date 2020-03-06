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
        edit:false,
        id:'',
        provedor:'',
        probar:'',
        
       


    }





    onSubmit = async (e) => {
      
        
        //console.log(this.state.probar)
        e.preventDefault();
        await this.funcionprovedor(this.state.proveSelec)
        
        console.log(this.state.provedor)
        
        const newProduc = {
            nom_pro: this.state.nombre,
            descripcion: this.state.descripcion,
            costo: this.state.costo,
            tipo_pro: this.state.tipo,
            stock:this.state.stock,
            id_prove:this.state.provedor,
            
           
        };
        if(this.state.edit)
        {
            await Axios.put('http://127.0.0.1:8000/aplicacionProductos/' + this.state.id +'/', newProduc);

        }else{
             await Axios.post('http://127.0.0.1:8000/aplicacionProductos/', newProduc);


        }
       
        console.log(this.funcionprovedor(this.state.proveSelec), this.state.descripcion, this.state.costo, this.state.tipo, this.state.stock, this.state.proveSelec)
        

     
    }


    async  componentDidMount()
    {
        console.log(this.props.match.params.id)
       const res= await Axios.get('http://127.0.0.1:8000/aplicacionProveedores/');
        
        this.setState({prove:res.data})
        if(this.props.match.params.id)
        {

            this.setState({
                edit:true,
                id:this.props.match.params.id
            
            
            })
            

        }

    }

   
     onInputChange = e =>{
       
        
        
        
      //  console.log(e.target.name, e.target.value)
        this.setState({  [e.target.name]: e.target.value })
        var input = document.getElementById('input');
      
     
     
       
       

    }

    cambiar(){
        var t=1; 

        this.setState({
               
            probar:1+t
           })
    }

   

  async  funcionprovedor(nombre='') 
    {
        const v= this.state.prove.map(prov=>prov.nom_prove)
        const k=this.state.prove.map(prov=>prov.id_prove)
      
            for(let i=0; i<v.length;i++)
            {   
                    if(nombre==v[i])
                    {  
                      console.log(v[i])
                        
                       
                    
                      
                         this.setState({
                            
                         provedor:k[i]
                        })
                       
                    }

            }
          
    }


    funcionlicores()
    {
        var input = document.getElementById('input');
      
      
     
      
            
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
                                            

                                            prove.nom_prove
                                            
                                     }                                
                                        
                                     </option>)
                                }

                               
                             </select>

                    </div>
                

                    <div className="form-group">
                         <select   className="form-control" 
                            name="tipo" onChange={this.onInputChange} >

                            
                            <option>Bebida</option>
                            <option id="licor">Licor</option>
                            <option>Dulce</option>
                          
                             </select>
                             <div onChange={this.funcionlicores}></div>


                    </div>
                    
                   

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Descripcion"
                            onChange={this.onInputChange} name="descripcion" required id="input"  />
                    </div>


                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Costo"
                            onChange={this.onInputChange} name="costo" required />
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
