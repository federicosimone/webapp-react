import { Link } from "react-router-dom"
import FilmCard from "../components/FilmCard"
import Movies from "../data/exampleList"
import style from "./MoviesList.module.css"


function MoviesList() {

    return (
        <>
            <div className={`${style.listBackground}`}>
                <div className={`${style.listContent} container pt-5 pb-5`}>
                    <div className="d-flex justify-content-between">
                        <h1 className="d-inline">Seleziona il film di cui vuoi leggere le informazioni</h1>
                        <Link className={`btn mb-3 ${style.btnColor}`} to={`/`}>Torna alla Home</Link>
                    </div>
                    <div className="d-flex flex-wrap gap-3">

                        {Movies.map((movie) => (
                            <div key={movie.id}>
                                <FilmCard
                                    id={movie.id}
                                    title={movie.title}
                                    abstract={movie.abstract} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesList