const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const serverDown = require('./middlewares/serverDown')

app.get('/', (res, req) => {
    res.send('Movies Catalog')
});

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(notFound);
app.use(serverDown);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})