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
    const sqlMovies = "SELECT * FROM movies WHERE id = ?";
    const sqlReviews = "SELECT id, movie_id, name, vote, text FROM reviews WHERE movies_id = ?";
    connection.query(sqlMovies, [id], (err, results) => {
        if (err) {
            console.error("Errore");
        }
    })

    connection.query(sqlReviews, [id], (errReviews) => {
        if (errReviews) {
            console.error("Errore recensione");
        }
    })
    res.status(200).json(movie);
}


module.exports = { index, show }