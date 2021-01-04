// emmet: rafce o rfc
import React from 'react';
import ReactDom from 'react-dom';

//CSS normal style:
import './index.css';
//import array de libros
import {books} from './books'
//import componente con default (se puede renombrar)
import Book from './Book'

function BookList() {
  return (
    <section className="booklist">
      {books.map(book=> {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};


ReactDom.render(<BookList />, document.getElementById('root')); 