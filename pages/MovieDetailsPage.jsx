import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Movies from "../data/exampleList"
import Reviews from "../components/Reviews";
import backgroundImg from "../src/assets/interstellar_bg.jpg"

function MovieDetailsPage() {

    const { id } = useParams();
    const movie = Movies[id - 1];
    const imagePat = "interstellar_bg.jpg";
    //const image = new URL(`../src/assets/${imagePat}`, import.meta.url).href;



    return (
        <>
            <div>
                <div style={{
                    backgroundImage: `url('/${movie.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '50rem'
                }}>
                    <div className="container">
                        <Details
                            id={movie.id}
                            title={movie.title}
                            abstract={movie.abstract}
                        />
                        <h1 className="fw-bold">Recensioni:</h1>
                        <div className="container d-flex justify-content-between">
                            {movie.reviews?.map(review => <Reviews review={review} />)}

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage;
