import "./page2.scss"

import React from 'react'
import BarHandler from "../../components/BarHandler"

const Page2 = () => {
    console.log("Rendered Page 2")
    return (
        <div className="page2">
            <BarHandler />
            <div className="page2Container">
                Page2
            </div>
        </div>
    )
}

export default Page2