function Reviews(props) {
    return (
        <>
            {props.review.map(review => (
                <div className="card mb-4 " style={{ width: '18rem' }}>
                    <ul className="list-group list-unstyled ">
                        <li className="list-group-item fw-bold">{review.name}</li>
                        <li className="list-group-item"><i className="fa-solid fa-star"></i> {review.vote}</li>
                        <li className="list-group-item">{review.text}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Reviews;
