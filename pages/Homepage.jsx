import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "./Homepage.module.css"


function Homepage() {
    return (
        <>
            <div className={`${style.background}`}>
                <div className={`${style.content} container`}>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "50rem" }}>
                        <div className="text-center">
                            <h1 className="fw-bold">Puoi avere informazioni sul film che preferisci</h1>
                            <h2>Visita la nostra lista cliccando qui sotto</h2>
                            <Link className="btn btn-danger mt-2" to={`/movies/`}><span className="fw-semibold">Lista film</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepage