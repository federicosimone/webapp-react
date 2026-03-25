import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import axios from "axios";
import { useState, useEffect } from "react";

function MovieDetailsPage() {

    const { id } = useParams();
    //const movie = Movies[id - 1];
    //const imagePat = "interstellar_bg.jpg";
    //const image = new URL(`../src/assets/${imagePat}`, import.meta.url).href;

    const [Movie, setMovie] = useState({})

    useEffect(() => {

        console.log("Siamo sull pagina dell'id", id)

        axios.get(`http://localhost:3000/movies/${id}`).then(res => {
            console.log(res.data);
            setMovie(res.data)
        }).catch(err => console.log("ops", err.message))
    }, [id]);

    return (
        <>
            <div>
                <div style={{
                    backgroundImage: `url('http://localhost:3000/movies/${Movie.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    minHeight: '50rem'
                }}>
                    <div className="container">
                        <div>
                            <h1 className='fw-bold'>{Movie?.title}</h1>
                            <p>{Movie.abstract}</p>

                        </div>
                        <h1 className="fw-bold">Recensioni:</h1>
                        <div className="container d-flex justify-content-between">
                            {Movie.reviews?.map(review => <Reviews review={review} />)}

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage;
