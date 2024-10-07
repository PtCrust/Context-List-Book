import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handelForm = (e) => {
        e.preventDefault();
        if (!title || !author) return;
        dispatch({
            type: "ADD_BOOK", book: {
                title, author
            }
        })
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handelForm}>
            <input
                type='text'
                placeholder='Enter Book Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder='Enter Book Author'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type='submit'>Add Book</button>
        </form>
    )
}

export default BookForm
