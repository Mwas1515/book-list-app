import BookItem from "./BookItem";

function BookList({ books, deleteBook }) {
  return (
    <div className="space-y-4">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBook={deleteBook}
        />
      ))}
    </div>
  );
}

export default BookList;