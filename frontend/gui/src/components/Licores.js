import React, { Component } from 'react'
import axios from 'axios';

export default class Productos extends Component
{
    state = {

        users:[]

    }


    async componentDidMount(){
// "await" provoca  que la ejecucion de una funcion async sea pausada hasat que un valor 
/// sea terminada o reachazada, y regrese a la ejecucion
       const res= await axios.get('http://127.0.0.1:8000/aplicacionCliente/').then(res=>{
        console.log(res);
        
        this.setState({users:res.data});

})
    }



  render(){


    return(
        
                

      <div className ='row'> 
              <div className="col-md-4">


              </div>
          <div className="col-md-8">

            <ul className="list-group">  
            {


              this.state.users.map(users =><li className='list-group-item list-group-item-action' key={users.id_cliente}>

                {users.nombre}
              </li>)
            }
            
            
            </ul>
          </div>


      </div>
           
    )

  }
}