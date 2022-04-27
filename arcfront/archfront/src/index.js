import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./bootstrap-override.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import UserSignUpPage from './component/UserSignUpPage';
import CreateCustomer from './component/CreateCustomer';
import ListCustomers from './component/ListCustomers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<ListCustomers/>}/>
      <Route path={'/add-customer'} element={<CreateCustomer/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
