const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5912416fcc9df47a075a068a ';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var userId = '59121f583c571a6461dbf5cd';

if(!ObjectID.isValid(userId)) {
    console.log('ID not valid');
}

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('No user found');
    }
    console.log('User:', user);
}, (e) => console.log(e));