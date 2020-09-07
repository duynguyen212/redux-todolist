import React, { Component } from 'react';

class TaskItem extends Component { 
  render() {
    var { task, index } = this.props;
    return (
        <tr  className="text-center">
            <td> { index + 1 } </td>
            <td  className="text-left">{ task.name }</td>
            <td>
              <span className = { task.status ? "badge badge-success" : "badge badge-warning" }>
                {task.status ? "Done" : "Waiting"}
              </span>  
            </td>
            <td>
              <button className="btn btn-info"> <i className="fas fa-edit"> </i> </button> {"  "}
              <button className="btn btn-danger"> <i className="fas fa-trash"> </i> </button> {"  "}
            </td>
        </tr>
      );
  }
}

export default TaskItem;