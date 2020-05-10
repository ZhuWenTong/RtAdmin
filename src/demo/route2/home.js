import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render () {
        return (
            <div>
                <Link to='/main'>首页</Link>
                <Link to='/about'>关于</Link>
                <Link to='/about/info'>信息</Link>
                <Link to='/not'>404</Link>
                {this.props.children}
            </div>
        )
    }
}
