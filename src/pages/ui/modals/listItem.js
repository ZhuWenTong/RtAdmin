import React, { Component } from "react"
import { DeleteOutlined } from '@ant-design/icons'

import './listItem.less'

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  delItem = () => {
    const { handleDeleteItem, index, itemData } = this.props
    handleDeleteItem(index, itemData) // 向父组件传值 调用父组件向子组件传的一个方法
  }

  render () {
    const { itemData } = this.props // 父组件传值
    return (
      <div className="list-item">
        <span>{itemData.name}</span>
        <DeleteOutlined onClick={this.delItem} />
      </div>
    )
  }
}

export default ListItem
