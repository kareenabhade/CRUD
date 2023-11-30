const express = require('express');
const db = require('./db'); 
const cors = require('cors');
// Adjust the path based on your project structure

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  const query = 'SELECT * FROM books';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.json(results);
  });
});



app.post('/books',(req,res)=>{
  const query = 'INSERT INTO books (`title`,`descp`,`price`) VALUES (?)'

  const values = [req.body.title, req.body.descp, req.body.price]
  db.query(query,[values],(err,data)=>{
    if(err) return res.json(err)
        return res.json("book added successfully")
  })
})

app.delete('/books/:id', (req,res)=>{
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE id = ?"
  db.query(query,[bookId], (err,data)=>{
    if(err) return res.json(err)
        return res.json("book deleted successfully")
  })
})

app.put('/books/:id', (req,res)=>{
  const bookId = req.params.id;
  const query = "UPDATE books SET `title`=? , `descp`=?, `price`=? WHERE id = ?"
  const values = [req.body.title, req.body.descp, req.body.price]
  db.query(query,[...values, bookId], (err,data)=>{
    if(err) return res.json(err)
        return res.json("book updated successfully")
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
