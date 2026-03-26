const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Bookstore API" });
});

let books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Hunt/Thomas' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
];
let nextId = 3;

app.get('/books', (req, res) => {
  res.json({ success: true, data: books });
});

app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Không tìm thấy sách' });
  res.json({ success: true, data: book });
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ success: false, message: 'Thiếu title hoặc author' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json({ success: true, data: newBook });
});

app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Không tìm thấy sách' });
  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  res.json({ success: true, data: book });
});

app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Không tìm thấy' });
  books.splice(index, 1);
  res.json({ success: true, message: 'Đã xoá thành công' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
