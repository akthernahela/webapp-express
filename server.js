const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:5173' }));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})