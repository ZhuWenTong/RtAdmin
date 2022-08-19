import React, { Component } from 'react'

import { Row, Col } from 'antd'
import Pie from './pie'
import Line from './line'
import Bar from './bar'

class carousel extends Component {
  state = {

  }
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Pie />
          </Col>
          <Col span={8}>
            <Line />
          </Col>
          <Col span={8}>
            <Bar />
          </Col>
        </Row>
      </div>
    )
  }
}

export default carousel
