const { Schema, model, Types: { ObjectId } } = require('mongoose')

//TODO change user model according to the exam description
//TODO add validation

const userSchema = new Schema({
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: {type: String, default: 'Hello, I am new to this blog!'},
    profilePicture: {type: String, default: 'https://th.bing.com/th/id/OIP.ruat7whad9-kcI8_1KH_tQHaGI?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
});


userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
})
const User = model('User', userSchema)

module.exports = User