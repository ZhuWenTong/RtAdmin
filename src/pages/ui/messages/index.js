import React, { Component } from 'react'

import { Col, Row } from 'antd';

import A from './a'
import B from './b'

class Messages extends Component {
  state = {}
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <A />
          </Col>
          <Col span={6}>
            <B />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Messages
