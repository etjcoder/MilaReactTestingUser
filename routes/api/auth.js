const router = require("express").Router()
const authController = require("../../controllers/authController");


router.route("/signup")
    .post(authController.createUser)


// app.post('/api/account/signup', (req, res, next) =>{
//     const { body } = req;
//     const { firstName, lastName, email, password, username} = body;

//     console.log(req.body)

//     if (!firstName) {
//         return res.send({
//             success: false,
//             messsage: 'Error: First name cannot be blank.'
//         })
//     }  
//     if (!lastName) {
//         return res.send({
//             success: false,
//             messsage: 'Error: First name cannot be blank.'
//         })
//     }   
//     if (!email) {
//         return res.send({
//             success: false,
//             messsage: 'Error: First name cannot be blank.'
//         })
//     }   
//     if (!password) {
//         return res.send({
//             success: false,
//             messsage: 'Error: First name cannot be blank.'
//         })
//     }

//     email = email.toLowerCase();

//     // Steps:
//     // 1. Verify email doesn't exist
//     // 2. Save
//     User.find({
//         email: email
//     }, (err, previousUsers) => {
//         if (err) {
//             return res.send({
//                 success: false,
//                 messsage: 'Error: Server error.'
//             })
//         } else if (previousUsers.length > 0) {
//             return res.send({
//                 success: false,
//                 messsage: 'Error: User already exists.'
//             })
//         } 

//         const newUser = new User();
//         newUser.email = email;
//         newUser.firstName = firstName;
//         newUser.lastName = lastName;
//         newUser.password = newUser.generateHash(password)
//         newUser.save((err, user) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     messsage: 'Error: Server Error'
//                 })
//             }
//             return res.send({
//                 succes: true,
//                 message: 'Signed up'
//             })
//         })
//     })

// })

module.exports = router;