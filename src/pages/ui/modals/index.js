import React, { Component } from 'react'

import { Row, Col, Card } from 'antd'

import TodoList from './todolist'

class modals extends Component {
  componentDidMount () {
    const { search, state } = this.props.location
    if (search) {
      console.log('地址栏参数', search)
    }
    if (state) {
      console.log('刷新即无：', state)
    }
  }
  
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="TodoList">
              <TodoList />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default modals
