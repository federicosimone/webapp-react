import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Movies from "../data/exampleList"

function MovieDetailsPage() {

    const { id } = useParams();
    const movie = Movies[id - 1]

    return (
        <>
            <Details
                id={movie.id}
                title={movie.title}
                abstract={movie.abstract}
                image={movie.image} />
        </>
    )
}

export default MovieDetailsPage;