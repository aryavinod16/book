
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook,updateBook } from '../Redux/bookSlice';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function ViewBooks() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer.books || []);
  const [show, setShow] = useState(false);
  const [currentBook, setCurrentBook] = useState({ id: '', title: '', author: '' });

  const handleClose = () => setShow(false);
  const handleShow = (book) => {
    setCurrentBook(book);
    setShow(true);
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBook({
      id:currentBook.id,
      title:currentBook.title,
      author:currentBook.author
    }))
   
    handleClose();
  };

  return (
    <div className="book-list d-flex">
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <Card style={{ width: '18rem', margin: '10px' }} key={book.id} className='lg-6'>
            <Card.Img variant="top" height={"150px"} src="https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg"></Card.Img> 
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Author: {book.author}</Card.Text>
              <Button variant="primary" onClick={() => handleShow(book)}>
                Edit
              </Button>
              <Button style={{marginLeft:"120px"}} variant="danger" onClick={() => handleDeleteBook(book.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))
      )}

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                value={currentBook.title}
                onChange={(e) => setCurrentBook({ ...currentBook, title: e.target.value })}
                placeholder="Enter Book Title"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={currentBook.author}
                onChange={(e) => setCurrentBook({ ...currentBook, author: e.target.value })}
                placeholder="Enter Author"
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ViewBooks;

