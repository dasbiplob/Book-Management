import { useBookStore } from "../stores/books.svelte.js";

const createBook = async (book) => {

  const response = await fetch("/api/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });

  const data = await response.json();
  if (!data.error) {
    const bookStore = useBookStore();
    bookStore.addBook(data);
  }

  return data;
};

const deleteBookById = async (id) => {
  const response = await fetch(`/api/books/${id}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const bookStore = useBookStore();
    bookStore.deleteBookById(id);
  }
};

const getBooks = async () => {
  const response = await fetch("/api/books");
  return await response.json();
};

export { createBook, deleteBookById, getBooks };
