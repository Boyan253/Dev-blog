const Post = require('../models/Post');
const User = require('../models/User');
const postService = require('../services/post');

const router = require('express').Router()


router.get('/', async (req, res) => {

    try {
        const response = await postService.getAllPosts()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
})


router.post('/create', (req, res) => {
    console.log('in the back end');
    console.log(req.body);
    const data = {
        title: req.body.data.title,
        image: req.body.data.image,
        tags: req.body.data.tags,
        description: req.body.data.description,
        ownerId: req.body.data.ownerId,
        ownerEmail: req.body.data.ownerEmail
    }
    data.image = `data:image/png;base64,${req.body.data.image}`
    try {
        postService.create(data)
    } catch (error) {

    }

})

router.get('/details/:id', async (req, res) => {

    try {
        //last Time i was trying to do details and connect it with the front end 
        const { id } = req.params
        console.log(id);

        const singularPost = await Post.findById(id)
        res.json({ singularPost })


    }

    catch (err) {
        console.log(err);
    }

})

router.get('/profile/:userId', async (req, res) => {

    const id = req.params.userId
    const token = req.headers.authorization;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     console.log('Profile does not exist!');

    //     return res.status(400).json({ error: 'Invalid profile' });

    // }


    try {
        const currentUser = await User.findById(id)
        const userPost = await Post.find({ ownerId: currentUser._id })
        res.json(userPost)
    } catch (error) {
        res.status(404)
    }

})
router.get('/users/:userId', async (req, res) => {

    const id = req.params.userId
    // const token = req.headers.authorization;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ error: 'Invalid profile' });

    // } else if (!await User.findById(req.params.userId)) {
    //     return res.status(400).json({ error: 'Invalid profile' });

    // }
    // if (token == 'undefined') {
    //     return res.status(401).json({ message: 'Missing authorization token' });
    // }
    const currentUser = await User.findById(id)
    console.log(currentUser);
    // profilePicture: currentUser.profilePicture
    const reworkedUser = {
        id: currentUser._id, email: currentUser.email, firstName: currentUser.firstName,
    }
    console.log(reworkedUser);

    res.json([{ reworkedUser }])

})
router.put('/edit/:postId', async (req, res) => {

    // const token = req.headers.authorization;
    // console.log(token);
    // if (token == undefined) {
    //     return res.status(401).json('no Auth')
    // }
    console.log(req.body);
    const { description, image, tags, title } = req.body.data;
    let imageUrl
    let data
    if (typeof image !== "object" && image !== undefined) {

        imageUrl = `data:image/png;base64,${image}`
        data = { imageUrl, description, title, tags };//polzvai id vmesto username

    }
    else {

        data = { location, imageUrl, description, title, tags };//polzvai id vmesto username
    }
    const id = req.params.postId

    try {
        const editResponse = await postService.updatePost(id, data)
        res.json({ editResponse })

    } catch (err) {
        console.log(err);
    }
});




module.exports = router
