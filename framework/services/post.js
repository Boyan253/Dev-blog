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

if (post.imageUrl != 'data:image/png;base64,') {
    console.log(post.imageUrl);
    existing.image = post.imageUrl
}


    existing.tags = post.tags
    existing.description = post.description
    // existing.location = post.location
    await existing.save()
    return existing
}
async function deletePost(postId) {
    return Post.findByIdAndDelete(postId)
}
module.exports = {
    create, getAllPosts, updatePost,deletePost
}