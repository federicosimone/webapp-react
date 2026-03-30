import { useState } from "react";
import axios from "axios";

function Form(props) {

    const movieId = props.movieId

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Nuova recensione", formData, "per il film con id: ", movieId);

        const apiUrl = `http://localhost:3000/movies/${movieId}/reviews`;

        axios.post(apiUrl, formData).then(result => {
            if (result.data.id) {
                setFormData(initialValues); // fa si che all'invio, il form si svuoti secondo le initialValues
            } else {
                console.log("ops...Qualcosa è andato storto")
            };
        }).catch(error => console.log(error.message));
    };



    const initialValues = { name: "", vote: 0, text: "" } //valori iniziali vuoti
    const [formData, setFormData] = useState(initialValues);

    function setFieldValue(event) {    //dell'evento a me servono il name e la value di riferimento.
        console.log(event.target.name)
        console.log(event.target.value)

        let newFormData = {   //copio il contenuto del vecchio formData e lo salvo in una nuova variabile let 
            ...formData
        };

        newFormData[event.target.name] = event.target.value;  //qui vado a dire che deve aggiungere all'elemento con un certo "name", un certo contenuto "value" salvandolo nella variabile newFormData

        setFormData(newFormData);    //qui vado a settare formData "sostituendolo" con newFormData
    };


    return (

        <>
            <h2 className="fw-bold">Inserisci recensione:</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label Htmlfor="name" className="form-label fw-bold">Nome</label>
                    <input name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                </div>
                <div className="mb-2">
                    <label Htmlfor="number" className="form-label fw-bold ">Voto</label>
                    <input type="number" min={1} max={5} name="vote" className="form-control" value={formData.vote} onChange={setFieldValue} />
                </div>
                <div className="mb-4">
                    <label htmlFor="Testo" className=" form-label fw-bold">Testo</label>
                    <textarea name="text" className="form-control" rows="2" value={formData.text} onChange={setFieldValue}></textarea>
                </div >
                <button className="btn btn-success">Pubblica</button>
            </form >
        </>
    );
};

export default Form;