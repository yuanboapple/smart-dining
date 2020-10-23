import {CHANGE_HEADER_TITLE} from '../actionTypes'

const initState = {
    title: ''
}

const headerTitle = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_HEADER_TITLE:
            return {...state, title: action.title}
        default:
            return {...state}
    }
}

export default headerTitle
