const jwt = require("jsonwebtoken");

//load .env file into process.env
require("dotenv").config();

module.exports = {
    verifyToken: function verifyToken(req, res, next) {
        console.log('verifying');

        //process the token
        try {
            //retrieve token from authorization header’s content
            var token = req.headers['authorization'].split('Bearer ')[1];
            // console.log(token);

            //check token
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.email = decoded.email;
            next();
        }
        catch (err) {
            return res.status(401).send({ auth: false, message: 'Not authorized!' });
        }
    }
}; 