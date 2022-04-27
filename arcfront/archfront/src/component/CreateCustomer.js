import React from "react";
import axios from "axios";
class CreateCustomer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    saveCustomer = (e) => {
        e.preventDefault();
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        axios.post('/customer', body)
        .catch((err)=> alert("kayıt basarısız"))
        
        this.setState({ firstName:"" });
        this.setState({ lastName: ""});
        this.setState({ email: ""});
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">Add Customer</h1>

                    <div className="form-group">
                        <label>First Name :</label>
                        <input className="form-control" name='firstName' value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name :</label>
                        <input className="form-control" name='lastName' value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                    </div>

                    <div className="form-group">
                        <label>Email Adress:</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" name='email' value={this.state.email} onChange={this.changeEmailHandler}></input>
                    </div>

                    <button className="btn btn-primary" onClick={this.saveCustomer}>Save</button>
                </form>
            </div>
        )
    }
}
export default CreateCustomer;