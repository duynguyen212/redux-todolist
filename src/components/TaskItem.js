import React, { Component } from 'react';

class TaskItem extends Component { 
  onUpdateStatus = () => {
    //console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  }

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  }

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  }

  render() {
    var { task, index } = this.props;
    return (
        <tr  className="text-center">
            <td> { index + 1 } </td>
            <td  className="text-left">{ task.name }</td>
            <td>
              <span id="task-status" className = { task.status ? "badge badge-success" : "badge badge-warning" }
                    onClick = { this.onUpdateStatus }>
                {task.status ? "Done" : "Waiting"}
              </span>  
            </td>
            <td>
              <button className="btn btn-info" onClick = {this.onUpdate}> <i className="fas fa-edit"> </i> </button> {"  "}
              <button className="btn btn-danger" onClick = {this.onDelete}> <i className="fas fa-trash"> </i> </button> {"  "}
            </td>
        </tr>
      );
  }
}

export default TaskItem;