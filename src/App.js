import React from 'react'
import Users from "./user";
import "./App.css";
import  {Component} from "react";

class App extends Component{
    constructor(props){
    super(props);
    this.state = {user_data:[],loading: true };
    this.showUsers = this.showUsers.bind(this);
}

 showUsers(){
    document.getElementById("main").style.display = "flex";  
    const source="https://reqres.in/api/users?page=1";
    fetch(source)
    .then((response) =>response.json())
    .then((users) => {
        this.setState({users_data: users.data, loading: false});
    })
    .catch((error) =>{
        console.error(error);
    });      
    }
 
    render() {
      return(
        <>
        <nav id="col-sm-6 col-md-4">
            <ul>
                <li><h1 id="logo">Hyper.in</h1></li>
                <li><button onClick={this.showUsers}>Users</button></li>
            </ul>
            </nav>

            <Users loading={this.state.loading} users={this.state.users_data}/>
        </>
      );   
    }
}
export default App;