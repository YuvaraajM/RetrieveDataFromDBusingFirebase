const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require('../retrievedata-1cec4-firebase-adminsdk-8mx4v-695530836d.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://retrievedata-1cec4.firebaseio.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.retrieve = functions.https.onCall((data)=>{
    var dbRef=admin.database().ref().child('people');
    let cref=dbRef.child(data.id);
    // dbRef.child(id).on((snap)=>{
    //     return console.log(snap.val());
    // })
    cref.on("value",snap =>{
        var name1 = snap.child('name').val();
        console.log(name1);
        return {
            name:name1
        }
        // return console.log(name1);{
        //     name:name1
        // }
    })
    })

exports.add = functions.https.onCall((data)=>{
    return {
        result :data.a+data.b
    }
})