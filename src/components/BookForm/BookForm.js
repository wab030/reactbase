import React from "react";
import './BookForm.css';

const BookForm = ( {onHandleBook}) => {

    return (
        <form onSubmit={onHandleBook} className='BookForm'>
            <input type="text" id="name" placeholder="Digite o nome do livro" />
            <input type="text" id="author" placeholder="Digite o nome do autor(a)" />
            <input type="text" id="pages" placeholder="Número de páginas" />
            <input type="text" id="urlImage" placeholder="url da imagem" />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default BookForm;