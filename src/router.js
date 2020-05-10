import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import NoMatch from './pages/nomatch'

import Home from './pages/home'
import Buttons from './pages/ui/buttons'

export default class myRouter extends Component {
    render () {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/admin" render={() => (
                            <Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}></Route>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        )}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
} 
