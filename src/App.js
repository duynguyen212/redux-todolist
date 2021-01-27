import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Controls from './components/Controls';
import TaskList from './components/TaskList';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      isDisplayForm: false,
      taskEditting: null,
      filter : {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1      
    };
  }
  
  onToggleForm = () => {
    if(this.state.isDisplayForm && this.state.taskEditting) {
      this.setState({
        isDisplayForm: true,
        taskEditting: null
      });
    } 
    else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditting: null
      });
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false, taskEditting: null
    });
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  onSubmit = (data) => {
    //console.log(data);
    var { tasks } = this.state;
    if(data.id === '') {
      //new task
      data.id = this.generateIdString();
      tasks.push(data);
    } 
    else {
      //editting
      var index = this.findTaskById(data.id);
      tasks[index] = data;      
    }
    
    this.setState({ tasks : tasks, taskEditting: null });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    //console.log(id);
    var {tasks} = this.state;
    //var index = this.findTaskById(id);
    var index = _.findIndex(tasks, (task) => {
      return task.id === id;
    });

    if(index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({tasks : tasks});
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  findTaskById = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        return result = index;
      }
    });
    return result;
  }

  onUpdate = (id) => {
    //console.log(id);
    var {tasks} = this.state;
    var index = this.findTaskById(id);
    var taskEditting = tasks[index];
    this.setState({ taskEditting: taskEditting    });
    //console.log(taskEditting);
    this.onShowForm();
  }

  onDelete = (id) => {
    console.log(id);
    var {tasks} = this.state;
    var index = this.findTaskById(id);
    if(index !== -1) {
      tasks.splice(index, 1);
      this.setState({tasks : tasks});
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }

  onFilter = (filerName, filterStatus) => {
    //console.log(filerName, '---', filterStatus );
    filterStatus = parseInt(filterStatus);
    //console.log(typeof filterStatus);
    this.setState({
      filter: {
        name: filerName.toLowerCase(),
        status: filterStatus
      }      
    });
  }

  onSearch = (keyword) => {
    //console.log(keyword);
    this.setState({keyword: keyword});
  }

  onSort = (sortBy, sortValue) => {
    //console.log(sortBy, '-', sortValue);
    this.setState({
      sortBy: sortBy, 
      sortValue: sortValue
    });
  }

  render() {
    var {  isDisplayForm, taskEditting, filter, keyword, 
      sortBy, sortValue  } = this.state; // ~ var tasks = this.state.tasks;
    /** Filter */
  /* 26/01/2021
    console.log(filter);
    if(filter) {
      if(filter.name){
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if(filter.status === -1) {
          return task;
        } 
        else {
          return task.status === (filter.status === 1 ? true: false);
        }
      });      
    }
    */
    /**  Search */
    /* 26/01/2021
    tasks = _.filter(tasks, (task) => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    */
    // if(keyword) {
    //   // tasks = tasks.filter((task) => {
    //   //   return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   // });
    //   tasks = filter((task)=> {
    //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    //   });

    // }
/* 26/01/2021
    if(sortBy === 'name') {
      tasks.sort((a, b) => {
        if(a.name > b.name) return sortValue;
        else if(a.name < b.name) return -sortValue;
        else return 0;
      });
    } 
    else {
      tasks.sort((a, b) => {
        if(a.status > b.status) return -sortValue;
        else if(a.status < b.status) return sortValue;
        else return 0;
      });
    }
 */   
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm = {this.onCloseForm} 
                                        onSubmit = { this.onSubmit }
                                        task = { taskEditting } /> : '';
                                        
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
          <div className={ isDisplayForm ? "col-lg-8 col-md-8 col-xs-12 col-sm-12" : "col-lg-12 col-md-12 col-xs-12 col-sm-12" } >
            <button className="btn btn-info" onClick = {this.onToggleForm}>
              <i className="fas fa-plus"></i> Create new task
            </button>
           
            {/* Search & Sort */}                        
            <Controls onSearch = { this.onSearch } 
                      onSort = {this.onSort} 
                      sortBy = {sortBy}
                      sortValue = {sortValue} />
  
            {/* Task(s) List */}
            <div className="row mt-3">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <TaskList onUpdateStatus = {this.onUpdateStatus} 
                          onUpdate = {this.onUpdate} onDelete = {this.onDelete} 
                          onFilter = { this.onFilter } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;