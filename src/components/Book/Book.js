import React from 'react';
import Image from '../Image/Image';
import './Book.css';


const Book = (props) => {

    return (
        <div className='Book row text-center' onClick={props.onChangeHandler}>
            <div className='col-1-of-2'>
                <div className='text-container'>
                    <p>{props.name}</p>
                    <p>{props.author}</p>
                    <p>{props.pages}</p>
                    <p onClick={ props.onDeleteHandler }>X</p>
                </div>
            </div>
            <div className='col-1-of-2'>
                <div className='image-container'>
                    <Image image={props.urlImage} />
                </div>
            </div>
        </div>
    );
}

export default Book;