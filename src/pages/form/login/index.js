import React, { Component } from 'react'

import { Alert, Row, Col, Card } from 'antd'

import Left from './left'
import Right from './right'
import TodoList from './todoList'

class LoginForm extends Component {
  render () {
    return (
      <div>
        <Alert message="Reflux Demo" type="success" style={{marginBottom: '20px'}} />
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Left">
              <Left />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Right">
              <Right />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="TodoList">
              <TodoList />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LoginForm
