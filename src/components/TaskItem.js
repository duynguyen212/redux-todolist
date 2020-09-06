import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    return (
        <tr>
            <td>1</td>
            <td>Hoc React JS</td>
            <td className="text-center"><span className="badge badge-success">Activated</span>  </td>
            <td></td>
        </tr>
      );
  }
}

export default TaskItem;