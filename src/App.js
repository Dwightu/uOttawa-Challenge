import './App.css';
import Routes from "./Routes";

import React from "react";

import Footer from './containers/Footer';
import Header from './containers/Header';
import { MDBBtn } from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App container py-3">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
