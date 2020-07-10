const functions = require('firebase-functions');
const express = require('express');
const app = express();
const {
    db,
    admin
} = require('./util/admin')

const {
    signUp,
    login
} = require('./handlers/user');




//login signup routes
app.post('/signUp',signUp);
app.post('/login/',login);


exports.api = functions.https.onRequest(app);