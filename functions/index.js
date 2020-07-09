const functions = require('firebase-functions');
const express = require('express');
const app = express();
const {
    db,
    admin
} = require('./util/admin')

const config = require('./util/config')
const firebase = require('firebase');
firebase.initializeApp(config);

app.get('/user',(req,res) => {
    db.collection('users')
    .get()
    .then((data) =>{
        let user = [];
        data.forEach((doc)=>{
            user.push(doc.data());
        })
        return res.json(user);
    })  
    .catch((err)=> console.error(err));
})
app.post('/user',(req,res)=>{
    const newUser = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone
    };
    db.collection('users')
    .add(newUser)
    .then((doc)=>{
        res.json({message : `document ${doc.id} created`});
    })
    .catch((err)=>{
        res.status(500).json({error : "something went wrong "})
        console.error(err);
    });
})
exports.api = functions.https.onRequest(app);