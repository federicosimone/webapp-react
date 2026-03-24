import style from './Details.module.css'


function Details(props) {
    return (
        <>
            <div>
                <h1 className='fw-bold'>{props.title}</h1>
                <p>{props.abstract}</p>
                <p>{props.reviews}</p>
            </div>

        </>
    )
}

export default Details;