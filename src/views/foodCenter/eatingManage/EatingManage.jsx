import React from 'react'
import {Button, Select, DatePicker} from 'antd'

const {Option} = Select
const STATUS = [{value: 1, label: '预约中'}, {value: 2, label: '未开始'}, {value: 3, label: '已取消'}, {value:4, label: '已过期'}, {value: 5, label: '已完成'}]
const TYPES = [{value: 1, label: '午餐'}, {value: 2, label: '晚餐'}]

const EatingManage = () => {

    
    const defaultTypeValue = 1
    const handleDateChange = (date, dateString) => {
        console.log(date, dateString)
    }
    const handleTypeChange = (e) => {
        console.log(e)
    }
    const getStatus = (value) => {
        switch (value) {
            case 1:
                return '预约中'
            case 2: 
                return '未开始'
            case 3:
                return '已取消'
            case 4:
                return '已过期'
            default:
                return '已完成'
        }  
    }
    const tableData = []
    const remoteData = [{
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 1
    }]
    return (
        <div className="container-wrap">
            <div className="container-wrap-top">
                <div className="container-wrap-top-l">
                    <Button type="primary">发布预约</Button>
                </div>
                <div className="container-wrap-top-r">
                    <Select className="margin-r-15" onChange={handleTypeChange}  defaultValue={defaultTypeValue} allowClear>
                        {
                            TYPES.map(t => (<Option key={t.value} value={t.value}>{t.label}</Option>))
                        }
                    </Select>
                    <DatePicker onChange={handleDateChange} allowClear></DatePicker>
                </div>
            </div>
            <div className="container-wrap-middle">

            </div>
            <div className="container-wrap-bottom">

            </div>
        </div>
    )
}

export default EatingManage