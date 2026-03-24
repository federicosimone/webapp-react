import FilmCard from "../components/FilmCard"
import Movies from "../data/exampleList"


function MoviesList() {

    return (
        <>

            <div className="container pt-5 pb-5">
                <h1>Seleziona il film di cui vuoi leggere le informazioni</h1>
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