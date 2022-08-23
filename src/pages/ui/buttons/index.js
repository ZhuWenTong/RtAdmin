import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { switchMenu } from '../../../redux/action'

import { Button, Input, Card, Row, Col } from 'antd'
import Child from './child'
import DefaultSlot from './defaultSlot'
import NameSlot from './nameSlot/index'
import Content from './nameSlot/content'
import Top from './nameSlot/top'

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
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="search参数">
                            <Button type="primary" onClick={this.toModal}>跳转弹框页</Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="state参数">
                            <Button type="primary" onClick={this.toModal2}>跳转弹框页2</Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="dom显隐">
                            <Button onClick={this.handleShowChild}>{this.state.flag ? '隐藏' : '显示'}</Button>
                            <>
                                {/* {this.renderChild()} */}
                                {this.state.flag ? <Child {...this.state} /> : <div>213</div>}
                            </>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="获取ref">
                            <Button onClick={this.getRefInfo}>获取ref</Button>
                            <div>
                            <Input value={this.state.inputVal} ref={this.inputElem} style={{width: '300px'}} onChange={e => this.setInputVal(e.target.value)}/>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Slot">
                            <DefaultSlot>
                                <p>默认Slot</p>
                                <p>千里之行，始于足下。——老子</p>
                            </DefaultSlot>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="具名slot">
                            <NameSlot header={<Top />} content={<Content />} footer={<div>Footer</div>}>

                            </NameSlot>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect()(Buttons)
