import './App.css';
import Routes from "./Routes";

import React from "react";

import Footer from './containers/Footer';
import Header from './containers/Header';


function App() {
  return (
    <div className="App container py-3">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
