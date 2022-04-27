import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

 class ListCustomers extends React.Component{
   constructor(props){
     super(props)

     this.state = {
       customers:[],
       id:""
     }
   }

  componentDidMount(){
    axios.get('/customer').then((res)=>{
      this.setState({customers:res.data})
    });
  }

  deleteRow(id, e){  
    const customers = this.state.customers.filter(item => item.id !== id); 
    axios.delete(`/customer/${id}`)
    .then(res => {  
      console.log(res);  
      console.log(res.data);  
       
      this.setState({ customers });  
    }) 
  } 

  render() {
    return (
      <div>
        <h2>Customers List</h2>
        <div>
          <Link to="/add-customer">Add Customer</Link>
        </div>
        <div>
          <table className="table table-striped table-dark">
             <thead>
               <tr>
                 <td>Customer id</td>
                 <td>Customer First Name</td>
                 <td>Customer Last Name</td>
                 <td>Customer Email</td>
                 <td>Action</td>
               </tr>
             </thead>
             <tbody>
               {
                 this.state.customers.map(
                   customer =>
                   <tr>
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>          this.deleteRow(customer.id, e)}>Delete</button>
                    </td>
                   </tr>
                 )
               }
             </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default ListCustomers;
