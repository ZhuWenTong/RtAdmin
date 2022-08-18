import React, { Component } from 'react'

import { Row, Col, Button, Card } from 'antd'

import './index.less'

class gallery extends Component {
  state = {
    classFlag: false,
    styleFlag: false
  }
  changeClass = () => {
    let { classFlag } = this.state
    this.setState({
      classFlag: !classFlag
    })
  }
  changeStyle = () => {
    let { styleFlag } = this.state
    this.setState({
      styleFlag: !styleFlag
    })
  }
  render () {
    return (
      <div className='gallery'>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="改变className">
              <div className={`lang ${this.state.classFlag ? 'color' : ''}`}>千里之行，始于足下。——老子</div>
              <Button onClick={this.changeClass}>改变className</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="改变style">
              <div style={{fontSize: '16px', lineHeight: '40px', color: this.state.styleFlag ? '#f20d0d': ''}}>工欲善其事，必先利其器。——孔子</div>
              <Button onClick={this.changeStyle}>改变style</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default gallery
