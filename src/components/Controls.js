import React, { Component } from 'react';
import Sort from './Sort';
import Search from './Search';

class Controls extends Component {
  render() {
    return (
        <div className="row mt-3">
            {/* Search */}
            <Search />

            {/* Sort */}
            <Sort />
        </div>
      );
  }
}

export default Controls;