import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
// import Utils from '../../utils/utils'
import axios from '../../axios'
import { connect } from 'react-redux'

class Header extends React.Component {
    // state = {
    //     userName: 'zwt'
    // }
    UNSAFE_componentWillMount () {
        this.setState({
            userName: 'zwt'
        })
    }
    componentDidMount () {
        // setInterval(() => {
        //     let sysTime = Utils.formatDate(new Date())
        //     this.setState({
        //         sysTime
        //     })
        // }, 1000)
        // this.getWeatherApiData()
    }
    getWeatherApiData () {
        let city = '深圳'
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then(res => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPicture: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }
    render () {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#/login">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        {this.props.menuName}
                    </Col>
                    {/* <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPicture} alt="" />
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col> */}
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log('--------------', state)
    return {
        menuName: state.menuReducer.menuName
    }
}
export default connect(mapStateToProps)(Header)
