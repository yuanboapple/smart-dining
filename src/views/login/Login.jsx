import React from 'react'
import {Form, Icon, Input, Button} from 'antd'
import '@/assets/style/login.less'
import loginImg from '@/assets/images/login.png'
const Login = (props) => {
    const {getFieldDecorator} = props.form
    const handleSubmit = e => {
         props.form.validateFields((err, values) => {
             if(!err) {
                 //登录
             }
         })
    }
    return (
        <div className="login-body">
            <div className="wrap">
                <img className="login-img" src={loginImg} alt="" />
                <Form onSubmit={handleSubmit} className="login-form">
                    <span className="login-form-title">经信厅后勤管理平台</span>
                    <div className="login-form-wrap">
                        <Form.Item  className="login-form-user">
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入账号'}]
                            })(<Input  prefix={<Icon type="user"></Icon>} placeholder="账号"></Input>)}
                        </Form.Item>
                        <Form.Item className="login-form-password">
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}]
                            })
                            (<Input.Password  prefix={<Icon type="lock"></Icon>} visibilityToggle placeholder="密码" />)}
                        </Form.Item>     
                        <Form.Item>
                            <a className="login-form-forgot">找回密码？</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">登 录</Button>
                        </Form.Item> 
                    </div>
              
                </Form>
            </div>
        </div>
    )
}
export default Form.create({name: 'login'})(Login)