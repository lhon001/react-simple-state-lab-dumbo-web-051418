import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {

  counter = 0

  genRow = (vals) => (
    vals.map(val => {
      // this.counter += 1
      return <Cell key={this.counter++} value={val}/>
      // <div className="cell"></div>
    }) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals) => {
      return <div className="row">{this.genRow(rowVals)}</div>
    })
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

  Matrix.defaultProps = {
    values: [
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
      ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00']
    ]
}
