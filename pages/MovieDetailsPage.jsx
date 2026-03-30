import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./MovieDetailsPage.module.css"

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
                <div className={`${style.backGround}`}>

                    <div className={`${style.content} container pt-5`}>
                        <div className="d-flex">
                            <div>
                                <img src={`http://localhost:3000/movies/${Movie.image}`} alt="MoviePoster" className={`${style.posterImg}`} />
                            </div>
                            <div className={`${style.info} ms-5 p-4`}>
                                <div className="">
                                    <h1 className='fw-bold'>{Movie?.title}</h1>
                                    <p>{Movie.abstract}</p>
                                    <p>Regista: {Movie.director}</p>
                                    <p>Genere: {Movie.genre}</p>
                                    <p>Anno: {Movie.release_year}</p>
                                </div>
                                <div className="row">
                                    <div className="col col-6">
                                        <h2 className="d-block fw-bold">Recensioni:</h2>
                                        {Movie.reviews?.map((review, i) => <Reviews key={i} review={review} />)}
                                    </div>
                                    <div className="col col-6">
                                        <h2>Inserisci recensione:</h2>
                                        <form>
                                            <div className="mb-1">
                                                <label for="exampleInputEmail1" className="form-label">Nome</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div className="mb-1">
                                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <Link className="btn btn-danger" to="/movies">Torna alla lista</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetailsPage;
