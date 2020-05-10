import React from 'react'
import Child from './child'
import './index.less'
import {Button} from 'antd'
import 'antd/dist/antd.less'
export default class Life extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this) // 绑定this
    }
    handleClick () {
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
    }
    handleAdd = () => { // 不绑定通过 =>
        this.setState({
            count: this.state.count + 1
        })
    }
    render () {
        return (<div className='content'>
            <p>生命周期</p>
            <button onClick={this.handleClick}>点击</button>
            <button onClick={this.handleAdd}>点击1</button>
            <Button onClick={this.handleAdd}>点击2</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count} />
        </div>)
    }
}
