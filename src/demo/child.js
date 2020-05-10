import React from 'react'

export default class Child extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount () {
        console.log('Will Mount')
    }
    componentDidMount () {
        console.log('Did Mount')
    }
    componentWillReceiveProps (newProps) {
        console.log('WillReceiveProps: ' + newProps.name)
    }
    shouldComponentUpdate () {
        console.log('shoule update')
        return true
    }
    componentWillUpdate () {
        console.log('WillUpdate')
    }
    componentDidUpdate () {
        console.log('DidUpdate')
    }
    render () {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}