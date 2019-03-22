import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       time:new Date().toLocaleTimeString()
    }
  }
  
  render() {
    const {time} = this.state
    return (
      <div>
        <h2>list of products {time}</h2>
      </div>
    )
  }
}
