import React from 'react'

const BookTile = (props) => {

  const { book } = props;

  return (
    <article>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <h4>{book.publisher}</h4>
      <h5>{book.pubDate}</h5>
    </article>
  )
}

export default BookTile
