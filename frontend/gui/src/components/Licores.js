import React, { Component } from 'react'
import axios from 'axios';

export default class Productos extends Component
{
    state = {

        persons:[]

    }


    async componentDidMount(){

       const res= await axios.get('http://127.0.0.1:8000/aplicacion/').then(res=>{
        console.log(res);
        
        this.setState({persons:res.data});

})
    }



  render(){


    return(
        
           

                

                    <h1>Licores</h1>
           
        
    )

  }
}