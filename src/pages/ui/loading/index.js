import React, { useEffect, useState, Fragment } from "react";

import { Input, Button, message, Row, Col, Card } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import './index.less'

const Loading = () => {
  const [listData, setCityList] = useState([])
  const [cityName, setCityName] = useState('')

  useEffect(() => {
    // console.log(listData)
  })

  function addItem () {
    if (!cityName) {
      message.warning('请输入内容')
      return
    }
    let obj = {
      name: cityName,
      id: listData.length + 1
    }
    listData.push(obj)
    setCityList([...listData])
    setCityName('')
  }

  function delItem (id) {
    console.log(id)
    let idx = listData.findIndex(i => i.id === id)
    console.log(idx)
    listData.splice(idx, 1)
    setCityList([...listData])
  }

  function renderList () {
    if (!listData.length) return
    return listData.map((i) => {
      return (
        <div className="list-item" key={i.id}>
          <span>{i.name}</span>
          <DeleteOutlined onClick={() => delItem(i.id)} />
        </div>
      )
    })
  }

  return (
    <div className="loading-page">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="TodoList">
            <div className="wrap-list">
              <Input.Group compact className="add-act">
                <Input style={{width: '400px'}} value={cityName} onChange={e => setCityName(e.target.value)} />
                <Button type="primary" onClick={addItem}>新增</Button>
              </Input.Group>
              <Fragment>{renderList()}</Fragment>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Loading
