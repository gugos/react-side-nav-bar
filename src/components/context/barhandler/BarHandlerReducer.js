const BarHandlerReducer = (state, action) => {
    switch(action.type) {
        case "SHOW": {
            return {
                sidebarIsOpen: true
            }
        }
        case "HIDE": {
            return {
                sidebarIsOpen: false
            }
        }
        default:
            return state
    }
}

export default BarHandlerReducer