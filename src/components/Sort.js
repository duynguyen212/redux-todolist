import React, { Component } from 'react';

class Sort extends Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }
   
    onClick = (sortBy, sortValue) => {
        //console.log(sortBy, '-', sortValue);
        this.props.onSort(sortBy, sortValue);     
    }

  render() {    
    return (    
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort 
                </button>
                <div className="dropdown-menu"  id="dropdown-list">
                    <a className = {(this.props.sortBy === 'name' && this.props.sortValue === 1) ? "dropdown-item sort-actived" : "dropdown-item"} 
                        onClick = { () => this.onClick('name', 1) }>
                        <i className="fas fa-sort-alpha-down mr-2"></i> Task A-Z 
                    </a>
                    <a className= {(this.props.sortBy === 'name' && this.props.sortValue === -1) ? "dropdown-item sort-actived" : "dropdown-item"}
                        onClick = { () => this.onClick('name', -1) }>
                        <i className="fas fa-sort-alpha-down-alt mr-2"></i> Task Z-A
                    </a>                  
                    <div className="dropdown-divider"></div>
                    <a className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? "dropdown-item sort-actived" : "dropdown-item"}
                        onClick = { () => this.onClick('status', 1) }>Done</a>
                    <a className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? "dropdown-item sort-actived" : "dropdown-item"}
                        onClick = { () => this.onClick('status', -1) }>Waiting</a>
                </div>
            </div>
        </div>
      );
  }
}

export default Sort;