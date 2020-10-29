let _menu = {}
export const getMenuByPath = (path, menu) => {
    for (let item of menu) {
        if(item.subs && item.subs.length)  getMenuByPath(path, item.subs)
        if(item.key === path) {
            _menu = item
            break
        }
    }
    return _menu
}