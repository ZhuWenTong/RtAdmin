import React, { Component } from 'react'

import { Card, Input } from 'antd'

class right extends Component {
  setContent = (value) => {
    this.props.changeContent(value)
  }
  render () {
    const {content} = this.props
    return (
      <div>
        <Card title="right">
          <Input value={content} onChange={e => this.setContent(e.target.value)} />
        </Card>
      </div>
    )
  }
}

export default right
