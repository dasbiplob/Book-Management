<script>
  import Book from './Book.svelte';
  import { useBookStore } from '../../stores/books.svelte.js';
  import { deleteBookById } from '../../http-actions/books-api.js';

  let selectedBook = $state(null); 

  const bookStore = useBookStore();
</script>

<h1>Books</h1>

<ul>
  {#each bookStore.books as book}
    <li>
        {book.name} 
        <button on:click={() => selectedBook = book}>View</button> 
        <button on:click={() => deleteBookById(book.id)}>Delete</button>
    </li>
  {/each}
</ul>

{#if selectedBook}
  <Book book={selectedBook} />
  <button on:click={() => selectedBook = null}>Clear</button>
{/if}
