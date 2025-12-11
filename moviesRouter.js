const connection = require('./database/connection')

const index = (req, res) => {
    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: 'Errore' })
        res.json(results)
    })
}

const show = (req, res) => {
    const id = Number(req.params.id);
    const sqlBook = "SELECT * FROM books WHERE id = ?";
}

module.exports = { index, show }