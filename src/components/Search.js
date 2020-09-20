import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ''
    };
    
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
  }

  onSearch = () => {
    //console.log(this.state);
    this.props.onSearch(this.state.keyword);
  }

  render() {
    var { keyword } = this.state;
    return (    
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" >
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search's keywords" name="keyword"
                        onChange = { this.onChange } value = { keyword } />
                <div className="input-group-append">
                    <button className="btn btn-info" type="button" id="button-addon2" 
                      onClick = { this.onSearch }>
                      <i className="fas fa-search"></i> Search
                    </button>
                </div>
            </div>
        </div>            
      );
  }
}

export default Search;