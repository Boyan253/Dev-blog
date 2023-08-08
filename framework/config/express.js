const express = require('express')
const { create: handlebars } = require('express-handlebars')
const cors = require('cors')
const session = require('express-session')
const userSession = require('../middleware/userSession')
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }).engine)
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set('view engine', '.hbs')
    app.use('/static', express.static('static'))
    app.use(session({
        secret: 'Super Secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: "auto"
        }
    }))
    app.use(express.urlencoded({ extended: false }))
    app.use(userSession())

}