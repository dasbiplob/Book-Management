import { json } from '@sveltejs/kit';
import { books } from '../book-data.js';

export const DELETE = async ({ params }) => {
  const index = books.findIndex(book => book.id == params.id);
  if (index !== -1) {
    books.splice(index, 1);
    return json({ message: "Book deleted" }, { status: 200 });
  }
  
  return json({ error: "Book not found" }, { status: 404 });
}
