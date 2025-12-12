const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.use(express.json())

app.get('/', (res, req) => {
    res.send('Movies Catalog')
});


