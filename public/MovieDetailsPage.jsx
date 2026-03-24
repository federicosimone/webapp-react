import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Movies from "../data/exampleList"
import Reviews from "../components/Reviews";
import backgroundImg from "../src/assets/interstellar_bg.jpg"

function MovieDetailsPage() {

    const { id } = useParams();
    const movie = Movies[id - 1];
    const imagePat = "interstellar_bg.jpg";
    const image = new URL(`../src/assets/${imagePat}`, import.meta.url).href;



    return (
        <>
            <div>
                <div style={{                                  //forse è backgroundImage: `url(${movie.image})`?s
                    backgroundImage: `url(${image})`,  //perchè? perchè io vorrei utilizzare anche qui l'overlay, riesco a farlo dal modulo css
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
                        <div className="container d-flex justify-content-between">
                            <Reviews
                                review={movie.reviews} />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage;
