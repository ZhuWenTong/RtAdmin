import React, { Component } from 'react'

import { Col, Row } from 'antd';

import Left from './left'
import Right from './right'

class notification extends Component {
  constructor () {
    super()
    this.state = {
      content: '666'
    }
  }
  changeContent = (data) => {
    this.setState({
      content: data
    })
  }
  render () {
    return (
      <div>
        <Row>我是公共父组件: {this.state.content}</Row>
        <Row gutter={16}>
          <Col span={6}>
            <Left content={this.state.content} changeContent={this.changeContent} />
          </Col>
          <Col span={6}>
            <Right content={this.state.content} changeContent={this.changeContent} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default notification
