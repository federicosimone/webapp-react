
import { Link } from "react-router-dom";


function FilmCard({ movie }) {

    const { id, title, abstract, image } = movie;

    return (
        <>

            <div className="card" style={{ width: 300 }}>
                <img src={`http://localhost:3000/movies/${image}`} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link className="btn btn-primary" to={`/movies/${id}`}>Vedi dettagli</Link>
                </div>
            </div>
        </>
    )
}

export default FilmCard;

