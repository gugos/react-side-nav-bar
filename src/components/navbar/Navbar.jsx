import "./navbar.scss"

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useContext } from "react";
import { BarHandlerContext } from "../context/barhandler/BarHandlerContext";

const Navbar = () => {
    const {dispatch} = useContext(BarHandlerContext)

    return (
        <div className="navbar">
            <div className="icon"><KeyboardDoubleArrowRightIcon onClick={() => dispatch({type: "SHOW"})} /></div>
        </div>
    )
}

export default Navbar