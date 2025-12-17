const express = require('express')
const app = express()
const PORT = 3000
const connection = require('./database/connection')
const moviesRouter = require('./database/movies')
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

app.use(express.json())
app.use('/images', express.static('public'));

app.get('/', (req, res) => {
    res.send('My movie Catalog')
})

app.use('/api/movies', moviesRouter)
app.use('api/reviews', moviesRouter)