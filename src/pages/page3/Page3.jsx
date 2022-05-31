import "./page3.scss"

import React from 'react'
import BarHandler from "../../components/BarHandler"

const Page3 = () => {
    console.log("Rendered Page 3")
    return (
        <div className="page3">
            <BarHandler />
            <div className="page3Container">
                Page3
            </div>
        </div>
    )
}

export default Page3