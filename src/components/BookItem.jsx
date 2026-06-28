function BookItem({ book, deleteBook }) {
  return (
    <div className="flex justify-between items-center border rounded-lg p-4 shadow-sm bg-white">
      <div>
        <h2 className="text-2xl font-semibold">{book.title}</h2>
        <p className="font-semibold">{book.author}</p>
      </div>

      <button
        onClick={() => deleteBook(book.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default BookItem;