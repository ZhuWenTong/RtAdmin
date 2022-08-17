import React, { Component, Fragment } from "react";

import ListItem from './listItem'

import { Input, Button, message } from 'antd'

class todoList extends Component {
  constructor () {
    super()
    this.state = {
      content: '',
      listData: []
    }
    this.setContent = this.setContent.bind(this)
  }
  componentDidMount () {
    let listData = [{
      name: '北京',
      id: 1
    }, {
      name: '深圳',
      id: 2
    }]
    this.setState({
      listData
    })
  }
  setContent (content) {
    this.setState({
      content
    })
  }
  addItem = () => {
    let { content, listData } = this.state
    if (!content) {
      message.warning('请输入内容')
      return
    }
    let obj = {
      name: content,
      id: listData.length + 1
    }
    listData.push(obj)
    this.setState({
      listData,
      content: ''
    })
  }
  // index 来自于子组件传值
  handleDel = (index, itemData) => {
    console.log(index, itemData)
    let { listData } = this.state
    listData.splice(index, 1)
    this.setState({
      listData
    })
  }

  renderList = () => {
    return this.state.listData.map((i, index) => {
      return (
        <ListItem key={i.id} itemData={i} index={index} handleDeleteItem={this.handleDel} />
      )
    })
  }

  render () {
    return (
      <div>
        <div className="todo-list">
          <Input.Group compact className="add-act">
            <Input style={{width: '400px'}} value={this.state.content} onChange={e => this.setContent(e.target.value)} />
            <Button type="primary" onClick={this.addItem}>新增</Button>
          </Input.Group>
          <Fragment>{this.renderList()}</Fragment>
        </div>
      </div>
    )
  }
}

export default todoList