function BookItem({ book, deleteBook }) {
  return (
    <div className="flex justify-between items-center border rounded-lg p-4 shadow-sm bg-gray-50">
      <div>
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
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