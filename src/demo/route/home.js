import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './main'
import About from './about'
import Info from './info'
export default class Home extends React.Component {
    render () {
        return (
            <HashRouter>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/about">关于</Link>
                    </li>
                    <li>
                        {/* <Link to="/info">信息</Link> */}
                        <Link to="/about/info">信息</Link>
                    </li>
                </ul>
                <hr/>
                {/* <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/info" component={Info}></Route>
                </Switch> */}
                {/* <Route exact path="/" component={Main}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/info" component={Info}></Route> */}
                {/* <Route exact path="/" component={Main}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route path="/about/info" component={Info}></Route> */}
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route path="/about/info" component={Info}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
