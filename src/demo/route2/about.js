import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class About extends Component {
    render () {
        return (
            <div>
                <p>
                    <Link to="/about/123">To About Child</Link>
                </p>
                <p>
                    <Link to="/about/222">To About Child</Link>
                </p>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
