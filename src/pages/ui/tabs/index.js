import React, { Component } from 'react'

import { Col, Row } from 'antd';

import Left from './left'
import Right from './right'

class Tabs extends Component {
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <Left />
          </Col>
          <Col span={6}>
            <Right />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tabs
