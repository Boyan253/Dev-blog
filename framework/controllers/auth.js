const router = require('express').Router()
const { isUser, isGuest } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { register, login } = require('../services/user');
const { mapErrors } = require('../util/mappers');
const jwt = require('jsonwebtoken');





router.post('/register', async (req, res) => {
console.log('in the framework');
    //TODO check form action, method, field names
    try {
        console.log(req.body);
        if (req.body.password.trim() == '') {
            throw new Error('Password is required')
        }
        else if (req.body.password != req.body.repass) {
            throw new Error('Passwords dont match')
        }
        const user = await register(req.body.email, req.body.password, req.body.firstName, req.body.lastName)

        const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });

      
    } catch (err) {
        console.error(err)

        //TODO send error messages
        
        res.json(err)

    }

})

//TODO check form action, method, field names

router.post('/login', isGuest(), async (req, res) => {
    try {

        const user = await login(req.body.email, req.body.password)

        const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        // Send the JWT token as a response
        console.log('success');
        res.json({ token });
    } catch (error) {
        //TODO send error messages

        console.error(error)
        res.json(error)
    };

})
router.get('/logout', isUser(), (req, res) => {
    delete req.session.user
    res.redirect('/')
})
module.exports = router