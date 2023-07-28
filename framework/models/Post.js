const { Schema, model, Types: { ObjectId } } = require('mongoose')

//TODO change user model according to the exam description
//TODO add validation

const postSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    tags: { type: [String] },
    description: { type: String, required: true },
});



const Post = model('User', postSchema)

module.exports = Post