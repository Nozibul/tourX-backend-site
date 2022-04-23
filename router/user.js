const express = require('express');

const {user, register, login } = require('../controllers/user')
const router = express.Router();

// user route
router.get("/", (req, res)=>{
    res.send(`hello world get`)
});

// register route
router.post("/register", register);

// sign in route
router.post('/login', login)

module.exports = router ;