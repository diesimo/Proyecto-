import React, { Component } from 'react'
import Axios from 'axios'


  
export default class Login extends Component {


    state={

        users:[],
        email:'',
        var:'',
    
       }



    async componentDidMount(){


        const res = await Axios.get('http://127.0.0.1:8000/aplicacionUsuarios/');
        this.setState({users:res.data})
    
    
    
    }

    verificar(){

        for(var i=0;i>=this.state.users.length;i++)
        {

            if(this.state.users.email==this.state.email)
            {
                return true;

            }else
            {

                return false;

            }

        }


    }




    render() {
      return (
       
        
        <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" name="email" placeholder="email"/>
                            
                        </div>

                    

                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="password"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" value="Loginsss" className="btn float-right login_btn"/>
                        </div>
                       
                    </form>
                    <div className="col-md-8"  div> 

                   


                    this.state.users.map(users =><div>

                        {users.nombre}
                    </div>)
                    }


                
                    </div>  
               

        

                    
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<a href="#">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    
    </div>

   
      )
   console.log(this.verificar())
  
    }
  
  
  
  
  }



     