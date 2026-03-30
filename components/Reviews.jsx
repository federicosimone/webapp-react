function Reviews({ review }) {

    const { name, vote, text } = review;

    return (
        <>

            <div className="card mb-4 " style={{ maxWidth: '18rem' }}>
                <ul className="list-group list-unstyled ">
                    <li className="list-group-item fw-bold">{name}</li>
                    <li className="list-group-item">
                        <span className="me-2">{vote}</span>
                        {vote >= 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                        {vote >= 2 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                        {vote >= 3 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                        {vote >= 4 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                        {vote >= 5 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}

                    </li>
                    <li className="list-group-item">{text}</li>
                </ul>
            </div>

        </>
    )
}

export default Reviews;
