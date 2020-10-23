import React from 'react'
import {Layout, Avatar, Icon, Tooltip} from 'antd'

const AppHeader = props => {
    const {menuName} = props
    return (
        <div className="header">
            <div className="header-left">
                <span>{menuName}</span>
            </div>
            <div className="header-right">
                <Avatar className="user-avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span className="user-name">admin</span> 
                <Tooltip title="退出" placement="bottom">
                    <Icon  className="logout" type="logout" />
                </Tooltip>
                
            </div>
        </div>
    )
}

export default AppHeader