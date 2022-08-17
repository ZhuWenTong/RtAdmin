import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { switchMenu } from '../../../redux/action'

import { Button, Input } from 'antd'
import Child from './child'

class Buttons extends Component {
    constructor () {
        super()
        this.state = {
            itemData: 'Hello World',
            name: undefined,
            flag: true,
            inputVal: ''
        }
        this.inputElem = createRef()
    }
    toModal = () => {
        console.log(this.props)
        const { history, dispatch } = this.props
        dispatch(switchMenu('弹框'))

        history.push({
            pathname: '/admin/ui/modals',
            search: '?name=zhangsan'
        })
    }
    toModal2 = () => {
        const { history, dispatch } = this.props
        dispatch(switchMenu('弹框'))

        history.push({
            pathname: '/admin/ui/modals',
            state: {
                name: 'zhangsan'
            }
        })
    }
    handleShowChild = () => {
        let { flag } = this.state
        this.setState({
            flag: !flag
        })
    }
    renderChild = () => {
        if (this.state.flag) {
            return (
                <Child {...this.state} />
            )
        }
    }
    getRefInfo = () => {
        console.log(this.inputElem.current)
        this.inputElem.current.focus()
    }
    setInputVal = (value) => {
        this.setState({
            inputVal: value
        })
    }
    render () {
        return (
            <div>
                <Button type="primary" onClick={this.toModal}>跳转弹框页</Button>
                <Button type="primary" onClick={this.toModal2}>跳转弹框页2</Button>
                <Button onClick={this.handleShowChild}>{this.state.flag ? '隐藏' : '显示'}</Button>
                <Button onClick={this.getRefInfo}>获取ref</Button>
                <>
                    {/* {this.renderChild()} */}
                    {this.state.flag ? <Child {...this.state} /> : <div>213</div>}
                </>
                {/* <Child {...this.state} /> */}
                {/* <Child itemData={this.state.itemData} name={this.state.name} /> */}
                <div>
                <Input value={this.state.inputVal} ref={this.inputElem} style={{width: '300px'}} onChange={e => this.setInputVal(e.target.value)}/>
                </div>
            </div>
        )
    }
}

export default connect()(Buttons)
