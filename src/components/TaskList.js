import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    var { tasks } = this.props; // ~ var tasks = this.props.tasks
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem key= {task.id} index = {index} task={task} />
    });

    return (     
        <table class="table table-bordered table-hover">
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
                        <input type="text" className="form-control" name="filterName" />
                    </td>
                    <td>
                        <select className="form-control" name="filterStatus">
                            <option value='-1'>All</option>
                            <option value='0'>Hidden</option>
                            <option value='1'>Activated</option>
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

export default TaskList;