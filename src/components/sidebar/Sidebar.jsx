import "./sidebar.scss"

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useContext } from "react";
import { BarHandlerContext } from "../context/barhandler/BarHandlerContext";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const {sidebarIsOpen, dispatch} = useContext(BarHandlerContext)
    const location = useLocation().pathname

    return (
        <div className={sidebarIsOpen ? "sidebar active" : "sidebar"}>
            <div className="icon"><KeyboardDoubleArrowRightIcon onClick={() => dispatch({type: "HIDE"})} /></div>
            <ul>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li className={location === "/" ? "active" : ""}><span>Home</span></li>
                </Link>
                <Link to="/page1" style={{ textDecoration: "none" }}>
                    <li className={location === "/page1" ? "active" : ""}><span>Page1</span></li>
                </Link>
                <Link to="/page2" style={{ textDecoration: "none" }}>
                    <li className={location === "/page2" ? "active" : ""}><span>Page2</span></li>
                </Link>
                <Link to="/page3" style={{ textDecoration: "none" }}>
                    <li className={location === "/page3" ? "active" : ""}><span>Page3</span></li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar