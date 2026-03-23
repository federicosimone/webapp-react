import Movies from "../data/exampleList"
import Placeholder from "../data/placeholder.svg"


function FilmCard() {
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="d-flex flex-wrap gap-4">

                    {Movies.map((movie) => (
                        <div className="card" style={{ width: 300 }}>
                            <img src={Placeholder} className="card-img-top" alt="placeholder" />
                            <div class="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.abstract}</p>
                                <Link className="btn btn-primary" to={`/movies/${movie.id}`}>Vedi dettagli</Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>


        </>
    )
}

export default FilmCard;

