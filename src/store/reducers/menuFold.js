import {OPEN_FOLD, CLOSE_FOLD} from '../actionTypes'

const initState = {
    isFold: false
}
const menuFold = (state = initState, action) => {
    switch (action.type) {
        case OPEN_FOLD:
            return {
                ...state,
                isFold: true
            }
        case CLOSE_FOLD:
            return {
                ...state,
                isFold: false
            }
        default: 
            return {
                ...state
            }
    }
}

export default menuFold
