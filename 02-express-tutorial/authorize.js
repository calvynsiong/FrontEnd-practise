const authorize = (req, res, next) => {
    const { user } = req.query
    if (user==="john") {
        // ? Adding user key to request
        req.user = {name: "john", id: "3"}
        next()
    } else {
        res.status(401).send("Unauthorized");
    }
  
}

module.exports = authorize