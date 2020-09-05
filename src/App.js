import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mt-2">
        <h1 className="text-center">To-do List</h1>
        <hr/>
      </div>
      <div className="row">
        {/* Form */}
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
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
        </div>
        <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
          <button className="btn btn-info"><i className="fas fa-plus"></i> Create new task</button>

          {/* Search & Sort */}
          <div className="row mt-3">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" >
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search's keywords"  />
                <div className="input-group-append">
                  <button className="btn btn-info" type="button" id="button-addon2"><i className="fas fa-search"></i> Search</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
              <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort 
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item"><i className="fas fa-sort-alpha-down mr-2"></i> Task A-Z <i className="fas fa-check ml-5"></i></a>
                  <a className="dropdown-item"><i class="fas fa-sort-alpha-down-alt mr-2"></i> Task Z-A</a>                  
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Activated Status</a>
                  <a className="dropdown-item">Hidden Status</a>
                </div>
              </div>
            </div>
          </div>

          {/* Task(s) List */}
          <div class="row mt-3">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr className="text-center">
                    <th>No</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <input type="text" className="form-control" name="filterName" />
                    </td>
                    <td>
                      <select className="form-control" name="filterStatus">
                        <option value='-1'>All</option>
                        <option value='0'>Hidden</option>
                        <option value='1'>Activated</option>
                      </select>
                    </td>
                    <td></td>
                  </tr>                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
