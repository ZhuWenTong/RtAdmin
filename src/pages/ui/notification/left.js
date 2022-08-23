import React, { Component } from 'react'

import { Input, Card } from 'antd'

class left extends Component {
  setContent = (value) => {
    this.props.changeContent(value)
  }
  render () {
    let { content } = this.props
    return (
      <div>
        <Card title="left">
          <Input value={content} onChange={e => this.setContent(e.target.value)} />
        </Card>
      </div>
    )
  }
}

export default left
