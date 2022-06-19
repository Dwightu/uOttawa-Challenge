import './App.css';
import Routes from "./Routes";

import React from "react";

import Header from './containers/layout/Header';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App container py-3">
      <Header />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
