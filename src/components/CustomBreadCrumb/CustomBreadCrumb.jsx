import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Breadcrumb} from 'antd'
const CustomBreadCrumb = (props) => {
    return (
        <Breadcrumb>
        {
            props.arr && props.arr.map(item => {
                if(typeof item === 'object') {
                    return (
                        <Breadcrumb.Item key={item.path}>
                            <Link to={item.path}>{item.title}</Link>
                        </Breadcrumb.Item>  
                    )
                } else {
                    return (
                        <Breadcrumb.Item key={item}>
                            {item}
                        </Breadcrumb.Item>
                    )                    
                }
            })
        }
        </Breadcrumb>
    )
}

CustomBreadCrumb.propTypes = {
    arr: PropTypes.array.isRequired
}
export default CustomBreadCrumb