import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (    
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" >
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search's keywords"  />
                <div className="input-group-append">
                    <button className="btn btn-info" type="button" id="button-addon2"><i className="fas fa-search"></i> Search</button>
                </div>
            </div>
        </div>            
      );
  }
}

export default Search;