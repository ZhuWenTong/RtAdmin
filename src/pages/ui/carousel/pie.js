import React, { Component } from 'react'
import { Card } from 'antd'

import * as echarts from 'echarts'

class Pie extends Component {
  state = {}
  componentDidMount () {
    this.drawPie()
  }
  drawPie = () => {
    let _this = this
    let charts = echarts.init(document.getElementById('pieChart'));
    let options = {
      legend: {
        top: "bottom",
        textStyle: {
          color: "#000",
        },
      },
      grid: {
        top: 0,
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}({d}%)",
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: [50, 150],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 0,
            normal: {
              label: {
                show: true,
                formatter: "{b}({d}%)",
              },
              labelLine: { show: true },
            },
          },
          data: [
            {
              value: 26,
              name: "已完成",
              itemStyle: {
                color: _this.getLinearColor("#00f1fa", "#4facfe"),
              },
            },
            {
              value: 33,
              name: "处理中",
              itemStyle: {
                color: _this.getLinearColor("#f09819", "#ff5858"),
              },
            },
            {
              value: 41,
              name: "未处理",
              itemStyle: {
                color: _this.getLinearColor("#fa71cd", "#c471f5"),
              },
            },
          ],
        },
      ],
    };
    charts.setOption(options);
  }
  getLinearColor = (color1, color2, pos) => {
    const p = Object.assign({ x: 0.5, y: 0, x2: 0.5, y2: 1 }, pos);
      return {
        type: "linear",
        ...p,
        colorStops: [
          {
            offset: 0,
            color: color1,
          },
          {
            offset: 1,
            color: color2,
          },
        ],
        global: false,
      };
  }
  render () {
    return (
      <div>
        <Card title="饼图">
          <div id='pieChart' style={{height: '400px'}}></div>
        </Card>
      </div>
    )
  }
}

export default Pie
