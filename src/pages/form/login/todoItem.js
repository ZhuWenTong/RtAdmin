import React, { Component } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import  './todoItem.less'

class TodoItem extends Component {
  static defaultProps = { // 默认值
    showDel: false
  }
  deleteItem = () => {
    let { index, handleDel } = this.props
    handleDel(index)
  }
  render () {
    let { itemData } = this.props
    return (
      <div className='todo-item'>
        <span>{itemData.content}</span>
        {this.props.showDel ? <DeleteOutlined onClick={this.deleteItem} /> : ''}
      </div>
    )
  }
}

export default TodoItem
