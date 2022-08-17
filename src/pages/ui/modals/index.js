import React, { Component } from 'react'

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
        <TodoList />
      </div>
    )
  }
}

export default modals
