function Reviews({ review }) {

    const { name, vote, text } = review;

    return (
        <>

            <div className="card mb-4 " style={{ width: '18rem' }}>
                <ul className="list-group list-unstyled ">
                    <li className="list-group-item fw-bold">{name}</li>
                    <li className="list-group-item"><i className="fa-solid fa-star"></i> {vote}</li>
                    <li className="list-group-item">{text}</li>
                </ul>
            </div>

        </>
    )
}

export default Reviews;
