import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (    
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort 
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item"><i className="fas fa-sort-alpha-down mr-2"></i> Task A-Z <i className="fas fa-check ml-5"></i></a>
                    <a className="dropdown-item"><i className="fas fa-sort-alpha-down-alt mr-2"></i> Task Z-A</a>                  
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Activated Status</a>
                    <a className="dropdown-item">Hidden Status</a>
                </div>
            </div>
        </div>
      );
  }
}

export default Sort;