import React, { Component } from 'react'

import { Row, Col, Card } from 'antd'
import RefluxData from './refluxData'

class Register extends Component {
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Reflux">
              <RefluxData />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Register
