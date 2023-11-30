import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './styles.css'

const Add = () => {
    const [book, setBook] = useState({
        title:"",
        descp:"",
        price:"",
    });

    const navigate = useNavigate()
    const handleChange = (e) => {
        setBook( prev => ({ ...prev, [e.target.name]:e.target.value}));
    }
    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            axios.post('http://localhost:3000/books', book)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    console.log(book);
    return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type='text' placeholder='title' className="bookInfo" name="title" onChange={handleChange}></input>
        <input type='text' placeholder='descp' className="bookInfo" name="descp" onChange={handleChange}></input>
        <input type='number' placeholder='price' className="bookInfo" name="price" onChange={handleChange}></input>
        <button className="addBook" onClick={handleClick}>Add</button>
    </div>
    )
}

export default Add