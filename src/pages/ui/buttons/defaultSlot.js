import React, { Component } from 'react'

class slotDemo extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default slotDemo