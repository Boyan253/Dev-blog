const authController = require('../controllers/auth')
const postController = require('../controllers/post')

module.exports = (app) => {

    app.use(authController)
    app.use(postController)

    //other use >


    app.get('*', (req, res) => {
        res.render('404', { title: "Page not found" })
    })
}