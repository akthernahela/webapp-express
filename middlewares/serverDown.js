function serverDown(err, res) {
    console.log(err.message);
    res.status(500).json({
        error: true,
        message: "Server non risponde"
    });
}

module.exports = serverDown