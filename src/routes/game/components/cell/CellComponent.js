import React, { Component } from 'react';

class CellComponent extends Component {

  constructor () {
    super();
    this.state = {
      cell: null
    };
  }

  componentWillMount () {
    this.setState({
      cell: this.props.cell
    });
  }

  render () {
    return (
      <div> hello </div>
    );
  }
}

export default CellComponent;
