import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ListCustomers from './ListCustomers';
class UserSignUpPage extends React.Component {

    state = {
        username:null,
        password:null
    }
    onChange = event =>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    onClickSignUp = event =>{
        event.preventDefault();

        const body = {
            username : this.state.username,
            password:this.state.password
        }
        axios.post('/auth/login',body)
        .then(result =>{
            localStorage.setItem("tokenKey",result.message);
            localStorage.setItem("currentUser",result.id);
            localStorage.setItem("username",this.state.username);
        } );
    }
    
    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.onChange}/>
                </div>
                <button onClick={this.onClickSignUp}>Sign Up</button>

            </form>
        );
    }
}
export default UserSignUpPage;
