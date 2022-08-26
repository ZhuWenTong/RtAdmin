import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import todoListStore from '../../../reflux/todoList/store'
import todoAction from '../../../reflux/todoList/action'

import { Empty } from 'antd'

import TodoItem from '../login/todoItem'

class RefluxData extends Component {
  state = {
    todoStore: {
      listData: []
    }
  }
  componentDidMount () {
    todoAction.getTodoList()
  }
  renderList = () => {
    let { listData } = this.state.todoStore
    return listData.length ? listData.map((i, index) => {
      return (
        <TodoItem key={index} itemData={i} />
      )
    }) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  }
  render () {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

ReactMixin.onClass(RefluxData, Reflux.connect(todoListStore, 'todoStore'))

export default RefluxData
