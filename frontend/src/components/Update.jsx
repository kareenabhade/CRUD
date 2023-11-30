import React,{useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
import './styles.css'

const Update = () => {
    const [book, setBook] = useState({
        title:"",
        descp:"",
        price:"",
    });

    const navigate = useNavigate()
    const location = useLocation()
    const bookId = location.pathname.split('/')[2]
    const handleChange = (e) => {
        setBook( prev => ({ ...prev, [e.target.name]:e.target.value}));
        console.log(book);
    }
    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/books/${bookId}`, book)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
    <div className='form'>
        <h1>Update the Book</h1>
        <input type='text' placeholder='title' className="bookInfo" name="title" onChange={handleChange}></input>
        <input type='text' placeholder='descp' className="bookInfo" name="descp" onChange={handleChange}></input>
        <input type='number' placeholder='price' className="bookInfo" name="price" onChange={handleChange}></input>
        <button className="updateBook" onClick={handleClick}>Update</button>
    </div>
    )
}

export default Update