function Form() {
    return (
        <>
            <h2>Inserisci recensione:</h2>
            <form>
                <div className="mb-1">
                    <label for="exampleInputEmail1" className="form-label">Nome</label>
                    <input name="name" className="form-control" placeholder="Il tuo nome" />
                </div>
                <div className="mb-1">
                    <label for="exampleInputPassword1" className="form-label">Voto</label>
                    <input type="number" min={1} max={5} name="vote" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form;