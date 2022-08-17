import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Card, Button } from 'antd'

import {changeReduxText}  from '../../../redux/action/index'

class left extends Component {
  state = {

  }
  changeText = () => {
    console.log(this.props)
    this.props.actions('改变他')
    // this.props.actions.changeReduxText('改变他')
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

const mapStateToProps = state => {
  // console.log(state)
  return {
    reduxText: state.demoReducer.reduxText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(changeReduxText, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(left)
