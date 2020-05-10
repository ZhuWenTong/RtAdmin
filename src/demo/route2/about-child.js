import React, { Component } from 'react'

export default class AboutChild extends Component {
    render () {
        return (
            <div>
                <p>获取动态路由参数值: {this.props.match.params.id}</p>
            </div>
        )
    }
}
