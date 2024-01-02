import React, { Component } from 'react'

export default class Counter extends Component {
constructor(props){
  super(props)
  this.state={
    seconds:0
  }
}
componentDidMount(){
  setInterval(() => {
    this.setState({seconds:this.state.seconds+1})
  }, 1000);
}

  render() {
    return (
      <div>
        <h4>this Component has been rendred for {this.state.seconds} seconds</h4>
      </div>
    )
  }
}
