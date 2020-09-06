import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Controls from './components/Controls';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-2">
          <h1 className="text-center">To-do List</h1>
          <hr/>
        </div>
        <div className="row">
          {/* Form */}
          <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
            <TaskForm />
          </div>
          <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
            <button className="btn btn-info"><i className="fas fa-plus"></i> Create new task</button>
  
            {/* Search & Sort */}                        
            <Controls />
  
            {/* Task(s) List */}
            <div class="row mt-3">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
