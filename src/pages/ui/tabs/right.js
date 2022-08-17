import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Card, Button } from 'antd'

import {changeReduxText}  from '../../../redux/action/index'

class right extends Component {
  state = {

  }
  changeText = () => {
    console.log(this.props)
    this.props.actions('Hello Redux')
    // this.props.actions.changeReduxText('改变他')
  }
  render () {
    return (
      <div>
        <Card title={"Right " + this.props.reduxText}>
          <p>{this.props.reduxText}</p>
          <Button onClick={this.changeText}>Change Again</Button>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxText: state.demoReducer.reduxText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(changeReduxText, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(right)
