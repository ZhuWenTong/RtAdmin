import React, { Component } from 'react'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import  './todoItem.less'

class TodoItem extends Component {
  static defaultProps = { // 默认值
    showDel: false
  }
  deleteItem = () => {
    let { index, handleDel, itemData } = this.props
    Modal.confirm({
      title: '提示',
      icon: <ExclamationCircleOutlined />,
      content: `确定要删除[${itemData.content}]吗`,
      okText: '确定',
      cancelText: '取消',
      onOk: () => handleDel(index),
      onCancel: () => {}
    })
    // handleDel(index)
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
