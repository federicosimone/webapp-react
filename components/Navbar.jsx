import { Link, NavLink } from "react-router-dom";
import logo from "../src/assets/logo.png"



function Navbar() {
    return (

        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href={"/"}>
                            <img src={logo} alt="logo zalando" style={{ width: 150, height: 60 }} />
                        </a>
                    </div>
                    <div className="d-flex gap-3">

                        <NavLink className="btn btn-dark" to="/">Home</NavLink>
                        <NavLink className="btn btn-dark" to="/aboutus">Chi siamo</NavLink>
                        <NavLink className="btn btn-dark" to="/products">Prodotti</NavLink>
                        <button className="btn btn-success" onClick={toggleBudgetMode} >{toggleLabelBudget()}</button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar