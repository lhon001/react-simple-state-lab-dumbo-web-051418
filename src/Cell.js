import React from 'react'

export default class Cell extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     color: props
  //   }
  // }
  state = {color: this.props.value}

  changeColor = () => {
    // console.log(this.props);
    // console.log(this.state.color.value)
    this.setState({
      color: "#333"
    })
  }

  render(){
    // console.log(this.props);
    return(
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}></div>
    )
  }
}
