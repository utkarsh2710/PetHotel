const admin = require('firebase-admin');
var serviceAccount = require("./admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pethotel-e7d26.firebaseio.com"
});

const db = admin.firestore();

module.exports = {
    admin,
    db
};