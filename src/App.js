import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Controls from './components/Controls';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
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

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onCloseForm = () => {
    //console.log('you closed form');
    this.setState({ isDisplayForm: false });
  }

  render() {
    var { tasks, isDisplayForm } = this.state // ~ var tasks = this.state.tasks;
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm = { this.onCloseForm } /> : '';
    return (
      <div className="container">
        <div className="mt-2">
          <h1 className="text-center">To-do List</h1>
          <hr/>
        </div>
        <div className="row">
          {/* Form */}
          <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
            { elmTaskForm }
          </div>
          <div className={isDisplayForm ? "col-lg-8 col-md-8 col-xs-12 col-sm-12" : "col-lg-12 col-md-12 col-xs-12 col-sm-12"} >
            <button className="btn btn-info" onClick={this.onToggleForm}>
              <i className="fas fa-plus"></i> Create new task
            </button>
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
