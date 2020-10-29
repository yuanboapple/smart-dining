import { Layout} from 'antd'
import React, { useState, useEffect } from 'react'
import {withRouter, Redirect, Switch, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {changeHeaderTitle} from '@/store/actions' 
import {getMenuByPath} from '@/utils/util'
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
    const {location: {pathname}} = props
    const {headerTitle} = useSelector(state => state.headerTitle)
    const {title, extra: {fKey, fTitle}} = getMenuByPath(pathname, menus)
    const dispatch = useDispatch()
    //刷新获取当前路由对应的菜单名
    useEffect(() => {
        dispatch(changeHeaderTitle(fTitle || title))
    }, [])

    return (
        <Layout>
            <AppAside menu={menus}></AppAside>
            <Layout style={{minHeight: '100vh', backgroundColor: '#F8F9FA'}}>
                <AppHeader menuName={headerTitle}/>
                <Content>
                    <Switch>
                        <div className="container">
                            {
                                routes.map(item => {
                                        return (
                                            <Route
                                                key={item.path}
                                                path={item.path}
                                                exact={item.exact}
                                                render={
                                                    props => {
                                                        return (<item.component  {...props}/>)
                                                    }
                                                }
                                            >
                                                
                                            </Route>
                                        )
                                })
                            }
                        </div>

                        <Redirect to='/404' />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(DefaultLayout)