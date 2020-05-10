import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
    render () {
        return (
            <div>
                <p>Main</p>
                <Link to="/main/child">To Child</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}
