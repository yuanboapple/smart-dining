import React, {useEffect, useState} from 'react'
import {withRouter, useHistory} from 'react-router-dom'
import {Button, Select, DatePicker, Table, Pagination} from 'antd'
const {Column} = Table
const {Option} = Select
const STATUS = [{value: 1, label: '预约中'}, {value: 2, label: '未开始'}, {value: 3, label: '已取消'}, {value:4, label: '已过期'}, {value: 5, label: '已完成'}]
const TYPES = [{value: 1, label: '午餐'}, {value: 2, label: '晚餐'}]

const EatingManage = (props) => {
    let history = useHistory()
    const [tableData, setTableData] = useState([])
    const [wrapY, setWrapY] = useState(0)
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
    const renderType = type => {
        switch (type) {
            case 1:
                return <span>午餐</span>
            default:
                return <span>晚餐</span>
        }
    }
    const renderStatus = status => {
        switch (status) {
            case 1:
                return (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#FFC125', marginRight: '5px'}}></div>
                        <span style={{color: '#FFC125'}}>预约中</span>
                    </div>
                )
            case 2: 
                return (
                    <span style={{color: '#FB4300'}}>未开始</span>
                )
            case 3: 
                return (
                    <span className="col-3">已取消</span>
                )
            case 4:
                return (
                    <span className="col-3">已过期</span>
                )
            default:
                return (
                    <span className="col-3">已完成</span>
                )
        }
    }
    const remoteData = [{
        id: 1,
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 1
    },
    {
        id: 2,
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 2
    },
    {
        id: 3,
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 3
    },
    {
        id: 4,
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 4
    },
    {
        id: 5,
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 5
    },
    {
        id: 6,
        type: 1,
        admin: '袁强',
        date: '2020-09-09',
        orderTime: '09:00-09:30',
        publishTime: '2020-09-09 08:00',
        status: 1
    }
]
    useEffect(() => {
        const wrapHeight = document.querySelector('.container-wrap').getBoundingClientRect().height - 124
        setWrapY(wrapHeight)
        setTimeout(() => {
            setTableData(remoteData)
        }, 500);
    }, [])
    //发布预约回调
    const handlePublishOrder = (e) => {
        history.push('/foodCenter/eatingManage/publishOrder')
    }
    return (
        <div className="container-wrap">
            <div className="container-wrap-top">
                <div className="container-wrap-top-l">
                    <Button onClick={handlePublishOrder} type="primary">发布预约</Button>
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
                <Table dataSource={tableData} rowKey='id' pagination={false} scroll={{y: wrapY, scrollToFirstRowOnChange: true}}>
                        <Column title="类型" dataIndex="type" key="type" render={renderType}/>
                        <Column title="管理人" dataIndex="admin" key="admin"/>
                        <Column title="日期" dataIndex="date" key="date"/>
                        <Column title="预约时间" dataIndex="orderTime" key="orderTime"/>
                        <Column title="发布时间" dataIndex="publishTime"  key="publishTime"/>
                        <Column title="状态" dataIndex="status" key="status" render={renderStatus}/>
                        
                </Table>
            </div>
            <div className="container-wrap-bottom">
                    <Pagination  showSizeChanger total={500} defaultCurrent={1} showTotal={total => `共 ${total}条`}/>
            </div>
        </div>
    )
}

export default withRouter(EatingManage)