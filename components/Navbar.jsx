import { Link, NavLink } from "react-router-dom";
import logo from "../src/assets/FedlixnoBG.png"
import style from "./Navbar.module.css"



function Navbar() {
    return (

        <>
            <nav className="navbar">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href={"/"}>
                            <img src={logo} alt="logo fedlix" style={{ width: 150, height: 70 }} />
                        </a>
                    </div>
                    <div className="d-flex gap-3">

                        <NavLink className="btn btn-danger" to="/">Home</NavLink>
                        <NavLink className="btn btn-danger" to="/movies">Lista film</NavLink>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar