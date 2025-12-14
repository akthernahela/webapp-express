const express = require('express')
const app = express()
const PORT = 3000
const connection = require('./database/connection')
const moviesRouter = require('./database/movies')
const cors = require('cors');

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('My movie Catalog')
})

app.use('/api/movies', moviesRouter)

app.use(cors({
    origin: 'http://localhost:5173'
}));