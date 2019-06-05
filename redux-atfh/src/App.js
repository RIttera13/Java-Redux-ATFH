import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Contractors from "./components/Contractors"
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddContractor from "./components/Contractors/AddContractor";
import UpdateContractor from "./components/Contractors/UpdateContractor";
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path ="/" component={Contractors} />
          <Route exact path ="/Contractors" component={Contractors} />
          <Route exact path ="/addContractor" component={AddContractor} />
          <Route exact path ="/updateContractor/:contractor_id" component={UpdateContractor} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
