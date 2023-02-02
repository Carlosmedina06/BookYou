import { useSelector } from 'react-redux'

import rutaApi from '../../../../API/api'

export const getBookId = (name) => {
  const books = useSelector((state) => state.allbooks)
  const book = books.filter((el) => {
    el.name.trim().toLowerCase() === name.trim().toLowerCase()
  })
  const bookId = book.id

  return bookId
}

export const deleteBook = async (id) => {
  const info = rutaApi.delete('/book/delete/' + id)
  const response = info.data

  return response
}

export const getBookById = async (id) => {
  const info = await rutaApi.get('/book/' + id)
  const book = info.data

  return book
}

export const updateBook = async (id, book) => {
  const info = rutaApi.put('/book/update/' + id, book)
  const response = info.data

  return response
}

export const quantityOfBooks = () => {
  const books = useSelector((state) => state.allBooks)
  const booksLength = books.length

  return booksLength
}

export const quantityOFPayBooks = () => {
  const books = useSelector((state) => state.allBooks)
  const payBooks = books.filter((el) => el.subscription === 'premium')
  const allPayBooks = payBooks.length

  return allPayBooks
}

export const quantityOfFreeBooks = () => {
  const books = useSelector((state) => state.allBooks)
  const freeBooks = books.filter((el) => el.subscription === 'free')
  const allFreeBooks = freeBooks.length

  return allFreeBooks
}
