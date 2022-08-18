import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Card, Button } from 'antd'

import {changeReduxText, switchMenu}  from '../../../redux/action/index'

class left extends Component {
  state = {

  }
  changeText = () => {
    console.log(this.props)
    this.props.actions.changeReduxText('改变他')
    // this.props.dispatch(changeReduxText('test')) // 不可使用映射
  }
  render () {
    return (
      <div>
        <Card title={'Left ' + this.props.reduxText}>
          <p>{this.props.reduxText}</p>
          <Button onClick={this.changeText}>Change Text</Button>
        </Card>
      </div>
    )
  }
}
// 将redux state映射到props
const mapStateToProps = state => {
  // console.log(state)
  return {
    reduxText: state.demoReducer.reduxText,
    menuName: state.menuReducer.menuName
  }
}
// 将redux中actions方法映射到props
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      changeReduxText: bindActionCreators(changeReduxText, dispatch),
      switchMenu: bindActionCreators(switchMenu, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(left)
