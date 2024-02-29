import * as bookApi from "../http-actions/books-api.js";

let books = $state([]);

const initBooks = async () => {
  books = await bookApi.getBooks();
}

const useBookStore = () => {
  return {
    get books() {
      return books;
    },
    deleteBookById: (id) => {
      books = books.filter(book => book.id != id);
    },
    addBook: (book) => {
      books = [...books, book]
    },
  };
};

export { useBookStore, initBooks };
