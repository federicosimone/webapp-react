function Reviews(props) {
    return (
        <>

            <div className="card mb-4 " style={{ width: '18rem' }}>
                <ul className="list-group list-unstyled ">
                    <li className="list-group-item fw-bold">{props.review.name}</li>
                    <li className="list-group-item"><i className="fa-solid fa-star"></i> {props.review.vote}</li>
                    <li className="list-group-item">{props.review.text}</li>
                </ul>
            </div>

        </>
    )
}

export default Reviews;
