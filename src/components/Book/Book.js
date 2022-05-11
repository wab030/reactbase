import React from 'react';
import './Book.css';

const Book = ( props ) => {

    console.log( props );

    return(
        <div className='Book'>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <p>{props.pages}</p>
        </div>
    );
}

export default Book;