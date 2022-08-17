import React, { Component } from 'react'

import { Input, Button, message, Card } from 'antd'

class left extends Component {
  state = {
    content: ''
  }
  componentDidMount () {
    let { content } = this.props
    this.setState({
      content
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
    let { changeContent } = this.props
    changeContent(this.state.content)
  }
  render () {
    return (
      <div>
        <Card title="left">
          <Input.Group compact className="add-act">
            <Input style={{width: '200px'}} value={this.state.content} onChange={e => this.setContent(e.target.value)} />
            <Button type="primary" onClick={this.submit}>Submit</Button>
          </Input.Group>
        </Card>
      </div>
    )
  }
}

export default left
