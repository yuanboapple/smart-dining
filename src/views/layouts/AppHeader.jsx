import React from 'react'
import {Layout} from 'antd'

const AppHeader = props => {
    const {menuName} = props
    return (
        <div className="header">
            <div className="header-left">
                <span>{menuName}</span>
            </div>
            <div className="header-right">
                admin
            </div>
        </div>
    )
}

export default AppHeader