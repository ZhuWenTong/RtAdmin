import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import Store from '../../../reflux/demo/store'
import Action from '../../../reflux/demo/action'

import { Button } from 'antd'

class Right extends Component {
  state = {
    demoStore: {
      count: null
    }
  }
  componentDidMount () {
    // this.unsubscribe = Store.listen(this.onCountChange, this)
    Action.getCount()
  }
  // componentWillUnmount () {
  //   this.unsubscribe()
  // }
  // onCountChange = (count) => {
  //   this.setState({
  //     count
  //   })
  // }
  clickAdd = () => {
    Action.addCount()
  }
  render () {
    return (
      <div>
        <div>{this.state.demoStore.count}</div>
        <Button onClick={this.clickAdd}>Add</Button>
      </div>
    )
  }
}

ReactMixin.onClass(Right, Reflux.connect(Store, 'demoStore'))

export default Right
