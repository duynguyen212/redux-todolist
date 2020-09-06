import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Controls from './components/Controls';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  
  componentWillMount(){
    //console.log('component will mount');
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({tasks: tasks});
    }
  }

  onGenerateData = () => {
    //console.log('generate');
    //id: unique, name, status
    var tasks = [
      {
        id: this.generateIdString(),
        name: 'Learn React JS',
        status: true
      },
      {
        id: this.generateIdString(),
        name: 'Play PUBG',
        status: false
      },
      {
        id: this.generateIdString(),
        name: 'Learn Node JS',
        status: false
      },
      {
        id: this.generateIdString(),
        name: 'Play football',
        status: true
      }
    ];
    this.setState({tasks: tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log(tasks);
  }
 

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(4);
  }

  generateIdString() {
    return this.s4() + '-' + this.s4() + 'x' + this.s4() + this.s4();
  }

  render() {
    var { tasks } = this.state // ~ var tasks = this.state.tasks;
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
            <button className="btn btn-warning ml-2" onClick = {this.onGenerateData}> Generate Data</button>
            {/* Search & Sort */}                        
            <Controls />
  
            {/* Task(s) List */}
            <div className="row mt-3">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <TaskList tasks = { tasks } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
