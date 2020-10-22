import React from 'react'
import { Layout, Icon } from 'antd'
import CustomMenu from '../../components/CustomMenu/CustomMenu'

const {Sider} = Layout
const AppAside = props => {
    const {menu} = props
    return (
        <Sider>
            <div className='logo'>
                <a rel='noopener noreferrer' href='https://github.com/ltadpoles' target='_blank'>
                    <Icon type='github' style={{ fontSize: '3.8rem', color: '#fff' }} />
                </a>
            </div>
            <CustomMenu menu={menu} />
        </Sider>
    )
}

export default AppAside