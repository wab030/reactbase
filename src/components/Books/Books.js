import React from "react";
import Book from '../Book/Book'

const Books = (props) => {
  return (
    <div className="Books">
      {props.books.map((book, index) => {
        return (
          <Book
            key={index}
            name={book.name}
            author={book.author}
            pages={book.pages}
            urlImage={book.urlImage}
            onDeleteHandler={() => props.onDeleteHandler(index)}
            onChangeHandler={() => props.onChangeHandler(index)}
          />
        )
      })}
    </div>
  );
}

export default Books;