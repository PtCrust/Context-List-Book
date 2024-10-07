import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className='book-list'>
            <ul>
                { books.map(book => {
                    return( <BookDetails book={book} key={book.title} /> )
                })}
            </ul>
        </div>
    ) : (
        <p style={{textAlign:"center"}}>No books found</p>
    )
}

export default BookList
