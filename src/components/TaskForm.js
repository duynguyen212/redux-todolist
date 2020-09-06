import React, { Component } from 'react';

class TaskForm extends Component {
  render() {
    return (
        <div className="card border-warning mb-3">
            <div className="card-header bg-warning">
                <h5>
                    New task
                    <span className="float-right"><i className="far fa-times-circle"></i></span>
                </h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="txtTask">Task</label>
                        <input type="text" name="txtTask" id="txtTask" className="form-control"  />                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="sltStatus">Status</label>
                        <select className="form-control" name="sltStatus" id="sltStatus" defaultValue='hidden'>
                            <option value='active'>Active</option>
                            <option value='hidden'>Hidden</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning"><i className="far fa-save"></i> Save</button> &nbsp;
                        <button type="reset" className="btn btn-light"><i class="fas fa-times"></i> Cancel</button>
                    </div>
                </form>
            </div>
        </div>  
      );
  }
}

export default TaskForm;
