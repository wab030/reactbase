import { useState } from 'react';
import './App.css';
import Book from '../src/components/Book/Book';

function App() {

  const [books, setBooks ] = useState(
    [
      {
        name:"A descoberta do mundo",
        author:"Clarice Lispector",
        pages:"480"
      },
      {
        name:"Gênero e desigualdades",
        author:"Flávia Biroli",
        pages:"210"
      },
    ]
  );

  return (
    <div className="App">
      <h1>Meu primeiro exemplo React</h1>
      {books.map((book) => {
        return(
          <Book name={book.name} author={book.author} pages={book.pages} />
        )
      })}
    </div>
  );
}

export default App;
