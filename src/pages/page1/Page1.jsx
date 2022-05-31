import "./page1.scss"

import React from 'react'
import BarHandler from "../../components/BarHandler"

const Page1 = () => {
    console.log("Rendered Page 1")
    return (
        <div className="page1">
            <BarHandler />
            <div className="page1Container">
                Page1
            </div>
        </div>
    )
}

export default Page1