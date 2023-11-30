import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './styles.css'
import bookImg from  './book.png'

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
      const fetchAllData  = async ()=>{
        try {
          const res = await axios.get('http://localhost:3000/')
          console.log(res.data)
          setBooks(res.data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchAllData();
  },[])

  const handleDelete = async(id)=>{
    try {
      await axios.delete("http://localhost:3000/books/"+id)
      window.location.reload();
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className='mainContainer'>
    <h1>Book Shop</h1>
        <div className='booksContainer'>
      {books.map((book) => (
        <div className='book' key={book.id}>
          <img className="bookImg" src={bookImg} alt="img" />
          <h2 className='bookTitle'>{book.title}</h2>
          <p className='bookDescp'>{book.descp}</p>
          <h2>₹{book.price}</h2>
          <button className='deleteButton edit' onClick={()=>{handleDelete(book.id)}}>DELETE</button>
          <button className='updateButton edit'><Link to={`/update/${book.id}`}>UPDATE</Link></button>
          </div>   
      ))}
      </div>
  <button className='addButton'><Link to="/add">Add Book </Link></button>
    </div>
  )
}

export default Books