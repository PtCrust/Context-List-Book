import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);

    return (
        <li onClick={() => dispatch({ type: "REMOVE_BOOK", title: book.title })} >
            <h3>{book.title}</h3>
            <p><strong>By: </strong>{book.author}</p>
        </li>
    )
}

export default BookDetails
