import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import menuList from './../../config/menuConfig'
import './index.less'

const { SubMenu } = Menu

class NavLeft extends React.Component {
    constructor () {
        super()
        this.renderMenu = this.renderMenu.bind(this)
        this.handleSelectMenu = this.handleSelectMenu.bind(this)
    }
    state = {
        currentKey: ''
    }
    componentDidMount () {
        const menuTreeNode = this.renderMenu(menuList)
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '')
        let menuName = localStorage.getItem('menuName') || '首页'
        this.setState({
            menuTreeNode,
            currentKey
        })
        const { dispatch } = this.props
        dispatch(switchMenu(menuName))
    }
    handleSelectMenu ({item, key}) {
        const { dispatch } = this.props
        let title = item.props.title
        // window.localStorage.setItem('menuName', title)
        dispatch(switchMenu(title))
        this.setState({
            currentKey: key
        })
    }
    // 菜单名称
    renderTitle = (i) => {
        if (i.icon) {
            return (<span><Icon type={i.icon} />{i.title}</span>)
        } else {
            return (<span>{i.title}</span>)
        }
    }
    // 菜单渲染
    renderMenu (data) {
        return data.map(i => {
            if (i.children) {
                return (
                    <SubMenu title={this.renderTitle(i)} key={i.key}>
                        {this.renderMenu(i.children)}
                    </SubMenu>
                )
            }
            return (
            <Menu.Item title={i.title} key={i.key}>
                <NavLink to={i.key}>{this.renderTitle(i)}</NavLink>
            </Menu.Item>
            )
        })
    }
    render () {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>zwt-admin</h1>
                </div>
                <Menu mode="vertical" theme="dark" selectedKeys={[this.state.currentKey]} onClick={this.handleSelectMenu}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft)
