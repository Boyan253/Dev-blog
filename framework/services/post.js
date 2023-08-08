const Post = require("../models/Post")

async function create(data) {
    console.log(data);
    const newPost = new Post(data)
    await newPost.save()
}

async function getAllPosts() {
    return Post.find()
}

async function updatePost(id, post) {

    const existing = await Post.findById(id)

    existing.title = post.title


    existing.image = post.imageUrl


    existing.tags = post.tags
    existing.description = post.description
    // existing.location = post.location
    await existing.save()
    return existing
}

module.exports = {
    create, getAllPosts, updatePost
}