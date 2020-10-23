import React from 'react'
import { Avatar, Layout, Icon } from 'antd'
import CustomMenu from '../../components/CustomMenu/CustomMenu'
import {useSelector, useDispatch} from 'react-redux'
import {openFold, closeFold} from '@/store/actions' 
const {Sider} = Layout

const AppAside = props => {
    const {menu} = props
    const {isFold} = useSelector(state => state.menuFold)
    const dispatch = useDispatch()

    const onClickFold = () => {
        return isFold ?  dispatch(closeFold()): dispatch(openFold())
    }
    const renderTitle = () => {
        if(isFold) {
            return <Icon  type='github' style={{ fontSize: '16px', color: '#fff' }} />
        } else {
            return (
                    <>
                        <span className="title">经信厅智慧后勤</span>
                    </>
            )
        }
    }

    return (
        <Sider className="aside"  collapsed={isFold}>
            <div className='logo'>
                {
                    renderTitle()
                }
                <Icon onClick={onClickFold} className="fold" type={isFold ? "menu-unfold" : 'menu-fold'} />
            </div>
            <CustomMenu menu={menu} />
        </Sider>
    )
}

export default AppAside