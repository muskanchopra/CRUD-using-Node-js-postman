const bcrypt = require('bcryptjs')
const UserSchema = require('../models/user')

exports.getAllUsers = async (req , res) => {

    const allUsers = await UserSchema.find({});

    res.status(200).json({
        success : true,
        users : allUsers
    })
}

exports.createUsers = async (req, res) => {
    const { email , username, password } = req.body
    console.log(email , username, password)

    const isUser = await UserSchema.find({email: email});
    console.log(isUser)

    if(isUser.length > 0){
        res.status(404).json({
            success : false,
            Message : "Can't create user, as user is already present with this email."
        })
    }
    else{
        const user = new UserSchema({
            email: email,
            user_name: username,
            password: bcrypt.hashSync(req.body.password, 8),
          });
    
        user.save();

        res.status(200).json({
            success : true,
            user : user
        })
    }
   
}

exports.deleteUser = async (req , res) => {

    console.log(req.params.id)
    const deletedUser = await UserSchema.findByIdAndDelete({_id : req.params.id});
    console.log(deletedUser)

    res.status(200).json({
        success : true,
        deletedUser : deletedUser
    })
}

exports.updateUser = async (req , res) => {

    const { email , username, password } = req.body

    console.log(req.params.id)
    const updatedUser = await UserSchema.findByIdAndUpdate({_id : req.params.id}, {
        email : email,
        user_name : username,
        password: password
    });
    console.log(updatedUser)

    res.status(200).json({
        success : true,
        updatedUser : updatedUser
    })
}