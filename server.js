const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const serverDown = require('./middlewares/serverDown')
const moviesRouter = require('./moviesRouter')

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api/movies', moviesRouter);
app.use(notFound);
app.use(serverDown);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})