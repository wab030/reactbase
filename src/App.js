import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books/Books.js';
import BookForm from './components/BookForm/BookForm';
import Header from './components/Header/Header';

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

  const [formValues, setFormValues] = useState({});
  const [bookIndex, setBookIndex] = useState(null);

  const onHandleBook = (event) => {
    event.preventDefault(event);
    let newBooks = [];
    if (bookIndex) {
      console.log('Alterar');
      setBookIndex(null);
    } else {
      console.log('Alterar');
      newBooks = [...books,
      {
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value,
        urlImage: event.target.urlImage.value,
      }
      ];
    }

    setBooks(newBooks);

  }

  const onDeleteHandler = (index) => {
    console.log("Tem a função de excluir o livro");
    console.log(index);
  }

  const onChangeHandler = (index) => {
    console.log('Chegue no on change handler');
    const newFormValue = {
      name: books[index].name,
      author: books[index].author,
      pages: books[index].pages,
      urlImage: books[index].urlImage,
    };
    setFormValues(newFormValue);
    setBookIndex(index);
  }

  const onHandleFormChange = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1 className='text-center'>Cadastro de Livros</h1>
        <Routes>
          <Route path="/" element={<Books books={books} onDeleteHandler={onDeleteHandler} onChangeHandler={onChangeHandler} />} />
          <Route path="/novolivro" element={
            <BookForm
              formValues={formValues}
              onHandleBook={onHandleBook}
              onHandleFormChange={() => onHandleFormChange()}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
