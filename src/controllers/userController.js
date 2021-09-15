const userPassword = require('../middlewares/User');
const { create } = require('../models/User');
const User = require('../models/User');
const { validateOnwership } = require('../middlewares/User')



exports.createUser = async (req, res) => {
    const { name, password, email } = req.body;
        
    try {
        const encryptedPassword = await userPassword.encryptPassword(password);
        const createdUser = await User.create({
            name: name,
            email: email,
            password: encryptedPassword
}); 
    createdUser.password = undefined;
    
    return res.status(201).send({ message: "Register created successfully", createdUser});

    } catch(err) {

        return res.status(400).json(err)

    }
}; 

exports.deleteUser = async (req, res) => {

    const { user_id } = req.params
    const { payload } = req.user

    const onwershipValidationDTO = {
        reqBodyId: user_id, 
        tokenId: payload._id
    }

    const isOwnershipValid = validateOnwership(onwershipValidationDTO)
    if (isOwnershipValid === false) return res.status(400).json({
        message: 'Operation not allowed'
    })     

    try {

        const deletedUser = await User.findByIdAndRemove(user_id)
        
        if (deletedUser === null) {
            return res.status(400).json({
                message: 'User does not exist'
            })
        } else {

            const userResponse = userControllerHelpers.removePassword(deletedUser)

            return res.status(200).json({
                message: 'User deleted successfully',
                userResponse
            })
        }            

    } catch(err) {

        return res.status(400).json(err)

    }

};
