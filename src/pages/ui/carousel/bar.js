import React, { Component } from 'react'
import { Card } from 'antd'

import * as echarts from 'echarts'

class line extends Component {
  state = {

  }
  componentDidMount () {
    this.drawLine()
  }
  drawLine = () => {
    let charts = echarts.init(document.getElementById('barChart'));
    let options = {
      title: {
        text: 'Line Demo',
        show: false
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['北京', '上海', '广州', '深圳'],
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '40',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '北京',
          type: 'bar',
          stack: 'Total',
          data: [120, 132, 101]
        },
        {
          name: '上海',
          type: 'bar',
          stack: 'Total1',
          data: [220, 182, 191]
        },
        {
          name: '广州',
          type: 'line',
          stack: 'Total2',
          data: [150, 232, 201]
        },
        {
          name: '深圳',
          type: 'bar',
          stack: 'Total3',
          data: [320, 332, 301]
        }
      ]
    }
    charts.setOption(options)
  }
  render () {
    return (
      <div>
        <Card title="柱状图">
          <div id='barChart' style={{height: '400px'}}></div>
        </Card>
      </div>
    )
  }
}

export default line
