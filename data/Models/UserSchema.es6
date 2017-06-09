import mongoose from 'mongoose';

import Todo from './ToDoSchema.es6';

let UserSchema = new mongoose.Schema({
  name: String,
  todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Todo'}],
  type: String
});

UserSchema.set('toJSON', {getters: true});

const User = mongoose.model('User', UserSchema);

export default User;

export const addUser = (name) => {
  return new Promise((resolve, reject) => {
    User.findOne({name: name}, (err, user) => {
      // TODO: check for duplicate user
      var newUser = new User({
        name: name,
        todos: [],
      });
      newUser.save((err, res) => {
        err ? reject(err) : resolve(res);
      })
    });
  })
}

export const getViewer = (name) => {
  return new Promise((resolve, reject) => {
    User.findOne({name: name}, (err, user) => {
      err ? reject(err) : resolve(user);
    })
  })
}
//
// exports.UserSchema = User;
//
// function getUserById(id) {
//   return new Promise((resolve, reject) => {
//     User.findOne({id:id}).populate('todos').exec((err,res) => {
//         err ? reject(err) : resolve(res);
//     });
//   });
// }
//
// exports.getUserById = getUserById;
//
// exports.updateUser = (user) => {
//   return new Promise((resolve, reject) => {
//     user.save((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };
//
// exports.getListOfUsers = () => {
//   return new Promise((resolve, reject) => {
//     User.find({}).populate('todos').exec((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };
//
// exports.addUser = (root, {name}) => {
//   var newUser = new User({
//     name: name,
//   });
//
//   return new Promise((resolve, reject) => {
//     newUser.save((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };
//
// exports.updateUser = ({name, id}) => {
//   let modify = {};
//
//   name ? modify.name = name : null;
//
//   return new Promise((resolve, reject) => {
//     User.update({id: id}, modify, (err, res) => {
//       res.id = id;
//       err ? reject(err) : resolve(res);
//     });
//   });
// };
