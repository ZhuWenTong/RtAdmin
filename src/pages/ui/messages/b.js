import React, { Component } from 'react'

import { Input, Button, message, Card } from 'antd'

import emitter from '../../../eventBus/index'

class B extends Component {
  state = {
    content: ''
  }
  componentDidMount () {
    this.eventEmitter = emitter.addListener('changeBContent', content => {
      this.setState({
        content
      })
    })
  }
  setContent = (value) => {
    this.setState({
      content: value
    })
  }
  submit = () => {
    if (!this.state.content) {
      message.warning('请输入内容')
      return
    }
    emitter.emit('changeAContent', this.state.content)
  }
  render () {
    return (
      <div>
        <Card title="B">
          <Input.Group compact className="add-act">
            <Input style={{width: '200px'}} value={this.state.content} onChange={e => this.setContent(e.target.value)} />
            <Button type="primary" onClick={this.submit}>Submit</Button>
          </Input.Group>
        </Card>
      </div>
    )
  }
}

export default B
