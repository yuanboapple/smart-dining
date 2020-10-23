import { Layout} from 'antd'
import React, { useState, useEffect } from 'react'
import {withRouter, Redirect, Switch, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {changeHeaderTitle} from '@/store/actions' 
import menus from './menu'
import AppAside from './AppAside'
import menu from './menu'
import routes from '@/routes'
import '@/assets/style/layout.less'
import AppHeader from './AppHeader'


const {Content} = Layout
let res = ''
//获取当前路由对应的菜单名
const getPathName = (path, menu) => { 
    for (let item of menu) {
        if(item.subs && item.subs.length)  getPathName(path, item.subs)
        if(item.key === path) {
            res = item.title
            break
        }
    }
    return res
}
const DefaultLayout = props => {
    const {title} = useSelector(state => state.headerTitle)
    const dispatch = useDispatch()
    //刷新获取当前路由对应的菜单名
    useEffect(() => {
        const {location: {pathname}} = props
        dispatch(changeHeaderTitle(getPathName(pathname, menu)))
    }, [])

    return (
        <Layout>
            <AppAside menu={menus}></AppAside>
            <Layout style={{minHeight: '100vh', backgroundColor: '#F8F9FA'}}>
                <AppHeader menuName={title}/>
                <Content>
                    <Switch>
                        {
                            routes.map(item => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={
                                            props => (<item.component {...props}/>)
                                        }
                                    >
                                        
                                    </Route>
                                )
                            })
                        }
                        <Redirect to='/404' />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(DefaultLayout)