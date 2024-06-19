const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test  = (req, res) => {
    res.json('test is working')
}

// Register
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        // check if name is entered
        if(!name){
            return res.json({
                error:'name is required'
            })
        }
        // check password is good
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be atleast 6 characters long'
            })
        }
        // check email
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error: 'Email is taken already'
            })
        }
        
        const hashedPassword = await hashPassword(password)
        // crease user
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

// Login
const loginUser = (req, res) =>{
    try {
        const {email, password} = req.body
    } catch (error) {
        
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
}