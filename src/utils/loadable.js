import React from 'react'
import Loadable from 'react-loadable'

const loadingCompoent = () => {
    return <div />
}
export default (loader, loading = loadingCompoent) => {
    return Loadable({
        loader,
        loading
    })
}