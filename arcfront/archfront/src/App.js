import './App.css';
import {BrowserRouter,Routes, Route,Navigate} from "react-router-dom";
import UserSignUpPage from './component/UserSignUpPage';
import ListCustomers from './component/ListCustomers';
import React from 'react';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        
        <Routes>
        <React.Fragment>
          <Route path="/" element={<UserSignUpPage/>} ></Route>
          


          <Route path="/listCustomers" element={<ListCustomers/>}></Route>
          <Route path="/listCustomers">
          {localStorage.getItem("currentUser") != null ? <Navigate to="/"/>:<UserSignUpPage/>}
          </Route>
          </React.Fragment>
          </Routes>
          
      </BrowserRouter>
      </div>
  );
}

export default App;