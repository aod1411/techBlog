const router = require("express").Router();
const { User }  = require('../../models/user.js')

"/api/user"

router.post('/', async (req, res)=>{
    console.log("REQ.BODY FROM SIGN UP FORM", req.body)
    try{
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(()=>{
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.json(newUser)
        })

    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;