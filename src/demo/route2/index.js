import React, { Component } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './home'
import Main from './main'
import About from './about'
import Info from './info'
import Child from './child'
import AboutChild from './about-child'
import NotFound from './404'
export default class myRouter extends Component {
    render () {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() => (
                            <Main>
                                <Route path="/main/child" component={Child}></Route>
                            </Main>
                        )}></Route>
                        <Route path="/about" render={() => (
                            <About>
                                <Route path="/about/:id" component={AboutChild}></Route>
                            </About>
                        )}></Route>
                        <Route path="/about/info" component={Info}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}
