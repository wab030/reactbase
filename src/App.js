import { useState } from 'react';
import './App.css';
import Book from '../src/components/Book/Book';
import BookForm from './components/BookForm/BookForm';

function App() {

  const [books, setBooks] = useState(
    [
      {
        name: "A descoberta do mundo",
        author: "Clarice Lispector",
        pages: "480",
        urlImage: "https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg",
      },
      {
        name: "Gênero e desigualdades",
        author: "Flávia Biroli",
        pages: "210",
        urlImage: "https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg",
      },
    ]
  );

  const onHandleBook = (event) => {
    event.preventDefault(event);
    const newBooks = [...books,
    {
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
      urlImage: event.target.urlImage.value,
    }
    ];
    setBooks(newBooks);

  }

  const onDeleteHandler = (index) => {
    console.log("Tem a função de excluir o livro");
    console.log(index);
  }

  return (
    <div className="App">
     
      <div className='row'>
        <h1 className='text-center'>Cadastro de Livros</h1>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          {books.map((book, index) => {
            return (
              <Book
                key={index}
                name={book.name}
                author={book.author}
                pages={book.pages}
                urlImage={book.urlImage}
                onDeleteHandler={() => onDeleteHandler(index)}
              />
            )
          })}
        </div>
        <div className='col-1-of-2'>
          <BookForm onHandleBook={onHandleBook}/>
        </div>
      </div>
    </div>
  );
}

export default App;
