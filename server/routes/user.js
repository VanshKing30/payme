const express = require('express');
const router = express.Router();

const {userSignup ,  userSignin , transferMoney , getAllUsers} = require('../controllers/userController');

router.post('/user/signup' , userSignup);

router.post('/user/sigin' , userSignin);

router.post('/account/transfer' , transferMoney );

router.get('/user/getAlluser' , getAllUsers);


module.exports = router;