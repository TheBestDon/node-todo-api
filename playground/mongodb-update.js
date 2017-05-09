//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5911fffa0d4c9142449417ec')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

     db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59120ae40d4c914244941b41')
    }, {
        $set: {
            name: 'Donatas'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

   // db.close();
});