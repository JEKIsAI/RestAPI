const express = require ('express');
const Post = require('../models/post.js'); //const Post = require('../models/post');
const router = express.Router();

router.post('/', async(req,res) => {
    //console.log(req.body);  //ver respuesta del post en consola
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save(); //Metodo guardar (insert) en la BD
        res.json(savedPost);
    }catch (error) {
        res.json({message:error});
    }
});

module.exports = router;
//bloques