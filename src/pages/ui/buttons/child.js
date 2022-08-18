import React, { Component } from 'react'

import PropTypes from 'prop-types'

class childs extends Component {
  static defaultProps = { // 默认值
    itemData: 'defaultData',
    name: 'lisi'
  }
  static propTypes = { // 类型必填限制
    itemData: PropTypes.string, // PropTypes.string.isRequired // 链式
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleText: PropTypes.func // 函数写成func
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        {this.props.itemData} --- {this.props.name}
      </div>
    )
  }
}

// childs.defaultProps = {
//   itemData: 'defaultData',
//   name: 'lisi'
// }

export default childs
