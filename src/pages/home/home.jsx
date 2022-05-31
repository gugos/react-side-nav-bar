import "./home.scss"

import React from 'react'
import BarHandler from "../../components/BarHandler"

const Home = () => {
    console.log("Rendered Home Page")
    return (
        <div className="home">
            <BarHandler />
            <div className="homeContainer">
                Home
            </div>
        </div>
    )
}

export default Home