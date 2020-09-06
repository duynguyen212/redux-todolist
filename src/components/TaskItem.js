import React, { Component } from 'react';

class TaskItem extends Component { 
  render() {
    var { task, index } = this.props;
    return (
        <tr>
            <td> { index + 1 } </td>
            <td>{ task.name }</td>
            <td className="text-center">
              <span className = { task.status ? "badge badge-success" : "badge badge-warning" }>
                {task.status ? "Done" : "Waiting"}
              </span>  
            </td>
            <td className="text-center">
              <button className="btn btn-info"> <i class="fas fa-edit"> </i> </button> {"  "}
              <button className="btn btn-danger"> <i class="fas fa-trash"> </i> </button> {"  "}
            </td>
        </tr>
      );
  }
}

export default TaskItem;