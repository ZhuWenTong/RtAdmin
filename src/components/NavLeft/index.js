import React from 'react'
import { NavLink } from 'react-router-dom'
import menuList from './../../config/menuConfig'
import { Menu, Icon } from 'antd'
import './index.less'

const { SubMenu } = Menu

export default class NavLeft extends React.Component {
    constructor () {
        super()
        this.renderMenu = this.renderMenu.bind(this)
    }
    componentWillMount () {
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu (data) {
        return data.map(i => {
            if (i.children) {
                return (
                    <SubMenu title={
                        <span><Icon type={i.icon} />{i.title}</span>} key={i.key}>
                        {this.renderMenu(i.children)}
                    </SubMenu>
                )
            }
            return (
            <Menu.Item title={i.title} key={i.key}>
                <NavLink to={i.key}><Icon type={i.icon} />{i.title}</NavLink>
            </Menu.Item>
            )
        })
    }
    render () {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" />
                    <h1>zwt-admin</h1>
                </div>
                <Menu mode="vertical" theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
