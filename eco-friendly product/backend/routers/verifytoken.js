const verifyToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    jwt.verify(token,
        process.env.JWT_secret,
        (err, payload) => {
            if (err) {
                console.log(err);
                res.status(401).json(err);
            } else {
                req.user = payload;
                next();
            }
        }
  )  
}

module.exports=verifyToken;