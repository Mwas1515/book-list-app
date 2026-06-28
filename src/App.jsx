import { useState } from "react";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title || !author) return;

    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        author,
      },
    ]);

    setTitle("");
    setAuthor("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Book List
        </h1>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Book Title"
            className="border rounded-lg p-2 flex-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            className="border rounded-lg p-2 flex-1"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button
            onClick={addBook}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;