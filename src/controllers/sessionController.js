const User = require('../models/User');
const validate = require('../middlewares/User');
module.exports = {
    async create(req, res) {
        const bodyData = req.body;
        const { email, password } = bodyData;
        
        try {
            const hasUser = await User.findOne({
                email: email
            });

            if (!hasUser) return res.status(404).json({
                message: "User does not exist"
            });

            const passwordDTO = {
                requestPass: password,
                responsePass: hasUser.password
            }

            const validPassword = await validate.decryptPassword(passwordDTO);

            if (!validPassword) return res.status(400).send({message: "Password incorrect"})

            return res.status(200).json({
                message: "Logged in"
            })
        } catch(err) {
            return res.status(400).json(err);
        }
    }
}