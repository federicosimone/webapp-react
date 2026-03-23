import Placeholder from "../data/placeholder.svg"
import { Link } from "react-router-dom";


function FilmCard(props) {
    return (
        <>

            <div className="card" style={{ width: 300 }}>
                <img src={Placeholder} className="card-img-top" alt="placeholder" />
                <div class="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.abstract}</p>
                    <Link className="btn btn-primary" to={`/movies/${props.id}`}>Vedi dettagli</Link>
                </div>
            </div>
        </>
    )
}

export default FilmCard;

