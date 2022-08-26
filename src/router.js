import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import NoMatch from './pages/nomatch'

import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import LoginForm from './pages/form/login'
import RegisterForm from './pages/form/register'

export default class myRouter extends Component {
    render () {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/admin" render={() => (
                            <Admin>
                                <Switch>
                                    <Route path="/admin/home" render={() => (<Home />)}></Route>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loading}></Route>
                                    <Route path="/admin/ui/notification" component={Notification}></Route>
                                    <Route path="/admin/ui/messages" component={Messages}></Route>
                                    <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                    <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                    <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                    <Route path="/admin/form/login" component={LoginForm}></Route>
                                    <Route path="/admin/form/reg" component={RegisterForm}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        )}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route exact path="/" render={() => (<Redirect to="/admin/home" />)}></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
} 
