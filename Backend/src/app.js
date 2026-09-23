const express = require('express');
const app = express();
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model')
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //for text readability 

const upload = multer({ storage: multer.memoryStorage() }); //for image readability


app.post('/create-post', upload.single('Image'), async(req, res) => {
    console.log (req.body);
    console.log (req.file);
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded. Please attach a file with the key "Image".' });
    }
    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        Image: result.url,
        Caption: req.body.Caption
    })

    res.status(201).json({
        message: 'Post created successfully',
        post: post
    })
})

app.get('/posts', async (req, res) => {
    const posts = await postModel.find();

    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
})


module.exports = app;
