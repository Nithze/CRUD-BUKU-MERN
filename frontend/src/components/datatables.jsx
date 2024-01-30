import React, { useState } from 'react';

const DataTable = () => {
  const [books, setBooks] = useState([
    { id: 1, judul: 'Judul Buku 1', penulis: 'Penulis 1', penerbit: 'Penerbit 1', harga: 50, stok: 20 },
    { id: 2, judul: 'Judul Buku 2', penulis: 'Penulis 2', penerbit: 'Penerbit 2', harga: 40, stok: 15 },
  ]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <button onClick={() => console.log('Tambah Data Buku')}>Tambah Data Buku</button>
      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.judul}</td>
              <td>{book.penulis}</td>
              <td>{book.penerbit}</td>
              <td>{book.harga}</td>
              <td>{book.stok}</td>
              <td>
                <button onClick={() => console.log('Edit', book.id)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

