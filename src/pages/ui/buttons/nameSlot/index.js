import React, { Component } from 'react'

class nameSlot extends Component {
  render () {
    return (
      <div>
        <div>{ this.props.header }</div>
        <div>{ this.props.content }</div>
        <div>{ this.props.footer }</div>
      </div>
    )
  }
}

export default nameSlot
