import { Link } from "react-router-dom"
import FilmCard from "../components/FilmCard"

import style from "./MoviesList.module.css"
import axios from "axios"
import { useEffect, useState } from "react"


function MoviesList() {

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/movies").then(res => {
            console.log(res.data);
            setMovies(res.data)
        }).catch(err => console.log("ops", err.message))
    }, []);

    return (
        <>
            <div className={`${style.listBackground}`}>
                <div className={`${style.listContent} container pt-5 pb-5`}>
                    <div className="d-flex justify-content-between">
                        <h1 className="d-inline">Seleziona il film di cui vuoi leggere le informazioni</h1>
                        <Link className={`btn mb-3 ${style.btnColor}`} to={`/`}>Torna alla Home</Link>
                    </div>
                    <div className="d-flex flex-wrap gap-3">

                        {Movies?.map(movie => <FilmCard movie={movie} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesList