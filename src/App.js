import { useState } from 'react';
import './App.css';
import Book from '../src/components/Book/Book';

function App() {

  const [books, setBooks] = useState(
    [
      {
        name: "A descoberta do mundo",
        author: "Clarice Lispector",
        pages: "480"
      },
      {
        name: "Gênero e desigualdades",
        author: "Flávia Biroli",
        pages: "210"
      },
    ]
  );

  const onHandleBook = (event) => {
    event.preventDefault(event);
    const newBooks = [...books,
      {
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value
      }
    ];
    setBooks(newBooks);
   
  }

  return (
    <div className="App">
      <h1>Meu primeiro exemplo React</h1>
      <form onSubmit={onHandleBook}>
        <input type="text" id="name" placeholder="Digite o nome do livro" />
        <input type="text" id="author" placeholder="Digite o nome do autor(a)" />
        <input type="text" id="pages" placeholder="Número de páginas" />
        <input type="submit" value="Cadastrar" />
      </form>
      {books.map((book, index) => {
        return (
          <Book key={index} name={book.name} author={book.author} pages={book.pages} />
        )
      })}
    </div>
  );
}

export default App;
