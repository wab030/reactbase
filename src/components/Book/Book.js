import React from 'react';
import Image from '../Image/Image';
import './Book.css';


const Book = ( props ) => {

    return(
        <div className='Book'>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <p>{props.pages}</p>
            <Image />
            <hr />
        </div>
    );
}

export default Book;