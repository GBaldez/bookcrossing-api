const bcrypt = require('bcryptjs')
const User = require('../models/User');


module.exports = {

    async encryptPassword(password) {

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)

        return encryptedPassword

    },

    async decryptPassword(passwords) {
        const { requestPass, responsePass } = passwords;
        const isValid = await bcrypt.compare(requestPass, responsePass);
        return isValid;
    },

    async validateIfUserExists(req, res, next) {
        const bodyData = req.body
        const { email, password } = bodyData  
        const hasUser = await User.findOne({ email: email })
        if (hasUser) return res.status(400).json({message: 'User already exists'});
        next(); 
    },

    validateOnwership(data) {

        const { reqBodyId, tokenId } = data

        if (reqBodyId !== tokenId) return false

        return true

    },

    verifyToken(req, res, next) {
        
        const { token } = req.headers

        if (!token) return res.status(400).json({
            message: 'No token'
        })

        try {

            const verified = jwt.verifyToken(token)
            req.user = verified

        } catch(err) {

            return res.status(400).json(err)

        }       
        
        next()

    }
};