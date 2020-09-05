import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mt-2">
        <h1 className="text-center">To-do List</h1>
        <hr/>
      </div>
      <div className="row">
        {/* Form */}
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
          Form
        </div>
        <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
          CRUD
        </div>
      </div>
    </div>
  );
}

export default App;
