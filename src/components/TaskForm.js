import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    onCloseForm = () => {
        //console.log('clicked me');
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status') {
            value = target.value === 'true' ? true: false;
        }

        this.setState({
            [name]: value
        });
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.onSubmit(this.state); 

        /* Reset form & close form */
        this.onResetForm();
        this.onCloseForm();
    }

    onResetForm = () => {
        this.setState({
            name: '',
            status: false,            
        });
        //clode form
        this.onCloseForm();
    }

    componentWillMount() {
        if(this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        if(nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        } 
        else if (!nextProps.task){
            //console.log('editting -> new task');
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

  render() {
    var { id } = this.state;

    return (
        <div className="card border-warning mb-3">
            <div className="card-header bg-warning">
                <h5>
                    { id !== '' ? 'Update task' : 'New task'}
                    <span className="float-right" onClick = {this.onCloseForm} id="close-form">
                        <i id="close-form-icon" className="far fa-times-circle"></i>
                    </span>
                </h5>
            </div>
            <div className="card-body">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Task</label>
                        <input type="text" name="name" id="name" className="form-control" 
                            value = {this.state.name} onChange = {this.onChange}
                        />                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select className="form-control" name="status" id="status" 
                            value = {this.state.status} onChange = {this.onChange}>
                            <option value={true}>Done</option>
                            <option value={false}>Waiting</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning"><i className="far fa-save"></i> Save</button> &nbsp;
                        <button type="reset" className="btn btn-light"
                            onClick = {this.onResetForm}>
                            <i className="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>  
      );
  }
}

export default TaskForm;