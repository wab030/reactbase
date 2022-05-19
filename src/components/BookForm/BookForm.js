import React, { useState } from "react";
import './BookForm.css';

const BookForm = (props) => {
    console.log(props);
    const [formValues, setFormValues] = useState(props.formValues);

    console.log(formValues);

    const handleChange = (e) => {
        console.log(e);
    }

    return (
        <form onSubmit={props.onHandleBook} className='BookForm'>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite o nome do livro"
                value={formValues.name || ''}
                onChange={handleChange}
            />
            <input
                type="text"
                id="author"
                placeholder="Digite o nome do autor(a)"
                value={formValues.author || ''}
                onChange={handleChange}
            />
            <input
                type="text"
                id="pages"
                placeholder="Número de páginas"
                value={formValues.pages || ''}
                onChange={handleChange}
            />
            <input
                type="text"
                id="urlImage"
                placeholder="url da imagem"
                value={formValues.urlImage || ''}
                onChange={handleChange}
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default BookForm;