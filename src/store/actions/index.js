import {OPEN_FOLD, CLOSE_FOLD, CHANGE_HEADER_TITLE} from '../actionTypes'
export const openFold = () => (
    {
        type: OPEN_FOLD
    }
)

export const closeFold = () => ({
    type: CLOSE_FOLD
})

export const changeHeaderTitle = (title) => ({
    type: CHANGE_HEADER_TITLE,
    title
})