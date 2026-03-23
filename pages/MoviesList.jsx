import FilmCard from "../components/FilmCard"
import Movies from "../data/exampleList"


function MoviesList() {

    return (
        <>
            <p>Questa è la pagina di elenco dei film</p>
            <div className="container pt-5 pb-5">
                <div className="d-flex flex-wrap gap-4">

                    {Movies.map((movie) => (
                        <FilmCard
                            id={movie.id}
                            title={movie.title}
                            abstract={movie.abstract} />
                    ))
                    }
                </div>
            </div>

        </>
    )
}

export default MoviesList