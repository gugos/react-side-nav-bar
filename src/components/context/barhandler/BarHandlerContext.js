import { createContext, useReducer } from "react";
import BarHandlerReducer from "./BarHandlerReducer"

const INITIAL_STATE = {
    sidebarIsOpen: false
}

export const BarHandlerContext = createContext(INITIAL_STATE)

export const BarHanlderContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(BarHandlerReducer, INITIAL_STATE)

    return (
        <BarHandlerContext.Provider value={{ sidebarIsOpen: state.sidebarIsOpen, dispatch }}>
            {children}
        </BarHandlerContext.Provider>
    )
}