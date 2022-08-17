import React, { Component } from 'react'

import { Card } from 'antd'

class right extends Component {
  render () {
    const {content} = this.props
    return (
      <div>
        <Card title="right">
          <p>来自组件Left： {content}</p>
        </Card>
      </div>
    )
  }
}

export default right
