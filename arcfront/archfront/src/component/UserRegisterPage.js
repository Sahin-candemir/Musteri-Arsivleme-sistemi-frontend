import React from 'react'
import axios from 'axios';
class UserRegisterPage extends React.Component {
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

    onClickSignIn = event =>{
        event.preventDefault();

        const body = {
            username : this.state.username,
            password:this.state.password
        }
        axios.post('/auth/register',body)
    }
    
    render() {
        return (
            <form>
                <h1>Sign In</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.onChange}/>
                </div>
                <button onClick={this.onClickSignIn}>Sign In</button>
            </form>
        );
    }
}
export default UserRegisterPage;