const jwt = require('jsonwebtoken')
const User = require('../modals/user')


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')                //taking authorization value 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)         // verifying the acquired value with sec. key
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })      //finding user in database 

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.'})
    }
}

module.exports = auth