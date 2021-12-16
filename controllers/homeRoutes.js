const router = require("express").Router();
const { User, Post } = require('../models')

router.get("/", async (req, res)=>{
    try{
        const postData = await Post.findAll({
            include: [User]
        });

        const posts = postData.map((post) => post.get({ plain: true}))

        res.render("all-posts", { posts })
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/login", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect("/")
        return;
    }
    res.render("login")
})

router.get("/signup", (req, res)=>{
    if(req.session.loggedIn){
        res.direct("/")
        return;
    }
    res.render("signup")
})

module.exports = router;