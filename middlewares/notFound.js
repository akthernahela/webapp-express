function notFound(req, res) {
    res.status(404)
    res.json({
        message: "Nessun contenuto",
        error: true
    });
};
module.exports = notFound;