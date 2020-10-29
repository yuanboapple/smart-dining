import React from 'react'
import {withRouter} from 'react-router-dom'
import CustomBreadCrumb from '@/components/CustomBreadCrumb'
import {Form, Input, Select} from 'antd'
const {Option} = Select
const EATINGTYPE = [{value: 1, label: '午餐'}, {value: 2, label: '晚餐'}]

const PublishOrder = (props) => {
    const arr = [{path: '/foodCenter/eatingManage', title: '用餐管理'}, '发布预约']
    const col = {xs: {span: 8}}
    return (
        <>
            <CustomBreadCrumb arr={arr} />
            <div className="container-detail-wrap">
                <Form className="margin-t-40" labelCol={col} wrapperCol={col}>
                    <Form.Item label="类型：">
                        <Select >
                            {
                                EATINGTYPE.map(type => (
                                    <Option value={type.value}>{type.label}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="日期：">
                        <Input />
                    </Form.Item>
                </Form>
            </div>
        </>

    )
}

export default withRouter(PublishOrder)