import FilmCard from "../components/FilmCard"


function MoviesList(props) {

    return (
        <>
            <p>Questa è la pagina di elenco dei film</p>
            <div>
                <FilmCard
                    id={props.id}
                    title={props.title}
                    image={props.image}
                />

            </div>

        </>
    )
}

export default MoviesList