import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import testStore from '../../../reflux/demo/store'
import demoAction from '../../../reflux/demo/action'

import todoListStore from '../../../reflux/todoList/store'
import todoListAction from '../../../reflux/todoList/action'

import { Button } from 'antd'
import TodoItem from './todoItem'

class Left extends Component {
  state = {
    demoStore: {
      count: null,
      name: ''
    },
    todoStore: {
      listData: []
    }
  }
  componentDidMount () {
    demoAction.getCount()
    todoListAction.getTodoList()
  }
  handleAdd = () => {
    demoAction.addCount()
  }
  handleMin = () => {
    demoAction.minCount()
  }
  handleName = () => {
    demoAction.changeName('xxx')
  }
  renderList = () => {
    let { listData } = this.state.todoStore
    return listData.map((i, index) => {
      return (
        <TodoItem key={index} itemData={i} />
      )
    })
  }
  render () {
    return (
      <div>
        <div>
          {this.state.demoStore.count}
        </div>
        <div>{this.state.demoStore.name}</div>
        <Button onClick={this.handleAdd}>Add</Button>
        <Button onClick={this.handleMin}>Min</Button>
        <Button onClick={this.handleName}>ChangeName</Button>
        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }
}

ReactMixin.onClass(Left, Reflux.connect(testStore, 'demoStore'))
ReactMixin.onClass(Left, Reflux.connect(todoListStore, 'todoStore'))

export default Left
