import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //-1: all, 1:done, 0: waiting            
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );

        this.setState({
            [name] : value
        });

        //console.log(this.state);
    }

  render() {
    var { tasks } = this.props; // ~ var tasks = this.props.tasks
    var { filterName, filterStatus } = this.state;

    var elmTasks = tasks.map((task, index) => {
        return <TaskItem key= {task.id} index = {index} task={task} 
        onUpdateStatus = {this.props.onUpdateStatus} 
        onUpdate = {this.props.onUpdate} 
        onDelete = {this.props.onDelete} />
    });

    return (     
        <table className="table table-bordered table-hover">
            <thead>
                <tr className="text-center">
                    <th>No</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" name="filterName" 
                            value= { filterName } onChange = { this.onChange } />
                    </td>
                    <td>
                        <select className="form-control" name="filterStatus"
                            value= { filterStatus } onChange = { this.onChange } >
                            <option value={-1}>All</option>
                            <option value={0}>Waiting</option>
                            <option value={1}>Done</option>
                        </select>
                    </td>
                    <td></td>
                </tr>

                { elmTasks} 

            </tbody>
        </table>
      );
  }
}

const mapStateToProps = (state) => {
    return { 
        tasks: state.tasks        
    }
}

export default connect(mapStateToProps, null)(TaskList);