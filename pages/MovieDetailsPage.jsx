import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Movies from "../data/exampleList"
import Reviews from "../components/Reviews";
import backgroundImg from "../src/assets/interstellar_bg.jpg"

function MovieDetailsPage() {

    const { id } = useParams();
    const movie = Movies[id - 1]

    return (
        <>
            <div>
                <div style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '50rem'
                }}>
                    <div className="container">
                        <Details
                            id={movie.id}
                            title={movie.title}
                            abstract={movie.abstract}
                            image={movie.image} />
                        <h1 className="fw-bold">Recensioni:</h1>
                        <Reviews
                            review={movie.reviews} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage;


