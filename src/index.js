import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ConfigProvider} from 'antd'
import {Provider} from 'react-redux'
import store from './store'
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import '@/assets/style/main.less'

moment.locale('zh-cn');
ReactDOM.render(<Provider store={store}><ConfigProvider locale={zhCN}> <App /> </ConfigProvider></Provider> , document.getElementById('root'))