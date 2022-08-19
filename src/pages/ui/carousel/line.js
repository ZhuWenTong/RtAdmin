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
    let charts = echarts.init(document.getElementById('lineChart'));
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
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '北京',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '上海',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '广州',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '深圳',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        }
      ]
    }
    charts.setOption(options)
  }
  render () {
    return (
      <div>
        <Card title="折线图">
          <div id='lineChart' style={{height: '400px'}}></div>
        </Card>
      </div>
    )
  }
}

export default line
