import React from 'react'
import ReactDOM from 'react-dom'

//import css
import './index.css'

//import components
import books from './books'
import Book from './Book'

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id}  {...book}></Book>
        )
      })}
    </section>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'));