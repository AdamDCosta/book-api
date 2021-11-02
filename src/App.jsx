import { useEffect, useState } from "react";
import "./App.scss";
import BookTile from "./components/BookTile/BookTile";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((response) => {
        return response.json();
      })
      .then((booksArray) => {
        booksArray ? setBooks(booksArray) : setBooks([]);
      });
  }, []);

  console.log(books);

  


  const booksJSX = books.map((book, index) => {
    return <BookTile key={book.title + (index + 1)} book={book} />;
  });

  return (
    <div className="App">
      <h1 className="App__header--h1">Some books I read recently...</h1>
      <h2 className="App__header--h2">Update or enter a new book</h2>
      <form className="App__form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title"/>
        <label htmlFor="author">Author</label>
        <input type="text" name="author"/>
        <label htmlFor="publisher">Publisher</label>
        <input type="text" name="publisher"/>
        <label htmlFor="pubdate">Pub Date</label>
        <input type="text" name="puddate"/>
      </form>
      <section className="books">{booksJSX}</section>
    </div>
  );
};

export default App;
