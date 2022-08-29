import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import todoListStore from '../../../reflux/todoList/store'
import todoListAction from '../../../reflux/todoList/action'

import { Button, Input, message } from 'antd'
import TodoItem from './todoItem'

class TodoList extends Component {
  state = {
    todoStore: {
      listData: []
    },
    content: ''
  }
  componentDidMount () {
    todoListAction.getTodoList()
  }
  setContent = (content) => {
    this.setState({
      content
    })
  }
  addItem = () => {
    let { content, todoStore } = this.state
    if (!content) {
      message.warning('请输入内容')
      return
    }
    let idx = todoStore.listData.findIndex(i => i.content === content)
    if (idx !== -1) {
      message.warning(`TodoList中已存在[${content}]，请勿重复添加！`)
      return
    }
    todoListAction.addItem({
      content
    })
    this.setState({
      content: ''
    })
  }
  delItem = (index) => {
    todoListAction.delItem(index)
  }
  renderListItem = () => {
    let { listData } = this.state.todoStore
    return listData.map((i, index) => {
      return (
        <TodoItem key={index} itemData={i} index={index} handleDel={this.delItem} showDel={true} />
      )
    })
  }
  render () {
    return (
      <div>
        <Input.Group compact className="add-act">
          <Input style={{width: '200px'}} value={this.state.content} onChange={e => this.setContent(e.target.value)} />
          <Button type="primary" onClick={this.addItem}>新增</Button>
        </Input.Group>
        <div className='todo-list'>{this.renderListItem()}</div>
      </div>
    )
  }
}

ReactMixin.onClass(TodoList, Reflux.connect(todoListStore, 'todoStore'))

export default TodoList
