import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { BarHanlderContextProvider } from "./context/barhandler/BarHandlerContext";
import React from 'react'

const BarHandler = () => {
    return (
        <BarHanlderContextProvider>
            <Navbar />
            <Sidebar />
        </BarHanlderContextProvider>
    )
}

export default BarHandler