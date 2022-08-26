import React from 'react'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

export default class App extends React.Component {
	render () {
		return (
			<ConfigProvider locale={zhCN}>
				<div className="App">
					{this.props.children}
				</div>
			</ConfigProvider>
			)
	}
}
